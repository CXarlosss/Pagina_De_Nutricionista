"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { type Post } from "@/types/post";

export const PostCard = ({ article }: { article: Post }) => {
  const categoryMap: Record<string, string> = {
    "Psiconutrición": "articulos",
    "Salud femenina": "articulos",
    "Recetas": "recetas",
    "Podcast": "podcast",
  };

  const categoryPath = categoryMap[article.category] || "articulos";
  const href = `/blog/${categoryPath}/${article.slug}`;

  return (
    <Link href={href}>
      <motion.article
        whileHover={{
          scale: 1.02,
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="overflow-hidden rounded-xl border border-primary/20 shadow-xl transition hover:border-primary cursor-pointer bg-white" // Removed dark:bg-zinc-900
      >
        {/* Imagen */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Contenido */}
        <div className="p-5">
          <p className="mb-1 text-xs text-gray-600"> {/* Removed dark:text-gray-400 */}
            {format(new Date(article.date), "d 'de' MMMM 'de' yyyy", {
              locale: es,
            })}
          </p>

          {/* TÍTULO CON GRADIENTE */}
          <h3 className="mb-3 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {article.title}
          </h3>

          <p className="mb-4 text-sm text-gray-700"> {/* Removed dark:text-gray-300 */}
            {article.excerpt}
          </p>

          <span className="text-primary text-sm font-medium hover:underline">
            Leer más →
          </span>
        </div>
      </motion.article>
    </Link>
  );
};