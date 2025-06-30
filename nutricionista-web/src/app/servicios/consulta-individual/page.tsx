"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const beneficios = [
  "Mejorar tu digestión y energía diaria.",
  "Lograr tus objetivos sin obsesiones ni restricciones.",
  "Recuperar el placer por comer y confiar en tu cuerpo.",
  "Adaptar tu alimentación a tu estilo de vida real y sostenible."
];

const problemasFrecuentes = [
  "Has probado mil dietas y siempre acabas en el mismo punto.",
  "No sabes qué comer sin sentirte culpable o confundida.",
  "Te falta energía y motivación para cuidar de ti como mereces."
];

const estructuraConsulta = [
  "Primera sesión: Evaluamos tu historia, objetivos, estilo de vida y alimentación.",
  "Plan personalizado: Adaptado a ti, sin plantillas ni normas rígidas.",
  "Seguimientos: Revisión, ajustes y acompañamiento constante para avanzar a tu ritmo."
];

export default function ConsultaIndividualPage() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-gray-800 dark:text-white">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Consulta Individual
      </motion.h1>

      {/* Problemas comunes */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4">¿Te sientes identificada?</h2>
        <ul className="list-disc pl-6 space-y-2">
          {problemasFrecuentes.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </motion.div>

      {/* Beneficios */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4">Con la consulta individual podrás...</h2>
        <ul className="space-y-3">
          {beneficios.map((b, i) => (
            <li key={i} className="flex items-center gap-2">
              <FaCheckCircle className="text-primary" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Estructura del proceso */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4">¿Cómo será el proceso?</h2>
        <ul className="space-y-2">
          {estructuraConsulta.map((e, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-300">
              {e}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Llamada a la acción */}
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
          Reservar mi primera sesión
        </Link>
      </motion.div>
    </section>
  );
}
