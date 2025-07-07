"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Sobre mí", href: "/sobre-mi" },
  {
    name: "Servicios",
    submenu: [
      { name: "Consulta individual", href: "/servicios/consulta-individual" },
      { name: "Programas grupales", href: "/servicios/programas" },
      { name: "Charlas y talleres", href: "/servicios/talleres" },
      { name: "Recursos gratuitos", href: "/servicios/recursos" },
    ],
  },
  {
    name: "Blog",
    submenu: [
      { name: "Artículos", href: "/blog/articulos" },
      { name: "Recetas", href: "/blog/recetas" },
      { name: "Podcast", href: "/blog/podcast" },
    ],
  },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="fixed top-[36px] left-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 shadow-sm">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-primary">
          Nutricionista
        </Link>

        <ul className="flex gap-6 items-center">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setOpenMenu(item.name)}
              onMouseLeave={() => item.submenu && setOpenMenu(null)}
            >
              {item.submenu ? (
                <>
                  <button className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary transition">
                    {item.name}
                  </button>

                  <AnimatePresence>
                    {openMenu === item.name && (
                      <motion.ul
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-2 w-48 space-y-2"
                      >
                        {item.submenu.map((subitem) => (
                          <li key={subitem.name}>
                            <Link
                              href={subitem.href}
                              className="block text-sm text-gray-700 dark:text-gray-200 hover:text-primary px-3 py-1 rounded transition"
                            >
                              {subitem.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary transition"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
