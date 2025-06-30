"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaChalkboardTeacher, FaMicrophoneAlt, FaCheckCircle } from "react-icons/fa";
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
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Charlas y Talleres
      </motion.h1>

      {/* Introducción */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg max-w-2xl mx-auto">
          Si formas parte de un equipo, comunidad o empresa y quieres fomentar hábitos saludables de forma cercana y práctica, estás en el lugar correcto.
        </p>
      </motion.div>

      {/* Tipos */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaMicrophoneAlt className="text-primary" /> ¿Qué ofrezco?
        </h2>
        <ul className="space-y-3">
          {tipos.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <FaCheckCircle className="text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Objetivos */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaChalkboardTeacher className="text-primary" /> ¿Qué buscamos lograr?
        </h2>
        <ul className="space-y-2">
          {objetivos.map((item, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Link
          href="/contacto"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/80 transition"
        >
          Solicitar una propuesta
        </Link>
      </motion.div>
      
<TallerList />
    </section>
  );
}
