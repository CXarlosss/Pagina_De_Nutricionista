// src/app/servicios/recursos/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaDownload, FaFileAlt, FaVideo, FaList } from "react-icons/fa";

const recursos = [
  {
    titulo: "Mini guía: Menús semanales equilibrados",
    descripcion: "Un plan de comidas fácil, práctico y sin restricciones para organizarte sin estrés.",
    icono: <FaFileAlt className="text-primary w-8 h-8" />, // Icono más grande
    enlace: "/docs/menu-semanal.pdf",
  },
  {
    titulo: "Clase gratuita: Comer sin culpa",
    descripcion: "Video de 15 minutos para desmontar mitos y reconciliarte con tu alimentación. Este video es el primer episodio del podcast 'Partiendo el koko'.", // Descripción actualizada con info de YouTube
    icono: <FaVideo className="text-primary w-8 h-8" />, // Icono más grande
    enlace: "https://www.youtube.com/watch?v=d8g8tokcWf8",
  },
  {
    titulo: "Plantilla: Lista de la compra consciente",
    descripcion: "Descarga esta herramienta imprimible para planificar tus compras con cabeza y corazón.",
    icono: <FaList className="text-primary w-8 h-8" />, // Icono más grande
    enlace: "/docs/lista-compra.pdf",
  },
];

export default function RecursosPage() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-gray-800 dark:text-white">
      {/* Hero Section para Recursos */}
      <motion.div
        className="text-center mb-16 relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-zinc-800 dark:to-zinc-900 p-8 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Recursos Gratuitos
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Aquí tienes una selección de herramientas, plantillas y recursos descargables que he creado para acompañarte en tu camino hacia una alimentación más libre, consciente y real.
        </p>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"> {/* Ajustado a 3 columnas en pantallas grandes */}
        {recursos.map((r, i) => (
          <motion.div
            key={i}
            className="p-8 border rounded-lg bg-white dark:bg-zinc-900 dark:border-zinc-700 shadow-lg flex flex-col items-start" // Flexbox para alinear contenido
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4"> {/* Espaciado mejorado */}
              {r.icono}
              <h3 className="text-xl font-semibold">{r.titulo}</h3> {/* Título más grande */}
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-6 flex-grow">{r.descripcion}</p> {/* Texto más grande y flex-grow para igualar alturas */}
            <Link
              href={r.enlace}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 text-base bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/80 transition-all shadow-md mt-auto" // Estilo de botón y mt-auto para alineación inferior
            >
              <FaDownload /> Descargar / Ver
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}