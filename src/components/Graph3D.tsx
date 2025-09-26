"use client";

import { loadGLTFModel } from "@/lib/model";
import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

// Constants
const ANIMATION_CONFIG = {
  TOTAL_FRAMES: 100,
  EASING_DIVISOR: 120,
  ROTATION_MULTIPLIER: 20,
} as const;

const CAMERA_CONFIG = {
  SCALE: 4.2,
  INITIAL_ANGLE: 0.2 * Math.PI,
  RADIUS: 20,
  Y_POSITION: 10,
  NEAR: 0.01,
  FAR: 50000,
} as const;

const SCENE_CONFIG = {
  TARGET: new THREE.Vector3(-0.5, 1.2, 0),
  AMBIENT_LIGHT_COLOR: 0xcccccc,
  AMBIENT_LIGHT_INTENSITY: Math.PI,
} as const;

const MODEL_CONFIG = {
  PATH: "/logo3d.glb",
  OPTIONS: { receiveShadow: false, castShadow: false },
} as const;

// Utility functions
const easeOutCirc = (x: number): number => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
};

const calculateInitialCameraPosition = (): THREE.Vector3 => {
  return new THREE.Vector3(
    CAMERA_CONFIG.RADIUS * Math.sin(CAMERA_CONFIG.INITIAL_ANGLE),
    CAMERA_CONFIG.Y_POSITION,
    CAMERA_CONFIG.RADIUS * Math.cos(CAMERA_CONFIG.INITIAL_ANGLE)
  );
};

const calculateRotatedPosition = (
  initialPosition: THREE.Vector3,
  rotSpeed: number
): { x: number; z: number } => {
  const cosRot = Math.cos(rotSpeed);
  const sinRot = Math.sin(rotSpeed);
  
  return {
    x: initialPosition.x * cosRot + initialPosition.z * sinRot,
    z: initialPosition.z * cosRot - initialPosition.x * sinRot,
  };
};

// Types
interface Graph3DProps {
  width: number;
  height: number;
}

interface ThreeJSRefs {
  scene: THREE.Scene;
  camera: THREE.OrthographicCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  animationId: number | null;
}

export const Graph3D: React.FC<Graph3DProps> = ({ width, height }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const threeRef = useRef<Partial<ThreeJSRefs>>({});
  const frameRef = useRef(0);

  // Initialize renderer
  const initializeRenderer = useCallback((container: HTMLDivElement): THREE.WebGLRenderer => {
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    
    return renderer;
  }, [width, height]);

  // Initialize camera
  const initializeCamera = useCallback((): THREE.OrthographicCamera => {
    const { SCALE, NEAR, FAR } = CAMERA_CONFIG;
    
    const camera = new THREE.OrthographicCamera(
      -SCALE, SCALE, SCALE, -SCALE, NEAR, FAR
    );
    
    const initialPosition = calculateInitialCameraPosition();
    camera.position.copy(initialPosition);
    camera.lookAt(SCENE_CONFIG.TARGET);
    
    return camera;
  }, []);

  // Initialize scene
  const initializeScene = useCallback((): THREE.Scene => {
    const scene = new THREE.Scene();
    
    const ambientLight = new THREE.AmbientLight(
      SCENE_CONFIG.AMBIENT_LIGHT_COLOR,
      SCENE_CONFIG.AMBIENT_LIGHT_INTENSITY
    );
    scene.add(ambientLight);
    
    return scene;
  }, []);

  // Initialize controls
  const initializeControls = useCallback((
    camera: THREE.OrthographicCamera,
    renderer: THREE.WebGLRenderer
  ): OrbitControls => {
    const controls = new OrbitControls(camera, renderer.domElement);
    
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.target.copy(SCENE_CONFIG.TARGET);
    
    return controls;
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    const { scene, camera, renderer, controls } = threeRef.current;
    
    if (!scene || !camera || !renderer) return;

    threeRef.current.animationId = requestAnimationFrame(animate);
    
    const currentFrame = frameRef.current;
    frameRef.current = Math.min(currentFrame + 1, ANIMATION_CONFIG.TOTAL_FRAMES + 1);

    if (currentFrame <= ANIMATION_CONFIG.TOTAL_FRAMES) {
      // Initial rotation animation
      const initialPosition = calculateInitialCameraPosition();
      const progress = currentFrame / ANIMATION_CONFIG.EASING_DIVISOR;
      const rotSpeed = -easeOutCirc(progress) * Math.PI * ANIMATION_CONFIG.ROTATION_MULTIPLIER;
      
      const { x, z } = calculateRotatedPosition(initialPosition, rotSpeed);
      
      camera.position.set(x, CAMERA_CONFIG.Y_POSITION, z);
      camera.lookAt(SCENE_CONFIG.TARGET);
    } else if (controls) {
      // Auto-rotation phase
      controls.update();
    }

    renderer.render(scene, camera);
  }, []);

  // Load model and start animation
  const initializeModel = useCallback(async () => {
    const { scene } = threeRef.current;
    
    if (!scene) return;

    try {
      await loadGLTFModel(scene, MODEL_CONFIG.PATH, MODEL_CONFIG.OPTIONS);
      animate();
    } catch (error) {
      console.error('Error loading 3D model:', error);
    }
  }, [animate]);

  // Cleanup function
  const cleanup = useCallback(() => {
    const { renderer, animationId } = threeRef.current;
    
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    
    if (renderer) {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    }
    
    // Reset refs
    threeRef.current = {};
    frameRef.current = 0;
  }, []);

  // Main effect
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Initialize Three.js components
    const renderer = initializeRenderer(container);
    const scene = initializeScene();
    const camera = initializeCamera();
    const controls = initializeControls(camera, renderer);

    // Store references
    threeRef.current = {
      scene,
      camera,
      renderer,
      controls,
      animationId: null,
    };

    // Load model and start animation
    initializeModel();

    return cleanup;
  }, [
    initializeRenderer,
    initializeScene, 
    initializeCamera,
    initializeControls,
    initializeModel,
    cleanup
  ]);

  return <div ref={mountRef} className="w-full h-full" />;
};