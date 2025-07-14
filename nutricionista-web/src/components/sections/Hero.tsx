// src/app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center
                          bg-gradient-to-br from-blue-100 to-purple-100
                          px-6 text-center overflow-hidden rounded-b-xl shadow-xl">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 w-full z-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: "url('/images/FondoPrincipal.jpg')",
        }}
      />

      {/* Contenido encima del fondo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl" /* CHANGE: text-3xl for smallest screens, adjusted sm and lg */
        >
          Alimentación real<br />
          <span className="text-primary glow">para una vida real</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-base text-gray-700 sm:text-lg"
        >
          Aprende a comer con placer, salud y sin restricciones. Descubre el camino hacia tu bienestar con una nutricionista que te entiende.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/servicios"
            className="rounded-full border border-secondary text-secondary bg-transparent px-8 py-4 text-lg font-semibold shadow-sm transition hover:bg-secondary hover:text-white hover:scale-[1.01] hover:shadow-md"
          >
            Ver servicios
          </Link>
          <Link
            href="/sobre-mi"
            className="rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-primary hover:scale-[1.01]"
          >
            Conóceme
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};