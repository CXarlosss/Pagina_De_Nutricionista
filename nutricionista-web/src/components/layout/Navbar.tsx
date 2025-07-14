"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import NavLink from "@/components/ui/NavLink";


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
    <header className="fixed top-[36px] left-0 w-full z-50 backdrop-blur-lg bg-white/95 dark:bg-zinc-900/95 shadow-xl rounded-b-xl transition-colors duration-300"> {/* Adjusted blur, background opacity, shadow, and added transition */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-primary transition-transform hover:scale-105"> 
          Nutricionista
        </Link>

        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setOpenMenu(item.name)}
              onMouseLeave={() => item.submenu && setOpenMenu(null)}
            >
              {item.submenu ? (
                <>
                  <button className="group relative text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-primary transition-all hover:scale-105 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-primary after:transition-all after:duration-300"
>
                    {item.name}
                  </button>

                  <AnimatePresence>
                    {openMenu === item.name && (
                      <motion.ul
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 bg-white/95 dark:bg-neutral-800/95 shadow-xl rounded-xl p-2 w-56 space-y-1 border border-gray-200 dark:border-zinc-700 backdrop-blur-sm" // Adjusted width, added border, more rounded, shadow, and blur
                      >
                        {item.submenu.map((subitem) => (
                          <li key={subitem.name}>
                            <Link
                              href={subitem.href}
                              className="group relative block text-base text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-primary/10 px-3 py-2.5 rounded transition-all after:content-[''] after:absolute after:bottom-1 after:left-3 after:h-[2px] after:w-0 group-hover:after:w-[calc(100%-1.5rem)] after:bg-primary after:transition-all after:duration-300"
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
<NavLink href={item.href}>{item.name}</NavLink>



              )}
            </li>
          ))}
        </ul>
        {/* Mobile menu icon would go here for smaller screens if needed */}
      </nav>
    </header>
  );
}