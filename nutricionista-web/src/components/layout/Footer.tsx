"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/CXarlosss",
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
  },
  {
    href: "https://instagram.com/",
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
  },
  {
    href: "mailto:contacto@nutricionweb.com",
    icon: <Mail className="h-5 w-5" />,
    label: "Correo",
  },
];

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white/70 px-4 py-6 text-center text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-400">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-4"
      >
        <p className="text-xs tracking-wide">
          © {new Date().getFullYear()} Nutrición Sana. Todos los derechos reservados.
        </p>

        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};
