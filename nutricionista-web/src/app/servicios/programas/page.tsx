// src/app/servicios/consulta-individual/page.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaUsers, FaRegCalendarCheck, FaCheckCircle, FaQuestionCircle } from "react-icons/fa"; // Added FaQuestionCircle for ParaQuien section

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
  "Acceso a grabaciones si no puedes asistir en directo."
];

const paraQuien = [
  "Mujeres que quieren dejar las dietas atrás.",
  "Quienes necesitan motivación y apoyo en su proceso.",
  "Personas que valoran la comunidad como parte del cambio."
];

const testimonios = [
  {
    nombre: "Laura, 38 años",
    texto: "Gracias a este programa dejé de pelear con la comida. Me sentí acompañada de verdad."
  },
  {
    nombre: "Paula, 32 años",
    texto: "Compartir con otras mujeres me dio fuerza y motivación. Elena es una guía maravillosa."
  }
];

export default function ProgramasPage() {
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
          Programas Grupales
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Acompañarte en tu camino no tiene por qué ser en soledad. Estos programas están pensados para mujeres como tú, que quieren transformar su relación con la comida en **comunidad**.
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
            Quiero transformar mi bienestar
          </Link>
        </motion.div>
      </motion.div>

      {/* Beneficios */}
      <motion.div
        className="mb-16 bg-white dark:bg-zinc-900 rounded-lg p-8 shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3 text-primary-dark dark:text-primary-light">
          <FaUsers className="text-4xl" /> ¿Qué conseguirás?
        </h2>
        <ul className="space-y-4 text-lg">
          {beneficios.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 flex-shrink-0 text-green-500 text-2xl" /> {/* Green check for benefits */}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ¿Para quién es? */}
      <motion.div
        className="mb-16 bg-white dark:bg-zinc-900 rounded-lg p-8 shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3 text-primary-dark dark:text-primary-light">
          <FaQuestionCircle className="text-4xl" /> ¿Está hecho para ti?
        </h2>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          {paraQuien.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 flex-shrink-0 text-blue-500 text-2xl" /> {/* Blue check for eligibility */}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Qué incluye */}
      <motion.div
        className="mb-16 bg-white dark:bg-zinc-900 rounded-lg p-8 shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3 text-primary-dark dark:text-primary-light">
          <FaRegCalendarCheck className="text-4xl" /> ¿Qué incluye el programa?
        </h2>
        <ul className="space-y-4 text-lg">
          {queIncluye.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
              <FaCheckCircle className="mt-1 flex-shrink-0 text-purple-500 text-2xl" /> {/* Purple check for inclusions */}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Testimonios */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">Lo que dicen otras mujeres</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {testimonios.map((t, i) => (
            <motion.div
              key={i}
              className="p-8 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="italic mb-4 text-lg text-gray-700 dark:text-gray-300">“{t.texto}”</p>
              <p className="text-lg font-semibold text-primary">{t.nombre}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA final */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Link
          href="/contacto"
          className="inline-block bg-primary text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-primary/80 transition-all shadow-xl"
        >
          ¡Quiero unirme a la comunidad!
        </Link>
      </motion.div>
    </section>
  );
}