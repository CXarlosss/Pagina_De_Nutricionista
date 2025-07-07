"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/CXarlosss",
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/e.depetronila/",
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
  },
  {
    href: "mailto:elenap.nutricionista@gmail.com",
    icon: <Mail className="h-5 w-5" />,
    label: "Correo",
  },
];

const instagramImages = [
  "/images/Nutricionista.jpg",
  "/images/Fondo1.jpg",
  "/images/Fondo2.jpg",
  "/images/Fondo3.jpg",
  "/images/Fondo4.jpg",
  "/images/Fondo5.jpg",
  "/images/Fondo6.jpg",
];

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      {/* Sección de Instagram */}
      <section className="py-10 px-6">
        <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
          Sígueme en Instagram
        </h3>
        <div className="flex justify-center">
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            {instagramImages.map((src, i) => (
              <div key={i} className="min-w-[160px] h-[160px] relative rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Instagram ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center">
          <Link
            href="https://www.instagram.com/e.depetronila/"
            target="_blank"
            className="inline-block text-primary text-sm font-medium hover:underline"
          >
            Ver perfil completo en Instagram →
          </Link>
        </div>
      </section>

      {/* Avisos legales */}
      <section className="py-6 border-t border-gray-200 dark:border-gray-700 text-sm text-center">
        <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400">
          <Link href="/aviso-legal" className="hover:underline">
            Aviso legal
          </Link>
          <Link href="/politica-privacidad" className="hover:underline">
            Política de privacidad
          </Link>
          <Link href="/cookies" className="hover:underline">
            Política de cookies
          </Link>
          <Link href="/terminos" className="hover:underline">
            Términos y condiciones
          </Link>
        </div>
      </section>

      {/* Redes sociales y copyright */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl py-6 flex flex-col items-center gap-4 border-t border-gray-200 dark:border-gray-700"
      >
        <p className="text-xs tracking-wide text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Elena de Petronila. Todos los derechos reservados.
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
