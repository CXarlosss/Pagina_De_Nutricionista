"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaBrain, FaBalanceScale } from "react-icons/fa";

const services = [
  {
    icon: <FaLeaf size={32} />,
    title: "Nutrición clínica",
    description: "Tratamientos nutricionales para mejorar digestión, energía y salud global.",
  },
  {
    icon: <FaBrain size={32} />,
    title: "Psiconutrición",
    description: "Trabajamos tu relación con la comida sin culpa ni restricciones extremas.",
  },
  {
    icon: <FaBalanceScale size={32} />,
    title: "Salud hormonal femenina",
    description: "Acompañamiento nutricional en menstruación, síndrome premenstrual y menopausia.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-white dark:bg-zinc-900" id="servicios">
      <div className="mx-auto max-w-5xl text-center">
        {/* Título con animación */}
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
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
              className="rounded-xl border border-gray-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 p-6 shadow-md transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-primary">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Botón CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="/contacto"
            className="inline-block px-6 py-3 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/80 transition"
          >
            Quiero empezar mi cambio
          </a>
        </motion.div>
      </div>
    </section>
  );
};
