"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLeaf, FaBrain, FaBalanceScale, FaGift, FaClipboardList, FaHandHoldingHeart } from "react-icons/fa"; // Updated icon imports

const services = [
  {
    icon: <FaLeaf size={38} color="#5ac062"/>, // Increased size
    title: "Nutrición clínica",
    description:
      "Tratamientos nutricionales para mejorar digestión, energía y salud global.",
      href: "/servicios/consulta-individual",
  },
  {
    icon: <FaBrain size={38} color="#5ac062" />, // Increased size
    title: "Psiconutrición",
    description:
      "Trabajamos tu relación con la comida sin culpa ni restricciones extremas.",
      href: "/servicios/consulta-individual",
  },
  {
    icon: <FaBalanceScale size={38} color="#5ac062"/>, // Increased size
    title: "Salud hormonal femenina",
    description:
      "Acompañamiento nutricional en menstruación, síndrome premenstrual y menopausia.",
      href: "/servicios/programas",
  },
  {
    icon: <FaGift size={38} color="#5ac062"/>, // Increased size
    title: "Recursos gratuitos",
    description:
      "Plantillas, guías y materiales descargables para ayudarte desde ya en tu relación con la comida.",
    href: "/servicios/talleres",
  },
  {
    icon: <FaClipboardList size={38} color="#5ac062"/>, // Changed icon to FaClipboardList
    title: "Planes de alimentación",
    description:
      "Diseño de planes personalizados y herramientas prácticas para tu organización diaria.", // Updated description
    href: "/servicios/talleres",
  },
  {
    icon: <FaHandHoldingHeart size={38} color="#5ac062"/>, // Changed icon to FaHandHoldingHeart
    title: "Terapia nutricional",
    description:
      "Sesiones individuales para explorar tu relación emocional con la comida y construir hábitos conscientes.", // Updated description
    href: "/servicios/recursos",
  },
];

export const ServicesSection = () => {
  return (
    <section
      className="w-full px-6 py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900" // Added gradient background
      id="servicios"
    >
      <div className="mx-auto max-w-5xl text-center">
        {/* Título con animación */}
        <motion.h2
          className="mb-10 text-4xl font-bold text-gray-900 dark:text-white" // Larger title, consistent mb-12
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Servicios que te acompañan
        </motion.h2>

        {/* Grid de servicios */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary dark:border-emerald-700 dark:bg-emerald-900 dark:hover:border-primary" // Changed background to greenish, adjusted border
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }} // Reduced scale slightly for smoother effect
              transition={{ duration: 0.2, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary mb-4 flex justify-center items-center"> {/* Centered icon */}
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white"> {/* Larger and bolder title */}
                {service.title}
              </h3>
              <p className="mb-5 text-sm text-gray-700 dark:text-gray-300"> {/* Changed text size to text-sm */}
                {service.description}
              </p>
              {service.href && (
                <Link // Changed <a> to Link for Next.js routing
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline transition-colors" // Changed text size to text-sm
                >
                  Ver más →
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Botón CTA */}
        <motion.div
          className="mt-16" // Increased margin-top
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link // Changed <a> to Link for Next.js routing
            href="/contacto"
            className="bg-primary hover:bg-primary/80 inline-block rounded-full px-8 py-4 text-lg font-semibold text-white transition-all shadow-xl" // Larger and more prominent button
          >
            Quiero empezar mi cambio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
