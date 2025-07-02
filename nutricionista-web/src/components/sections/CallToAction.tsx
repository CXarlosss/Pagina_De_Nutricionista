"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6 text-center bg-primary/10 dark:bg-primary/20">
      {/* Imagen de fondo con overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 dark:opacity-15"
        style={{
          backgroundImage: "url('/images/background.jpg')",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          ¿Lista para empezar a cuidarte de verdad?
        </h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg">
          Da el primer paso hacia una relación más sana con la comida, tu cuerpo y tu bienestar.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-primary text-white text-sm font-semibold px-8 py-3 rounded-full shadow hover:bg-primary/80 transition"
        >
          Reserva tu consulta
        </Link>
      </motion.div>
    </section>
  );
};