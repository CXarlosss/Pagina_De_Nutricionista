"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const beneficios = [
  "Mejorar tu digestión y energía diaria.",
  "Lograr tus objetivos sin obsesiones ni restricciones.",
  "Recuperar el placer por comer y confiar en tu cuerpo.",
  "Adaptar tu alimentación a tu estilo de vida real y sostenible.",
];

const problemasFrecuentes = [
  "Has probado mil dietas y siempre acabas en el mismo punto.",
  "No sabes qué comer sin sentirte culpable o confundida.",
  "Te falta energía y motivación para cuidar de ti como mereces.",
];

const estructuraConsulta = [
  "Primera sesión: Evaluamos tu historia, objetivos, estilo de vida y alimentación.",
  "Plan personalizado: Adaptado a ti, sin plantillas ni normas rígidas.",
  "Seguimientos: Revisión, ajustes y acompañamiento constante para avanzar a tu ritmo.",
];
const testimonios = [
  {
    nombre: "Marta, 34 años",
    texto:
      "Gracias a Elena volví a disfrutar de comer sin culpa. Su forma de acompañar es única.",
  },
  {
    nombre: "Lucía, 41 años",
    texto:
      "Me ayudó a entender mi cuerpo, mis ciclos y cómo cuidarme con respeto. ¡Una gran profesional!",
  },
];
const faqs = [
  {
    pregunta: "¿Cuántas sesiones necesito?",
    respuesta:
      "Depende de tu objetivo, pero lo habitual es comenzar con una sesión mensual.",
  },
  {
    pregunta: "¿Es online o presencial?",
    respuesta:
      "Ambas opciones están disponibles. Podemos adaptar el formato según tus necesidades.",
  },
];
const paraQuien = [
  "Mujeres que quieren dejar las dietas y reconciliarse con la comida.",
  "Personas con digestiones complicadas o síntomas cíclicos.",
  "Quienes buscan una guía profesional y empática, sin juicio.",
];

export default function ConsultaIndividualPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 text-gray-800 dark:text-white">
      <motion.h1
        className="mb-12 text-center text-4xl font-bold"
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
        <h2 className="mb-4 text-2xl font-semibold">
          ¿Te sientes identificada?
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          {problemasFrecuentes.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </motion.div>
      {/* ¿Para quién es? */}
      <motion.div className="mb-20">
        <h2 className="mb-4 text-2xl font-semibold">
          ¿Para quién es esta consulta?
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          {paraQuien.map((item, i) => (
            <li key={i}>{item}</li>
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
        <h2 className="mb-4 text-2xl font-semibold">
          Con la consulta individual podrás...
        </h2>
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
        <h2 className="mb-4 text-2xl font-semibold">¿Cómo será el proceso?</h2>
        <ul className="space-y-2">
          {estructuraConsulta.map((e, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-300">
              {e}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Testimonios */}
      <motion.div className="mb-20">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Lo que dicen mis pacientes
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonios.map((t, i) => (
            <motion.div
              key={i}
              className="rounded-lg bg-white p-6 shadow dark:bg-zinc-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="mb-2 italic">“{t.texto}”</p>
              <p className="text-primary text-sm font-semibold">{t.nombre}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Calendario ilustrativo */}
      <motion.div className="mb-20 text-center">
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Consultas disponibles: lunes, miércoles y viernes (mañanas y tardes).
        </p>
        <Link
          href="/contacto"
          className="bg-primary hover:bg-primary/80 inline-block rounded-full px-6 py-3 text-sm font-medium text-white"
        >
          Solicita tu cita ahora
        </Link>
      </motion.div>

      {/* FAQ */}
      <motion.div className="mb-20">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Preguntas frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              className="rounded-md border p-4 dark:border-zinc-700"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <summary className="cursor-pointer font-semibold">
                {faq.pregunta}
              </summary>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {faq.respuesta}
              </p>
            </motion.details>
          ))}
        </div>
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
          className="bg-primary hover:bg-primary/80 inline-block rounded-full px-6 py-3 text-sm font-medium text-white transition"
        >
          Reservar mi primera sesión
        </Link>
      </motion.div>
    </section>
  );
}
