"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonios = [
  {
    nombre: "Marta, 34 años",
    texto: "Llegué a la consulta con una relación muy tóxica con la comida. Vivía con miedo a engordar y cada comida era una batalla. Gracias a Elena, aprendí a escuchar a mi cuerpo y a disfrutar de comer sin culpa. Su forma de acompañar es única y hoy me siento libre.",
  },
  {
    nombre: "Lucía, 41 años",
    texto: "Desde la premenopausia me sentía sin energía y con muchos altibajos. Elena me ayudó a entender mi cuerpo, mis ciclos y cómo cuidarme con respeto a través de la alimentación. Ahora entiendo mis cambios y tengo herramientas para gestionarlos. ¡Una gran profesional!",
  },
  {
    nombre: "Patricia, 29 años",
    texto: "Después de años de dietas restrictivas que me dejaban frustrada, por fin encontré una forma de alimentarme que se siente bien. El enfoque de Elena no es el peso, sino la salud y el bienestar. Me siento más fuerte, con más energía y he recuperado la paz con mi cuerpo.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-12 text-gray-900"
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
              className="bg-white border border-primary/20 p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary text-left flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-primary text-3xl mb-4" />
              <p className="italic text-lg mb-4 text-gray-700 flex-grow">“{t.texto}”</p>
              <p className="text-base font-semibold text-primary mt-auto">{t.nombre}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};