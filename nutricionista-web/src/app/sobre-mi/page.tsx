// src/app/sobre-mi/page.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa"; // Import FaCheckCircle

export default function SobreMiPage() {
  return (
    <main className="bg-white dark:bg-zinc-950 text-gray-900 dark:text-white">
      {/* Hero */}
      <section className="text-center py-24 px-6 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-zinc-800 dark:to-zinc-900 rounded-b-xl shadow-lg"> {/* Enhanced gradient and shadow */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white"
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
              width={400} // Increased size
              height={400} // Increased size
              className="rounded-2xl shadow-xl object-cover w-full h-auto max-w-sm md:max-w-md" // Responsive sizing
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">¿Por qué hago esto?</h2> {/* Consistent heading color */}
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300"> {/* Consistent text color */}
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
          <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">Mi enfoque se basa en:</h2> {/* Consistent heading color */}
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            {["La evidencia científica, no las modas.", "El respeto a tu historia y tus emociones.", "La flexibilidad alimentaria, sin restricciones.", "El disfrute como base del cambio sostenible."].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-lg shadow-md flex items-center gap-3" // Added flex for icon alignment
              >
                <FaCheckCircle className="text-primary text-2xl flex-shrink-0" /> {/* FaCheckCircle with primary color */}
                <p className="text-lg">{item}</p> {/* Text size consistent */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonio simbólico */}
      <section className="bg-white dark:bg-zinc-950 py-20 px-6">
        <div className="max-w-xl mx-auto text-center p-8 rounded-lg shadow-lg bg-zinc-50 dark:bg-zinc-900"> {/* Card styling for testimonial */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="italic text-xl text-gray-700 dark:text-gray-300" // Larger text for quote
          >
            “Gracias a Elena volví a disfrutar de comer sin culpa. Su forma de acompañar es única.”
            <footer className="mt-4 text-base font-semibold text-primary">– Marta, 34 años</footer> {/* Footer text size consistent */}
          </motion.blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6 bg-gradient-to-t from-blue-50 to-transparent dark:from-zinc-800 rounded-t-xl shadow-lg"> {/* Gradient background and shadow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"> {/* Consistent heading color */}
            ¿Te gustaría que trabajemos juntas?
          </h3>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300"> {/* Consistent text color and more margin */}
            Estoy aquí para ayudarte a lograr una relación sana con la comida y contigo misma. Da el primer paso hacia una nutrición sin culpa y llena de sentido.
          </p>
          <Link
            href="/contacto"
            className="inline-block rounded-full bg-primary px-10 py-5 text-white text-xl font-semibold shadow-xl hover:bg-primary/80 transition-all" // Larger and more prominent button
          >
            Contáctame
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
