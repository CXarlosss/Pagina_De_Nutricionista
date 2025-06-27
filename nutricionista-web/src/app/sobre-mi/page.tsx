// src/app/sobre-mi/page.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SobreMiPage() {
  return (
    <main className="bg-white dark:bg-zinc-950 text-gray-900 dark:text-white">
      {/* Hero */}
      <section className="text-center py-24 px-6 bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold leading-tight"
        >
          Mucho gusto,<br />
          soy <span className="text-primary">Elena De Petronila</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300"
        >
          Nutricionista especializada en psiconutrición, salud femenina y bienestar real. Ayudo a mujeres a liberarse de la culpa, reencontrarse con su cuerpo y disfrutar de comer.
        </motion.p>
      </section>

      {/* Imagen + texto */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/images/Nutricionista.jpg"
              alt="Foto de Elena"
              width={320}
              height={320}
              className="rounded-2xl shadow-xl object-cover w-72 h-72 md:w-80 md:h-80"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">¿Por qué hago esto?</h2>
            <p className="text-lg mb-4">
              Porque también estuve ahí: confundida, cansada de las dietas y desconectada de mi cuerpo. Me formé en nutrición para ayudar a mujeres como tú a salir de ese bucle.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Hoy, combino ciencia, escucha activa y herramientas reales para acompañarte a comer con libertad, placer y salud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mi enfoque */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Mi enfoque se basa en:</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            {[
              "La evidencia científica, no las modas.",
              "El respeto a tu historia y tus emociones.",
              "La flexibilidad alimentaria, sin restricciones.",
              "El disfrute como base del cambio sostenible.",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-lg shadow-sm"
              >
                <p className="text-lg">✅ {item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Te gustaría que trabajemos juntas?
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Estoy aquí para ayudarte a lograr una relación sana con la comida y contigo misma. Da el primer paso.
          </p>
          <Link
            href="/contacto"
            className="inline-block rounded-full bg-primary px-8 py-3 text-white text-sm font-semibold shadow-md hover:bg-primary/80 transition"
          >
            Contáctame
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
