"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa"; // Import FaQuoteLeft icon

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
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900"> {/* Added gradient background */}
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-12 text-gray-900 dark:text-white" // Larger title and consistent color
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
              className="bg-white dark:bg-zinc-900 border border-primary/20 p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary text-left flex flex-col justify-between" // Enhanced styling, added flex for content alignment
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }} // Subtle hover effect
              transition={{ delay: i * 0.1, duration: 0.5 }} // Adjusted delay for staggered animation
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-primary text-3xl mb-4" /> {/* Quote icon */}
              <p className="italic text-lg mb-4 text-gray-700 dark:text-gray-300 flex-grow">“{t.texto}”</p> {/* Larger text, flex-grow to push name to bottom */}
              <p className="text-base font-semibold text-primary mt-auto">{t.nombre}</p> {/* Larger text, pushed to bottom */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
