// src/app/servicios/page.tsx

"use client";

import { ServicesSection } from "@/components/sections/ServicesSection";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Acompañamiento nutricional<br />
            <span className="text-primary">personalizado y cercano</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            Conoce todos los servicios con los que puedo ayudarte a mejorar tu salud, tu energía y tu bienestar general.
          </p>
        </motion.div>
      </section>

      {/* Servicios */}
      <ServicesSection />

      {/* Beneficios o enfoque */}
      <section className="py-20 px-6 bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2">
          {[
            {
              title: "Atención individualizada",
              text: "Adaptamos cada plan según tus necesidades, estilo de vida y objetivos reales.",
            },
            {
              title: "Más allá de la comida",
              text: "Trabajamos tu relación con la alimentación desde el respeto, la conciencia y el disfrute.",
            },
            {
              title: "Resultados sostenibles",
              text: "Nada de dietas exprés: buscamos cambios duraderos que mejoren tu día a día.",
            },
            {
              title: "Acompañamiento real",
              text: "Estás acompañada en todo momento, con seguimiento, escucha activa y herramientas prácticas.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-gray-200 dark:border-zinc-700 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Quieres empezar tu cambio?
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Reserva tu primera consulta y empieza a mejorar tu bienestar desde hoy.
          </p>
          <Link
            href="/contacto"
            className="inline-block rounded-full bg-primary px-8 py-3 text-white text-sm font-semibold shadow-md hover:bg-primary/80 transition"
          >
            Reserva ahora
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
