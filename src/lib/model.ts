import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { DRACOLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";

const draco = new DRACOLoader();
draco.setDecoderConfig({ type: "js" });
draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");

export function loadGLTFModel(scene: THREE.Scene, glbPath: string, options: { reciveShadow?: boolean; castShadow?: boolean } = {}) {
  const { reciveShadow = true, castShadow = true } = options;

  return new Promise<void>((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.setDRACOLoader(draco);
    loader.load(glbPath, gltf => {
        const obj = gltf.scene;
        obj.name = "logo3d";
        obj.position.x = 0;
        obj.position.y = 0;
        obj.receiveShadow = reciveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);
        obj.traverse(function (child) {
            if ((child as THREE.Mesh).isMesh) {
                child.castShadow = castShadow;
                child.receiveShadow = reciveShadow;
            }
        });
        resolve();
    }, undefined, function (error) {
      reject(error);
    });
  });
}