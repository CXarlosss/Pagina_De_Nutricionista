"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaUserMd, FaBrain, FaRegCalendarCheck, FaUsers, FaChalkboardTeacher, FaGift } from "react-icons/fa"; // Nuevos iconos para más variedad

const services = [
  // Servicios que redirigen a "Consulta Individual"
  {
    icon: <FaUserMd size={38} color="#5ac062"/>,
    title: "Nutrición clínica",
    description: "Tratamientos nutricionales personalizados para mejorar digestión, energía y salud global.",
    href: "servicios/consulta-individual",
  },
  {
    icon: <FaBrain size={38} color="#5ac062" />,
    title: "Psiconutrición",
    description: "Trabajamos tu relación con la comida sin culpa ni restricciones extremas, enfocándonos en tu bienestar mental.",
    href: "servicios/consulta-individual",
  },
  // Servicio que redirige a "Programas Grupales"
  {
    icon: <FaUsers size={38} color="#5ac062"/>,
    title: "Programas grupales",
    description: "Acompañamiento en grupo para temas específicos, como la salud hormonal, compartiendo conocimientos y experiencias.",
    href: "servicios/programas",
  },
  // Servicios que redirigen a "Charlas y Talleres"
  {
    icon: <FaChalkboardTeacher size={38} color="#5ac062"/>,
    title: "Charlas y talleres",
    description: "Eventos grupales y formativos para aprender de manera práctica sobre nutrición y hábitos saludables.",
    href: "servicios/talleres",
  },
  {
    icon: <FaRegCalendarCheck size={38} color="#5ac062"/>,
    title: "Planes de alimentación",
    description: "Diseño de planes personalizados y herramientas prácticas que te ayuden en tu organización diaria.",
    href: "servicios/talleres", // Se asume que los planes se ofrecen como parte de un taller o un evento
  },
  // Servicio que redirige a "Recursos Gratuitos"
  {
    icon: <FaGift size={38} color="#5ac062"/>,
    title: "Recursos gratuitos",
    description: "Guías, plantillas y materiales descargables para empezar a cuidarte desde hoy y profundizar en tu bienestar.",
    href: "servicios/recursos",
  },
];

export const ServicesSection = () => {
  return (
    <section
      className="w-full px-6 py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      id="servicios"
    >
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          className="mb-10 text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Servicios que te acompañan
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary mb-4 flex justify-center items-center">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mb-5 text-sm text-gray-700">
                {service.description}
              </p>
              {service.href && (
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline transition-colors"
                >
                  Ver más →
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contacto"
            className="bg-primary hover:bg-primary/80 inline-block rounded-full px-8 py-4 text-lg font-semibold text-white transition-all shadow-xl"
          >
            Quiero empezar mi cambio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};