"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaUsers, FaRegCalendarCheck, FaCheckCircle } from "react-icons/fa";

const beneficios = [
  "Conectar con otras mujeres que viven lo mismo que tú.",
  "Sentirte acompañada y motivada durante el proceso.",
  "Aprender herramientas prácticas para mejorar tu alimentación y tu bienestar.",
  "Recibir apoyo profesional y emocional en cada paso."
];

const queIncluye = [
  "Sesiones grupales semanales en directo por videollamada.",
  "Material descargable con recursos, ejercicios y recetas.",
  "Grupo privado para compartir avances, dudas y apoyo mutuo.",
  "Acceso a grabaciones si no puedes asistir en directo.",
];

export default function ProgramasPage() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-gray-800 dark:text-white">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Programas Grupales
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
          Acompañarte en tu camino no tiene por qué ser en soledad. Estos programas están pensados para mujeres como tú, que quieren transformar su relación con la comida en comunidad.
        </p>
      </motion.div>

      {/* Beneficios */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaUsers className="text-primary" /> ¿Qué conseguirás?
        </h2>
        <ul className="space-y-3">
          {beneficios.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <FaCheckCircle className="text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Qué incluye */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaRegCalendarCheck className="text-primary" /> ¿Qué incluye el programa?
        </h2>
        <ul className="space-y-2">
          {queIncluye.map((item, i) => (
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
          Quiero más info
        </Link>
      </motion.div>
    </section>
  );
}
