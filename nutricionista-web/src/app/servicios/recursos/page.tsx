// src/app/servicios/recursos/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaDownload, FaFileAlt, FaVideo, FaList } from "react-icons/fa";

const recursos = [
  {
    titulo: "Mini guía: Menús semanales equilibrados",
    descripcion: "Un plan de comidas fácil, práctico y sin restricciones para organizarte sin estrés.",
    icono: <FaFileAlt className="text-primary w-6 h-6" />,
    enlace: "/docs/menu-semanal.pdf",
  },
  {
    titulo: "Clase gratuita: Comer sin culpa",
    descripcion: "Video de 15 minutos para desmontar mitos y reconciliarte con tu alimentación.",
    icono: <FaVideo className="text-primary w-6 h-6" />,
    enlace: "https://www.youtube.com/watch?v=d8g8tokcWf8",
  },
  {
    titulo: "Plantilla: Lista de la compra consciente",
    descripcion: "Descarga esta herramienta imprimible para planificar tus compras con cabeza y corazón.",
    icono: <FaList className="text-primary w-6 h-6" />,
    enlace: "/docs/lista-compra.pdf",
  },
];

export default function RecursosPage() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-gray-800 dark:text-white">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Recursos Gratuitos
      </motion.h1>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg max-w-2xl mx-auto">
          Aquí tienes una selección de herramientas, plantillas y recursos descargables que he creado para acompañarte en tu camino hacia una alimentación más libre, consciente y real.
        </p>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2">
        {recursos.map((r, i) => (
          <motion.div
            key={i}
            className="p-6 border rounded-lg bg-white dark:bg-zinc-900 dark:border-zinc-700 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              {r.icono}
              <h3 className="text-lg font-semibold">{r.titulo}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{r.descripcion}</p>
            <Link
              href={r.enlace}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
            >
              <FaDownload /> Descargar / Ver
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
