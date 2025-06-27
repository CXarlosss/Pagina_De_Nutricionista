"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex min-h-[90vh] w-full items-center justify-center bg-gradient-to-br from-primary/10 to-transparent px-6 text-center dark:from-primary/20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl"
        >
          Alimentación real<br />
          <span className="text-primary glow">para una vida real</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-base text-gray-600 dark:text-gray-300 sm:text-lg"
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
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/80"
          >
            Ver servicios
          </Link>
          <Link
            href="/sobre-mi"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Conóceme
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
