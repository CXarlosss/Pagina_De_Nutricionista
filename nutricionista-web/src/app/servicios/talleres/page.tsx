// src/app/servicios/page.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import { FaChalkboardTeacher, FaMicrophoneAlt, FaCheckCircle, FaUsers, FaClock, FaCalendarAlt } from "react-icons/fa"; // Added icons for workshop details


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

// Data for the workshops, now directly in this file
const talleres = [
  {
    id: "alimentacion-emocional",
    titulo: "Alimentación Emocional",
    descripcion: "Aprende a identificar el hambre emocional y construir una relación más sana con la comida.",
    publico: "Adultos jóvenes",
    duracion: "1h 30min",
    formato: "Presencial u online",
    image: "/images/taller-emocional.jpg" // Placeholder image for workshop
  },
  {
    id: "mitos-alimentacion",
    titulo: "Desmontando Mitos de la Alimentación",
    descripcion: "Una charla divertida para romper falsas creencias sobre lo que comemos.",
    publico: "Empresas, centros educativos",
    duracion: "1h",
    formato: "Online",
    image: "/images/taller-mitos.jpg" // Placeholder image for workshop
  },
  {
    id: "nutricion-ciclos",
    titulo: "Nutrición y Ciclos Hormonales",
    descripcion: "Cómo alimentarte para sentirte mejor en cada fase de tu ciclo menstrual.",
    publico: "Mujeres adultas",
    duracion: "2h",
    formato: "Presencial",
    image: "/images/taller-ciclos.jpg" // Placeholder image for workshop
  },
  {
    id: "mindfulness-nutricion",
    titulo: "Mindfulness y Nutrición Consciente",
    descripcion: "Practica la atención plena para mejorar tu relación con la comida y reducir el estrés.",
    publico: "Todos los públicos",
    duracion: "1h 45min",
    formato: "Online",
    image: "/images/taller-mindfullnes.jpg" // Placeholder image for new workshop
  },
];


export default function TalleresPage() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-gray-800 dark:text-white">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16 relative overflow-hidden rounded-3xl p-8 shadow-lg min-h-[400px] flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src="/images/Taller-fondo.jpg"
          alt="Charlas y Talleres de Nutrición"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0 opacity-80"
          priority
        />
        <div className="relative z-10 bg-black bg-opacity-40 p-6 rounded-lg max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Charlas y Talleres
          </h1>
          <p className="text-base max-w-2xl mx-auto text-white">
            Si formas parte de un equipo, comunidad o empresa y quieres fomentar hábitos saludables de forma cercana y práctica, estás en el lugar correcto.
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

      {/* Sección Unificada: Nuestra Propuesta de Valor */}
      <motion.div
        className="mb-16 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-zinc-800 dark:to-zinc-900 p-8 shadow-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-10 text-center text-3xl font-semibold text-gray-900 dark:text-white">
          Nuestra Propuesta de Valor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sub-sección: ¿Qué ofrezco? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-primary/20 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary"
            whileHover={{ y: -5 }}
          >
            <h3 className="mb-4 text-center text-xl font-semibold text-primary flex items-center justify-center gap-2">
              <FaMicrophoneAlt className="text-2xl" /> ¿Qué ofrezco?
            </h3>
            <ul className="space-y-3">
              {tipos.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="mt-0.5 flex-shrink-0 text-primary text-lg" />
                  <span className="text-gray-700 dark:text-gray-300 text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sub-sección: ¿Qué buscamos lograr? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-primary/20 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary"
            whileHover={{ y: -5 }}
          >
            <h3 className="mb-4 text-center text-xl font-semibold text-primary flex items-center justify-center gap-2">
              <FaChalkboardTeacher className="text-2xl" /> ¿Qué buscamos lograr?
            </h3>
            <ul className="space-y-3">
              {objetivos.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <FaCheckCircle className="mt-0.5 flex-shrink-0 text-primary text-lg" />
                  <span className="text-gray-700 dark:text-gray-300 text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Sección: Próximos Talleres y Charlas */}
      <motion.div
        className="mb-16 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900 p-8 shadow-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-6 text-center text-3xl font-semibold text-gray-900 dark:text-white">
          Próximos Talleres y Charlas
        </h2>
        <p className="mb-10 text-center text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Descubre nuestros próximos eventos y reserva tu plaza para aprender y transformar tu bienestar en un ambiente dinámico y participativo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {/* Changed to lg:grid-cols-4 and reduced gap */}
          {talleres.map((taller, i) => (
            <motion.div
              key={taller.id}
              className="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-primary/20 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary flex flex-col items-center text-center" // Reduced padding
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-24 h-24 mb-3 rounded-full overflow-hidden mx-auto"> {/* Smaller, circular image and reduced mb */}
                <Image
                  src={taller.image}
                  alt={taller.titulo}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-base font-semibold text-primary">{taller.titulo}</h3> {/* Smaller title */}
              <p className="text-gray-700 dark:text-gray-300 text-xs mb-3 flex-grow">{taller.descripcion}</p> {/* Smaller description and reduced mb */}
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400 mb-3"> {/* Reduced space-y and mb */}
                <p className="flex items-center justify-center gap-1"><FaUsers className="text-primary text-sm" /> Público: {taller.publico}</p> {/* Smaller icon */}
                <p className="flex items-center justify-center gap-1"><FaClock className="text-primary text-sm" /> Duración: {taller.duracion}</p>
                <p className="flex items-center justify-center gap-1"><FaCalendarAlt className="text-primary text-sm" /> Formato: {taller.formato}</p>
              </div>
              <Link
                href={`/talleres/${taller.id}`} // Hypothetical link to a detailed workshop page
                className="inline-block bg-primary text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-primary/80 transition-all shadow-md mt-auto" // Smaller button
              >
                Más información →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA final */}
      <motion.div
        className="text-center bg-gradient-to-t from-blue-100 to-transparent dark:from-zinc-800 p-8 rounded-xl shadow-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          ¿Listo para llevar el bienestar a tu grupo?
        </h2>
        <p className="mb-8 text-base text-gray-700 dark:text-gray-300">
          Contáctame para diseñar una charla o taller a medida para tu equipo, comunidad o evento.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-primary text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-primary/80 transition-all shadow-xl"
        >
          Solicitar una propuesta personalizada
        </Link>
      </motion.div>
    </section>
  );
}
