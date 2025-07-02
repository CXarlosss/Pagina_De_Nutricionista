// src/components/sections/TestimonialsSection.tsx

"use client";

import { motion } from "framer-motion";

const testimonios = [
  {
    nombre: "Marta, 34 años",
    texto: "Gracias a Elena volví a disfrutar de comer sin culpa. Su forma de acompañar es única.",
  },
  {
    nombre: "Lucía, 41 años",
    texto: "Me ayudó a entender mi cuerpo, mis ciclos y cómo cuidarme con respeto. ¡Una gran profesional!",
  },
  {
    nombre: "Patricia, 29 años",
    texto: "Después de años de dietas restrictivas, por fin encontré una forma de alimentarme que se siente bien.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-800 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Lo que dicen mis pacientes
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {testimonios.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 p-6 rounded-lg shadow-sm text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="italic text-sm mb-4">“{t.texto}”</p>
              <p className="text-sm font-semibold text-primary">{t.nombre}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
