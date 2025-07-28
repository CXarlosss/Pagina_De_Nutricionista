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
    <Link href={href} passHref>
      <motion.article
        whileHover={{
          scale: 1.015,
          boxShadow: "0 12px 20px -5px rgba(0, 0, 0, 0.08)",
        }}
        whileTap={{ scale: 0.985 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="group flex flex-col overflow-hidden rounded-xl border border-primary/20 shadow-md bg-white transition-all hover:border-primary hover:shadow-xl"
      >
        {/* Imagen */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col justify-between p-5 flex-grow">
          <div className="mb-4">
            <p className="mb-1 text-xs text-gray-500 uppercase tracking-wide">
              {format(new Date(article.date), "d 'de' MMMM 'de' yyyy", {
                locale: es,
              })}
            </p>

            <h3 className="mb-2 text-xl font-semibold leading-snug bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {article.title}
            </h3>

            <p className="text-sm text-gray-700 line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          <span className="mt-auto text-sm text-primary font-medium hover:underline">
            Leer más →
          </span>
        </div>
      </motion.article>
    </Link>
  );
};
