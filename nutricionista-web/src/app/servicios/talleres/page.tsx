// src/app/servicios/page.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaChalkboardTeacher, FaMicrophoneAlt, FaCheckCircle } from "react-icons/fa"; // Added FaBullhorn for the hero section
import { TallerList } from "@/components/talleres/TallerList";


const tipos = [
  "Charlas educativas para centros, asociaciones o empresas.",
  "Talleres prácticos para grupos reducidos sobre temas de nutrición y bienestar.",
  "Eventos presenciales u online adaptados a tu público y objetivos."
];

const objetivos = [
  "Sensibilizar y motivar a las personas sobre una alimentación real.",
  "Romper mitos y ofrecer herramientas claras y aplicables.",
  "Generar impacto positivo desde la cercanía y el conocimiento."
];

export default function TalleresPage() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-gray-800 dark:text-white">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16 relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-zinc-800 dark:to-zinc-900 p-8 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Charlas y Talleres
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Si formas parte de un equipo, comunidad o empresa y quieres fomentar hábitos saludables de forma cercana y práctica, estás en el lugar correcto.
        </p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            href="/contacto"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/80 transition-all shadow-md"
          >
            Solicitar una propuesta
          </Link>
        </motion.div>
      </motion.div>

      {/* Tipos */}
      <motion.div
        className="mb-16 bg-white dark:bg-zinc-900 rounded-lg p-8 shadow-md" // Card styling
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3 text-primary-dark dark:text-primary-light"> {/* Larger icon and consistent heading style */}
          <FaMicrophoneAlt className="text-4xl" /> ¿Qué ofrezco?
        </h2>
        <ul className="space-y-4 text-lg"> {/* Larger text and more spacing */}
          {tipos.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 flex-shrink-0 text-green-500 text-2xl" /> {/* Green check for consistency */}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Objetivos */}
      <motion.div
        className="mb-16 bg-white dark:bg-zinc-900 rounded-lg p-8 shadow-md" // Card styling
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3 text-primary-dark dark:text-primary-light"> {/* Larger icon and consistent heading style */}
          <FaChalkboardTeacher className="text-4xl" /> ¿Qué buscamos lograr?
        </h2>
        <ul className="space-y-4 text-lg"> {/* Larger text and more spacing */}
          {objetivos.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
              <FaCheckCircle className="mt-1 flex-shrink-0 text-blue-500 text-2xl" /> {/* Blue check for consistency */}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* CTA final */}
      <motion.div
        className="text-center bg-gradient-to-t from-blue-50 to-transparent dark:from-zinc-800 p-8 rounded-xl" // Added background gradient and padding
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          ¿Listo para llevar el bienestar a tu grupo?
        </h2>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
          Contáctame para diseñar una charla o taller a medida para tu equipo, comunidad o evento.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-primary text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-primary/80 transition-all shadow-xl" // Larger and more prominent button
        >
          Solicitar una propuesta personalizada
        </Link>
      </motion.div>

      {/* TallerList Component */}
      <TallerList />
    </section>
  );
}
