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
      className="border p-4 rounded-lg bg-white shadow hover:shadow-md transition" // Removed dark:bg-neutral-800
    >
      <h3 className="text-xl font-bold mb-2 text-primary">{taller.titulo}</h3>
      <p className="text-gray-700 mb-2">{taller.descripcion}</p> {/* Removed dark:text-gray-300 */}
      <ul className="text-sm text-gray-600 space-y-1"> {/* Removed dark:text-gray-400 */}
        <li><strong>Público:</strong> {taller.publico}</li>
        <li><strong>Duración:</strong> {taller.duracion}</li>
        <li><strong>Formato:</strong> {taller.formato}</li>
      </ul>
    </motion.div>
  );
};