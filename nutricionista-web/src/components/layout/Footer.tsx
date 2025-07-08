"use client";

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaEnvelope, FaWhatsapp, FaLinkedin, FaYoutube, FaTiktok, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"; // Import useEffect

const socialLinks = [
  {
    href: "https://github.com/CXarlosss",
    icon: <FaGithub className="h-8 w-8" />,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/e.depetronila/",
    icon: <FaInstagram className="h-8 w-8" />,
    label: "Instagram",
  },
  {
    href: "mailto:elenap.nutricionista@gmail.com",
    icon: <FaEnvelope className="h-8 w-8" />,
    label: "Correo",
  },
  {
    href: "https://api.whatsapp.com/send/?phone=34643914336",
    icon: <FaWhatsapp className="h-8 w-8" />,
    label: "WhatsApp",
  },
  {
    href: "https://www.linkedin.com/in/elenadepetronila/",
    icon: <FaLinkedin className="h-8 w-8" />,
    label: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/channel/UCBzKEph8Jk8yHLtk3i159NA",
    icon: <FaYoutube className="h-8 w-8" />,
    label: "YouTube",
  },
  {
    href: "https://www.tiktok.com/@e.depetronila",
    icon: <FaTiktok className="h-8 w-8" />,
    label: "TikTok",
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
  "/images/podcast/1x01.jpg",
  "/images/Nutricionista.jpg",
  "/images/podcast/1x01.jpg",
  "/images/IMG_1476.jpg",
];

export const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 3;
  const imageWidth = 180;
  const gapWidth = 24;

  // State to hold the current year, initialized to an empty string on server
  const [currentYear, setCurrentYear] = useState('');

  // Set the current year only on the client side after component mounts
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, instagramImages.length - imagesPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-zinc-900">
      {/* Sección de Instagram */}
      <section className="py-16 px-6 bg-gradient-to-t from-blue-50 to-transparent dark:from-zinc-800 shadow-xl">
        <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Sígueme en <span className="text-primary">Instagram</span>
        </h3>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex gap-6"
              animate={{ x: -currentIndex * (imageWidth + gapWidth) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {instagramImages.map((src, i) => (
                <motion.div
                  key={i}
                  className="min-w-[180px] h-[180px] relative rounded-3xl overflow-hidden shadow-lg border border-primary/10 flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <Image
                    src={src}
                    alt={`Instagram ${i}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Carousel Navigation Buttons */}
          {instagramImages.length > imagesPerPage && (
            <>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed z-20"
                aria-label="Previous image"
              >
                <FaChevronLeft className="text-xl" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= instagramImages.length - imagesPerPage}
                className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed z-20"
                aria-label="Next image"
              >
                <FaChevronRight className="text-xl" />
              </button>
            </>
          )}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="https://www.instagram.com/e.depetronila/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-primary/80 transition-all"
          >
            Ver perfil completo en Instagram →
          </Link>
        </div>
      </section>

      {/* Avisos legales */}
      <section className="py-10 border-t border-gray-200 dark:border-gray-700 text-center bg-gray-100 dark:bg-zinc-800">
        <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400 font-medium">
          <Link href="/aviso-legal" className="text-base hover:text-primary transition-colors">
            Aviso legal
          </Link>
          <Link href="/politica-privacidad" className="text-base hover:text-primary transition-colors">
            Política de privacidad
          </Link>
          <Link href="/cookies" className="text-base hover:text-primary transition-colors">
            Política de cookies
          </Link>
          <Link href="/terminos" className="text-base hover:text-primary transition-colors">
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
        className="mx-auto max-w-4xl py-10 flex flex-col items-center gap-6 border-t border-gray-200 dark:border-gray-700"
      >
        <p className="text-sm tracking-wide text-gray-500 dark:text-gray-400 font-normal">
          © {currentYear} Elena de Petronila. Todos los derechos reservados. {/* Using currentYear state */}
        </p>

        <div className="flex gap-6">
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
              className="rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-gray-700 text-primary hover:text-secondary"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};
