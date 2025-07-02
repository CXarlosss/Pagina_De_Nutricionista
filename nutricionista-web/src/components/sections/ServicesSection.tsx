"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaBrain, FaBalanceScale } from "react-icons/fa";
import { FaGift } from "react-icons/fa";

const services = [
  {
    icon: <FaLeaf size={32} />,
    title: "Nutrición clínica",
    description:
      "Tratamientos nutricionales para mejorar digestión, energía y salud global.",
  },
  {
    icon: <FaBrain size={32} />,
    title: "Psiconutrición",
    description:
      "Trabajamos tu relación con la comida sin culpa ni restricciones extremas.",
  },
  {
    icon: <FaBalanceScale size={32} />,
    title: "Salud hormonal femenina",
    description:
      "Acompañamiento nutricional en menstruación, síndrome premenstrual y menopausia.",
  },
  {
    icon: <FaGift size={32} />,
    title: "Recursos gratuitos",
    description:
      "Plantillas, guías y materiales descargables para ayudarte desde ya en tu relación con la comida.",
    href: "/servicios/recursos",
  },
];

export const ServicesSection = () => {
  return (
    <section
      className="w-full bg-white px-6 py-20 dark:bg-zinc-900"
      id="servicios"
    >
      <div className="mx-auto max-w-5xl text-center">
        {/* Título con animación */}
        <motion.h2
          className="mb-8 text-3xl font-bold text-gray-900 dark:text-white"
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
              className="rounded-xl border border-gray-200 bg-zinc-50 p-6 shadow-md transition hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              {service.href && (
                <a
                  href={service.href}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Ver más →
                </a>
              )}
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
            className="bg-primary hover:bg-primary/80 inline-block rounded-full px-6 py-3 text-sm font-medium text-white transition"
          >
            Quiero empezar mi cambio
          </a>
        </motion.div>
      </div>
    </section>
  );
};
