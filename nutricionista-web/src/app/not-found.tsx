// src/app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-6"
      >
        <Image
          src="/images/404.svg" // Puedes usar una imagen tipo ilustración personalizada o genérica
          alt="Página no encontrada"
          width={300}
          height={300}
          className="mx-auto"
        />

        <h1 className="text-4xl font-bold text-primary sm:text-5xl">¡Ups! Página no encontrada</h1>
        <p className="text-gray-600 max-w-md mx-auto text-lg">
          Parece que la página que buscas no existe o ha sido movida.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/80 transition"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 transition"
          >
            Contactar
          </Link>
        </div>
      </motion.div>
    </section>
  );
}