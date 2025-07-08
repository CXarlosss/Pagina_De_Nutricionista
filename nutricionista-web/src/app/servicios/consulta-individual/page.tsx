// src/app/servicios/consulta-individual/page.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const problemasFrecuentes = [
  "Has probado mil dietas y siempre acabas en el mismo punto.",
  "No sabes qué comer sin sentirte culpable o confundida.",
  "Te falta energía y motivación para cuidar de ti como mereces.",
];

const paraQuien = [
  "Mujeres que quieren dejar las dietas y reconciliarse con la comida.",
  "Personas con digestiones complicadas o síntomas cíclicos.",
  "Quienes buscan una guía profesional y empática, sin juicio.",
];

const beneficios = [
  "Mejorar tu digestión y energía diaria.",
  "Lograr tus objetivos sin obsesiones ni restricciones.",
  "Recuperar el placer por comer y confiar en tu cuerpo.",
  "Adaptar tu alimentación a tu estilo de vida real y sostenible.",
];

const estructuraConsulta = [
  "Primera sesión: Evaluamos tu historia, objetivos, estilo de vida y alimentación.",
  "Plan personalizado: Adaptado a ti, sin plantillas ni normas rígidas.",
  "Seguimientos: Revisión, ajustes y acompañamiento constante para avanzar a tu ritmo.",
];

const testimonios = [
  {
    nombre: "Marta, 34 años",
    texto: "Gracias a Elena volví a disfrutar de comer sin culpa. Su forma de acompañar es única.",
  },
  {
    nombre: "Lucía, 41 años",
    texto: "Me ayudó a entender mi cuerpo, mis ciclos y cómo cuidarme con respeto. ¡Una gran profesional!",
  },
];

const faqs = [
  {
    pregunta: "¿Cuántas sesiones necesito?",
    respuesta: "Depende de tu objetivo, pero lo habitual es comenzar con una sesión mensual.",
  },
  {
    pregunta: "¿Es online o presencial?",
    respuesta: "Ambas opciones están disponibles. Podemos adaptar el formato según tus necesidades.",
  },
  {
    pregunta: "¿Necesito traer algo a la primera consulta?",
    respuesta: "Solo tus ganas de cuidarte. Si tienes analíticas recientes, pueden ser útiles, pero no son imprescindibles.",
  },
  {
    pregunta:"¿Te sientes incómodo/a debido al aumento de peso en estos últimos años?",
    respuesta: "No estás solo/a. Muchas personas pasan por esto y es completamente normal. Juntos podemos encontrar una forma de cuidarte que te haga sentir bien contigo mismo/a.",
  },
  {
    pregunta: "¿Cuándo puedo comenzar?",
    respuesta: "Agendando la primera cita por videollamada en el calendario", 
  }
];

export default function ConsultaIndividualPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 text-gray-800 dark:text-white">
      {/* Sección principal: Imagen destacada y descripción */}
      <motion.div
        className="relative mb-16 flex min-h-[400px] items-center justify-center rounded-3xl overflow-hidden shadow-lg" // Changed rounded-xl to rounded-3xl
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/Fondo-1.jpg"
          alt="Consulta individual nutricionista"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0 opacity-75"
          priority
        />
        <div className="relative z-10 p-6 text-center bg-black bg-opacity-40 rounded-lg max-w-2xl mx-auto">
          <motion.h1
            className="mb-4 text-4xl font-bold text-white md:text-5xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Consulta Individual
          </motion.h1>
          <motion.p
            className="text-base text-white md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Una consulta pensada para ti, desde la escucha, el respeto y un enfoque 100% personalizado. Tu bienestar empieza aquí.
          </motion.p>
        </div>
      </motion.div>

      {/* Sección Unificada: Tu Camino Hacia el Bienestar */}
      <motion.div
        className="mb-16 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900 p-8 shadow-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-10 text-center text-3xl font-semibold text-gray-900 dark:text-white">
          Tu Camino Hacia el Bienestar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Grid for the three sub-sections */}
          {/* Sub-sección: ¿Para quién es esta consulta? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-primary/20 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary"
            whileHover={{ y: -5 }}
          >
            <h3 className="mb-4 text-center text-xl font-semibold text-primary">¿Para quién es esta consulta?</h3>
            <ul className="space-y-3">
              {paraQuien.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="mt-0.5 flex-shrink-0 text-primary text-lg" />
                  <span className="text-gray-700 dark:text-gray-300 text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sub-sección: ¿Te sientes identificada? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-primary/20 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary"
            whileHover={{ y: -5 }}
          >
            <h3 className="mb-4 text-center text-xl font-semibold text-primary">¿Te sientes identificada?</h3>
            <ul className="space-y-3">
              {problemasFrecuentes.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="mt-0.5 flex-shrink-0 text-primary text-lg" />
                  <span className="text-gray-700 dark:text-gray-300 text-xs">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sub-sección: ¿Cómo será el proceso? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-primary/20 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary"
            whileHover={{ y: -5 }}
          >
            <h3 className="mb-4 text-center text-xl font-semibold text-primary">¿Cómo será el proceso?</h3>
            <ul className="space-y-3">
              {estructuraConsulta.map((e, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="mt-0.5 flex-shrink-0 text-primary text-lg" />
                  <p className="text-gray-700 dark:text-gray-300 text-xs">{e}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Beneficios */}
      <motion.div 
        className="mb-16 grid items-center gap-10 md:grid-cols-2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900 p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.6, delay: 0.4 }} 
        viewport={{ once: true }}
      >
        <div className="order-2 md:order-1">
          <h2 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-white">Con la consulta individual podrás...</h2>
          <ul className="space-y-4 text-lg">
            {beneficios.map((b, i) => (
              <motion.li 
                key={i} 
                className="flex items-center gap-3 p-2 rounded-md transition-all duration-300 hover:bg-white/10 dark:hover:bg-zinc-800/50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FaCheckCircle className="flex-shrink-0 text-primary text-xl" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{b}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            // Changed rounded-xl to rounded-full for circular image
            className="relative z-10 w-[350px] h-[350px] rounded-full overflow-hidden shadow-2xl border-4 border-primary/50 hover:border-primary transition-all duration-300"
          >
            <Image
              src="/images/articles/menu-vegano.jpg"
              alt="Beneficios consulta"
              fill // Use fill to make image cover the circular container
              style={{ objectFit: 'cover' }}
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Testimonios */}
      <motion.div 
        className="mb-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900 p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.6, delay: 0.8 }} 
        viewport={{ once: true }}
      >
        <h2 className="mb-10 text-center text-3xl font-semibold text-gray-900 dark:text-white">Lo que dicen mis pacientes</h2>
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

      {/* FAQ */}
      <motion.div 
        className="mb-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900 p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.6, delay: 1.0 }} 
        viewport={{ once: true }}
      >
        <h2 className="mb-10 text-center text-3xl font-semibold text-gray-900 dark:text-white">Preguntas frecuentes</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              className="rounded-md border p-6 dark:border-zinc-700 bg-white shadow dark:bg-zinc-900 transition-all duration-300 hover:shadow-xl hover:border-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <summary className="cursor-pointer text-lg font-semibold text-primary">{faq.pregunta}</summary>
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{faq.respuesta}</p>
            </motion.details>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div 
        className="text-center bg-gradient-to-t from-blue-50 to-transparent dark:from-zinc-800 p-8 rounded-xl shadow-xl"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 1.2 }} 
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          ¿Lista para transformar tu bienestar?
        </h2>
        <p className="mb-8 text-base text-gray-700 dark:text-gray-300">
          Reserva tu primera consulta y empieza a mejorar tu salud, energía y bienestar desde hoy.
        </p>
        <Link
          href="/contacto"
          className="inline-block rounded-full bg-primary px-10 py-5 text-lg font-semibold text-white transition hover:bg-primary/80 shadow-xl"
        >
          Reservar mi primera sesión
        </Link>
      </motion.div>
    </section>
  );
}
