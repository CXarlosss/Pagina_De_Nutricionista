"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-primary dark:text-white"
          >
            Nutrición Sana ✨
          </motion.span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          {links.map((link, idx) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 + 0.2 }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-700 transition hover:text-primary dark:text-gray-200 dark:hover:text-primary"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Theme toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile toggle */}
          <button
            className="ml-2 rounded-md p-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col items-start gap-4 overflow-hidden px-6 py-4 md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            {links.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={clsx(
                    "block text-sm font-medium text-gray-700 dark:text-gray-200 transition hover:text-primary"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
