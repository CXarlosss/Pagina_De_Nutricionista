// src/components/talleres/TallerCard.tsx
"use client";

import { motion } from "framer-motion";
import type { Taller } from "@/types/taller";

type Props = {
  taller: Taller;
};

export const TallerCard = ({ taller }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border p-4 rounded-lg bg-white dark:bg-neutral-800 shadow hover:shadow-md transition"
    >
      <h3 className="text-xl font-bold mb-2 text-primary">{taller.titulo}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{taller.descripcion}</p>
      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
        <li><strong>Público:</strong> {taller.publico}</li>
        <li><strong>Duración:</strong> {taller.duracion}</li>
        <li><strong>Formato:</strong> {taller.formato}</li>
      </ul>
    </motion.div>
  );
};
