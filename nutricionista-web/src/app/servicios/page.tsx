// src/app/servicios/page.tsx

"use client";

import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-zinc-900 dark:text-white">
      {/* Hero Section */}
      <section className="from-primary/10 dark:from-primary/20 bg-gradient-to-b to-transparent px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Acompañamiento nutricional
            <br />
            <span className="text-primary">personalizado y cercano</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            Conoce todos los servicios con los que puedo ayudarte a mejorar tu
            salud, tu energía y tu bienestar general.
          </p>
        </motion.div>
      </section>

      {/* Servicios */}
      <ServicesSection />
      {/* Testimonios */}
      <TestimonialsSection />

      {/* Beneficios o enfoque */}
      <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-800">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
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
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
            >
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            ¿Quieres empezar tu cambio?
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Reserva tu primera consulta y empieza a mejorar tu bienestar desde
            hoy.
          </p>
          <Link
            href="/contacto"
            className="bg-primary hover:bg-primary/80 inline-block rounded-full px-8 py-3 text-sm font-semibold text-white shadow-md transition"
          >
            Reserva ahora
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
