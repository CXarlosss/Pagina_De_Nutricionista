"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex min-h-[85vh] w-full items-center justify-center bg-gradient-to-br from-primary/10 to-transparent px-6 text-center dark:from-primary/20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Alimentación real<br />
          <span className="text-primary">para una vida real</span>
        </h1>

        <p className="mt-4 text-base text-gray-600 dark:text-gray-300 sm:text-lg">
          Aprende a comer con placer, salud y sin restricciones. Descubre el camino hacia tu bienestar con una nutricionista que te entiende.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/servicios"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary/80"
          >
            Ver servicios
          </Link>
          <Link
            href="/sobre-mi"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Conóceme
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
