// src/app/servicios/page.tsx

"use client";

import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-zinc-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-b-xl bg-gradient-to-b from-blue-100 to-purple-100 dark:from-zinc-800 dark:to-zinc-900 px-6 py-24 text-center shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl">
            Acompañamiento nutricional
            <br />
            <span className="text-primary">personalizado y cercano</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            Conoce todos los servicios con los que puedo ayudarte a mejorar tu
            salud, tu energía y tu bienestar general.
          </p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              href="/contacto"
              className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/80 transition-all shadow-md"
            >
              Quiero empezar mi cambio
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Servicios */}
      {/* Assuming ServicesSection is already well-styled or will be provided */}
      <ServicesSection />

      {/* Testimonios */}
      {/* Assuming TestimonialsSection is already well-styled or will be provided */}
      <TestimonialsSection />

      {/* Beneficios o enfoque */}
      <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-800">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Nuestro Enfoque
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"> {/* Ajustado a 4 columnas en pantallas grandes */}
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
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-zinc-700 dark:bg-zinc-900" // Añadido shadow-lg
              >
                <h3 className="mb-3 text-xl font-semibold text-primary">{item.title}</h3> {/* Título más grande y color primario */}
                <p className="text-base text-gray-700 dark:text-gray-300">{item.text}</p> {/* Texto más grande */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 py-20 text-center bg-gradient-to-t from-blue-50 to-transparent dark:from-zinc-800"> {/* Fondo degradado para el CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            ¿Lista para transformar tu bienestar?
          </h2>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300"> {/* Texto más grande y más margen */}
            Reserva tu primera consulta y empieza a mejorar tu salud, energía y bienestar desde hoy.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-primary text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-primary/80 transition-all shadow-xl" // Botón más grande y con más sombra
          >
            Reserva tu sesión ahora
          </Link>
        </motion.div>
      </section>
    </div>
  );
}