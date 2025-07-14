"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import { FaDownload, FaFileAlt, FaVideo, FaList } from "react-icons/fa";

const recursos = [
  {
    titulo: "Mini guía: Menús semanales equilibrados",
    descripcion: "Un plan de comidas fácil, práctico y sin restricciones para organizarte sin estrés.",
    icono: <FaFileAlt className="text-primary w-6 h-6" />, // Icono más pequeño y color primario
    enlace: "/docs/menu-semanal.pdf",
  },
  {
    titulo: "Clase gratuita: Comer sin culpa",
    descripcion: "Video de 15 minutos para desmontar mitos y reconciliarte con tu alimentación. Este video es el primer episodio del podcast 'Partiendo el koko'.",
    icono: <FaVideo className="text-primary w-6 h-6" />, // Icono más pequeño y color primario
    enlace: "https://www.youtube.com/watch?v=d8g8tokcWf8",
  },
  {
    titulo: "Plantilla: Lista de la compra consciente",
    descripcion: "Descarga esta herramienta imprimible para planificar tus compras con cabeza y corazón.",
    icono: <FaList className="text-primary w-6 h-6" />, // Icono más pequeño y color primario
    enlace: "/docs/lista-compra.pdf",
  },
];

export default function RecursosPage() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-gray-800"> {/* Eliminado dark:text-white */}
      {/* Hero Section para Recursos */}
      <motion.div
        className="text-center mb-16 relative overflow-hidden rounded-3xl p-8 shadow-lg min-h-[300px] flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src="/images/recursos.jpg" // Placeholder image for the hero section
          alt="Recursos Gratuitos de Nutrición"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0 opacity-80"
          priority
        />
        <div className="relative z-10 bg-black bg-opacity-40 p-6 rounded-lg max-w-2xl mx-auto"> {/* Dark overlay for text readability */}
          <h1 className="text-4xl font-bold mb-4 text-white"> {/* Text color white */}
            Recursos Gratuitos
          </h1>
          <p className="text-base max-w-2xl mx-auto text-white"> {/* Text color white */}
            Aquí tienes una selección de herramientas, plantillas y recursos descargables que he creado para acompañarte en tu camino hacia una alimentación más libre, consciente y real.
          </p>
        </div>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-xl"> {/* Eliminado dark:from-zinc-800 dark:to-zinc-900 */}
        {recursos.map((r, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-lg bg-white border border-primary/20 shadow-md flex flex-col items-start transition-all duration-300 hover:shadow-lg hover:border-primary" // Eliminado dark:bg-zinc-900
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }} // Lift on hover
          >
            <div className="flex items-center gap-4 mb-4">
              {r.icono}
              <h3 className="text-lg font-semibold text-primary">{r.titulo}</h3> {/* Smaller title and primary color */}
            </div>
            <p className="text-sm text-gray-700 mb-6 flex-grow">{r.descripcion}</p> {/* Eliminado dark:text-gray-300 y Smaller text */}
            <Link
              href={r.enlace}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 text-base bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/80 transition-all shadow-xl mt-auto" // Consistent button styling
            >
              <FaDownload className="text-lg" /> Descargar / Ver {/* Larger icon in button */}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}