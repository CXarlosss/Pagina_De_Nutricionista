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
    <motion.article
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
    >
      <Link href={href} className="block">
        <div className="relative h-52 w-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="rounded-t-xl object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="p-5">
          <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">
            {format(new Date(article.date), "d 'de' MMMM yyyy", { locale: es })}
          </p>

          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            {article.title}
          </h3>

          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
            {article.excerpt}
          </p>

          <span className="text-primary text-sm font-medium hover:underline">
            Leer más →
          </span>
        </div>
      </Link>
    </motion.article>
  );
};
