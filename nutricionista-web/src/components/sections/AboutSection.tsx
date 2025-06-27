"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-neutral-950 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        {/* Imagen con animación */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src = "/images/Nutricionista.jpg" 
            alt="Foto de la nutricionista"
            width={300}
            height={300}
            className="rounded-2xl object-cover shadow-lg w-60 h-60 md:w-72 md:h-72"
          />
        </motion.div>

        {/* Texto con animación */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Encantada, soy: <br /><span className="text-primary">Elena De Petronila Rodríguez</span>
          </h2>
          <p className="text-lg leading-relaxed">
            Nutricionista apasionada por ayudarte a conectar con tu cuerpo, dejar atrás las dietas extremas y construir una relación sana con la comida.
          </p>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
            Creo en una alimentación real, adaptada a tu vida, que te permita disfrutar y cuidarte sin culpa. Este espacio es para acompañarte a lograrlo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
