"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  console.log("ThemeToggle mounted, current theme:", theme);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.9, rotate: 15 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Cambiar tema"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon className="h-5 w-5 text-yellow-300" />
          ) : (
            <Sun className="h-5 w-5 text-orange-500" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};
