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
    pregunta: "¿Qué pasa si no puedo seguir el plan?",
    respuesta: "No pasa nada. Ajustamos juntas. Aquí no hay castigos, solo aprendizaje y acompañamiento real.",
  },
  {pregunta:"¿Te sientes incómodo/a debido al aumento de peso en estos últimos años?",
  respuesta: "No estás solo/a. Muchas personas pasan por esto y es completamente normal. Juntos podemos encontrar una forma de cuidarte que te haga sentir bien contigo mismo/a.",
  },{
    pregunta: "¿Cuándo puedo comenzar?",
    respuesta: "Agendando la primera cita por videollamada en el calendario", 
   }

];

export default function ConsultaIndividualPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 text-gray-800 dark:text-white">
      {/* Sección principal: Imagen destacada y descripción - Opción 1 */}
      <motion.div
        className="relative mb-20 flex min-h-[400px] items-center justify-center rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/fondo4.jpg"
          alt="Consulta individual nutricionista"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0 opacity-75" // Imagen más suave
          priority
        />
        <div className="relative z-10 p-6 text-center bg-black bg-opacity-30 rounded-lg max-w-2xl mx-auto"> {/* Contenido sobre la imagen */}
          <motion.h1
            className="mb-4 text-4xl font-bold text-white md:text-5xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Consulta Individual
          </motion.h1>
          <motion.p
            className="text-lg text-white md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Una consulta pensada para ti, desde la escucha, el respeto y un enfoque 100% personalizado. Tu bienestar empieza aquí.
          </motion.p>
        </div>
      </motion.div>

      {/* El resto del código de la página sigue aquí, sin cambios */}

      {/* ¿Para quién es? */}
      <motion.div className="mb-16 rounded-lg bg-white p-8 shadow dark:bg-zinc-900" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="mb-6 text-center text-3xl font-semibold">¿Para quién es esta consulta?</h2>
        <ul className="space-y-4 text-lg md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
          {paraQuien.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 flex-shrink-0 text-primary text-2xl" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Problemas comunes */}
      <motion.div className="mb-16 rounded-lg bg-white p-8 shadow dark:bg-zinc-900" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
        <h2 className="mb-6 text-center text-3xl font-semibold">¿Te sientes identificada?</h2>
        <ul className="space-y-4 text-lg md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
          {problemasFrecuentes.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 flex-shrink-0 text-primary text-2xl" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Beneficios */}
      <motion.div className="mb-16 grid items-center gap-10 md:grid-cols-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
        <div className="order-2 md:order-1">
          <h2 className="mb-6 text-3xl font-semibold">Con la consulta individual podrás...</h2>
          <ul className="space-y-4 text-lg">
            {beneficios.map((b, i) => (
              <li key={i} className="flex items-center gap-3">
                <FaCheckCircle className="flex-shrink-0 text-primary text-2xl" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <Image
            src="/images/articles/menu-vegano.jpg"
            alt="Beneficios consulta"
            width={500}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>
      </motion.div>

      {/* Estructura del proceso */}
      <motion.div className="mb-16 rounded-lg bg-white p-8 shadow dark:bg-zinc-900" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
        <h2 className="mb-6 text-center text-3xl font-semibold">¿Cómo será el proceso?</h2>
        <ul className="space-y-4 text-lg md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
          {estructuraConsulta.map((e, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 flex-shrink-0 text-primary text-2xl" />
              <p className="text-gray-700 dark:text-gray-300">{e}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Testimonios */}
      <motion.div className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-semibold">Lo que dicen mis pacientes</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {testimonios.map((t, i) => (
            <motion.div
              key={i}
              className="rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 text-lg italic text-gray-700 dark:text-gray-300">“{t.texto}”</p>
              <p className="text-primary font-semibold text-lg">{t.nombre}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-semibold">Preguntas frecuentes</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              className="rounded-md border p-6 dark:border-zinc-700 bg-white shadow dark:bg-zinc-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <summary className="cursor-pointer text-xl font-semibold text-primary">{faq.pregunta}</summary>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">{faq.respuesta}</p>
            </motion.details>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}>
        <Link
          href="/contacto"
          className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-medium text-white transition hover:bg-primary/80 shadow-lg"
        >
          Reservar mi primera sesión
        </Link>
      </motion.div>
    </section>
  );
}