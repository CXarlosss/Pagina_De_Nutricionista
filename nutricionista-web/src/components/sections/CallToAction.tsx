"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6 text-center
                         bg-gradient-to-br from-blue-100 to-purple-100
                         rounded-xl shadow-2xl mx-auto max-w-6xl my-20"> {/* Removed dark:from-zinc-800 dark:to-zinc-900 */}
      {/* Imagen de fondo con overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-15" // Removed dark:opacity-5
        style={{
          backgroundImage: "url('/images/background.jpg')",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"> {/* Removed dark:text-white */}
          ¿Lista para <span className="text-primary">empezar a cuidarte</span> de verdad?
        </h2>
        <p className="mb-10 text-base text-gray-700"> {/* Removed dark:text-gray-300 */}
          Da el primer paso hacia una relación más sana con la comida, tu cuerpo y tu bienestar.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-primary text-white text-xl font-extrabold px-10 py-5 rounded-full
                     shadow-xl shadow-primary/50 hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
        >
          Reserva tu consulta
        </Link>
      </motion.div>
    </section>
  );
};