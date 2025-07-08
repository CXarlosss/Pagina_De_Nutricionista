"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center
                        bg-gradient-to-br from-blue-100 to-purple-100 dark:from-zinc-800 dark:to-zinc-900
                        px-6 text-center overflow-hidden rounded-b-xl shadow-xl"> {/* Enhanced gradient, shadow, and rounded corners */}
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 w-full z-0 bg-cover bg-center opacity-15 dark:opacity-5" // Adjusted opacity for better contrast
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
          className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl" // Consistent text color
        >
          Alimentación real<br />
          <span className="text-primary glow">para una vida real</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-base text-gray-700 dark:text-gray-300 sm:text-lg" // Consistent text color
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
            className="rounded-full border border-primary text-primary px-8 py-4 text-lg font-semibold transition hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white" // Enhanced hover effect: becomes filled primary button
          >
            Ver servicios
          </Link>
          <Link
            href="/sobre-mi"
            className="rounded-full border border-primary text-primary px-8 py-4 text-lg font-semibold transition hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white" // Enhanced hover effect: becomes filled primary button
          >
            Conóceme
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};