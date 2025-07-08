// src/app/servicios/programas/page.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import { FaUsers, FaRegCalendarCheck, FaCheckCircle, FaQuestionCircle } from "react-icons/fa";

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
    <section className="mx-auto max-w-5xl px-6 py-20 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16 relative overflow-hidden rounded-3xl p-8 shadow-lg min-h-[400px] flex items-center justify-center" // Added min-h and flex for centering content
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src="/images/IMG_1476.JPG" // Placeholder image for the hero section
          alt="Mujeres en programa grupal de nutrición"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0 opacity-80" // Slightly transparent image
          priority
        />
        <div className="relative z-10 bg-black bg-opacity-40 p-6 rounded-lg max-w-2xl mx-auto"> {/* Dark overlay for text readability */}
          <h1 className="text-4xl font-bold mb-4 text-white"> {/* Text color white */}
            Programas Grupales
          </h1>
          <p className="text-base max-w-2xl mx-auto text-white"> {/* Text color white */}
            Acompañarte en tu camino no tiene por qué ser en soledad. Estos programas están pensados para mujeres como tú, que quieren transformar su relación con la comida en **comunidad**.
          </p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            
          </motion.div>
        </div>
      </motion.div>

      {/* Sección Unificada: Nuestro Programa Grupal */}
      <motion.div
        className="mb-16 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-zinc-800 dark:to-zinc-900 p-8 shadow-xl" // Made gradient more pronounced
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-10 text-center text-3xl font-semibold text-gray-900 dark:text-white">
          Nuestro Programa Grupal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sub-sección: ¿Qué conseguirás? (Beneficios) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-primary/20 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary"
            whileHover={{ y: -5 }}
          >
            <h3 className="mb-4 text-center text-xl font-semibold text-primary flex items-center justify-center gap-2">
              <FaUsers className="text-2xl" /> ¿Qué conseguirás?
            </h3>
            <ul className="space-y-3">
              {beneficios.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="mt-0.5 flex-shrink-0 text-primary text-lg" />
                  <span className="text-gray-700 dark:text-gray-300 text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sub-sección: ¿Está hecho para ti? (Para Quién) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-primary/20 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary"
            whileHover={{ y: -5 }}
          >
            <h3 className="mb-4 text-center text-xl font-semibold text-primary flex items-center justify-center gap-2">
              <FaQuestionCircle className="text-2xl" /> ¿Está hecho para ti?
            </h3>
            <ul className="space-y-3">
              {paraQuien.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="mt-0.5 flex-shrink-0 text-primary text-lg" />
                  <span className="text-gray-700 dark:text-gray-300 text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sub-sección: ¿Qué incluye el programa? (Qué Incluye) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-primary/20 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary"
            whileHover={{ y: -5 }}
          >
            <h3 className="mb-4 text-center text-xl font-semibold text-primary flex items-center justify-center gap-2">
              <FaRegCalendarCheck className="text-2xl" /> ¿Qué incluye el programa?
            </h3>
            <ul className="space-y-3">
              {queIncluye.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="mt-0.5 flex-shrink-0 text-primary text-lg" />
                  <span className="text-gray-700 dark:text-gray-300 text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonios */}
      <motion.div
        className="mb-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-zinc-800 dark:to-zinc-900 p-8 rounded-lg shadow-xl" // Made gradient more pronounced
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-10 text-center text-3xl font-semibold text-gray-900 dark:text-white">Lo que dicen otras mujeres</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {testimonios.map((t, i) => (
            <motion.div
              key={i}
              className="rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-900 border border-primary/20 transition-all duration-300 hover:shadow-xl hover:border-primary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <p className="mb-4 text-base italic text-gray-700 dark:text-gray-300">“{t.texto}”</p>
              <p className="text-primary font-semibold text-sm">{t.nombre}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA final */}
      <motion.div
        className="text-center bg-gradient-to-t from-blue-100 to-transparent dark:from-zinc-800 p-8 rounded-xl shadow-xl" // Made gradient more pronounced
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          ¿Lista para transformar tu bienestar?
        </h2>
        <p className="mb-8 text-base text-gray-700 dark:text-gray-300">
          Únete a nuestra comunidad y empieza a mejorar tu salud, energía y bienestar desde hoy.
        </p>
        <Link
          href="/contacto"
          className="inline-block rounded-full bg-primary px-10 py-5 text-lg font-semibold text-white transition hover:bg-primary/80 shadow-xl"
        >
          ¡Quiero unirme a la comunidad!
        </Link>
      </motion.div>
    </section>
  );
}
