"use client";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { IconButton } from "./ui/Button/ButtonIcon";
import { cn } from "@/utils/cn";

export default function ColorModeButton({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          `bg-gray-200 dark:bg-gray-700 
          animate-pulse w-[40px] h-[40px]
          flex items-center justify-center
          rounded-md transition-colors duration-300`, className
        )}
        aria-hidden="true"
      >
        <div
          className="bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"
          style={{
            width: 24 * 0.8,
            height: 24 * 0.8,
          }}
        />
      </div>
    );
  }

  const handleToggle = (): void => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  const isDark = resolvedTheme === "dark";

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={`${theme}-${resolvedTheme}`}
        data-testid="color-mode-button"
        onClick={handleToggle}
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 10,
        }}
        className={className}
      >
        <IconButton variant="primary" aria-label="Toggle color mode">
          {isDark ? <LuSun aria-hidden="true" /> : <LuMoon aria-hidden="true" />}
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
}
