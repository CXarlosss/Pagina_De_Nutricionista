// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import NavLink from "@/components/ui/NavLink";
import { FaBars, FaTimes } from "react-icons/fa";

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
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setOpenMenu(null);
  };

  const handleMobileSubmenuToggle = (itemName: string) => {
    setOpenMenu(openMenu === itemName ? null : itemName);
  };

  return (
    <header className="fixed top-[36px] left-0 w-full z-40 backdrop-blur-lg bg-white/95 shadow-xl rounded-b-xl transition-colors duration-300"> {/* Navbar: z-40 */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-primary transition-transform hover:scale-105">
          Nutricionista
        </Link>

        {/* Desktop Navigation */}
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
                  <button className="group relative text-lg font-semibold text-gray-800 hover:text-primary transition-all hover:scale-105 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-primary after:transition-all after:duration-300">
                    {item.name}
                  </button>

                  <AnimatePresence>
                    {openMenu === item.name && (
                      <motion.ul
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 bg-white/95 shadow-xl rounded-xl p-2 w-56 space-y-1 border border-gray-200 backdrop-blur-sm"
                      >
                        {item.submenu.map((subitem) => (
                          <li key={subitem.name}>
                            <Link
                              href={subitem.href}
                              className="group relative block text-base text-gray-700 hover:text-primary hover:bg-primary/10 px-3 py-2.5 rounded transition-all after:content-[''] after:absolute after:bottom-1 after:left-3 after:h-[2px] after:w-0 group-hover:after:w-[calc(100%-1.5rem)] after:bg-primary after:transition-all after:duration-300"
                              onClick={() => {
                                setIsMobileNavOpen(false);
                                setOpenMenu(null);
                              }}
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

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileNav}
            className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
            aria-label="Toggle mobile menu"
          >
            {isMobileNavOpen ? (
              <FaTimes size={28} />
            ) : (
              <FaBars size={28} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-[100px] left-0 w-full h-[calc(100vh-100px)] bg-white/95 backdrop-blur-lg z-50 flex flex-col items-center pt-8 overflow-y-auto" // Mobile menu: z-50 (or z-[999] for absolute certainty)
          >
            {navItems.map((item) => (
              <div key={item.name} className="w-full">
                {item.submenu ? (
                  <>
                    <button
                      className="w-full text-left py-4 px-6 text-xl font-semibold text-gray-800 hover:text-primary transition-colors flex justify-between items-center"
                      onClick={() => handleMobileSubmenuToggle(item.name)}
                    >
                      {item.name}
                      <motion.span
                        animate={{ rotate: openMenu === item.name ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openMenu === item.name && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="bg-gray-50 border-t border-b border-gray-200 w-full"
                        >
                          {item.submenu.map((subitem) => (
                            <li key={subitem.name}>
                              <Link
                                href={subitem.href}
                                className="block py-3 px-10 text-lg text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
                                onClick={() => setIsMobileNavOpen(false)}
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
                    className="block py-4 px-6 text-xl font-semibold text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="py-8 w-full text-center">
              <button
                onClick={() => setIsMobileNavOpen(false)}
                className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Cerrar Menú
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}