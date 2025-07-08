"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900 text-gray-900 dark:text-white"> {/* Added gradient background */}
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center"> {/* Increased gap */}
        {/* Imagen con animación */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }} // Subtle hover effect
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20" // More rounded, stronger shadow, subtle border
          >
            
            <Image
              src="/images/Nutricionista.jpg"
              alt="Foto de la nutricionista Elena De Petronila"
              width={200} // Increased size
              height={200} // Increased size
              className="object-cover w-full h-auto max-w-sm md:max-w-md" // Responsive sizing
            />
          </motion.div>
        </motion.div>

        {/* Texto con animación */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white"> {/* Larger title and consistent color */}
            Encantada, soy: <br /><span className="text-primary">Elena De Petronila Rodríguez</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4"> {/* Consistent text color and margin */}
            Nutricionista apasionada por ayudarte a conectar con tu cuerpo, dejar atrás las dietas extremas y construir una relación sana con la comida.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-300"> {/* Consistent text color */}
            Creo en una alimentación real, adaptada a tu vida, que te permita disfrutar y cuidarte sin culpa. Este espacio es para acompañarte a lograrlo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
