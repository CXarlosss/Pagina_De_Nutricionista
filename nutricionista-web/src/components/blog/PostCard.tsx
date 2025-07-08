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
      whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} // Lift and stronger shadow on hover
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900 shadow-xl transition hover:border-primary" // Added gradient, stronger shadow, and primary border
    >
      <Link href={href} className="block">
        <div className="relative h-52 w-full overflow-hidden rounded-t-xl"> {/* Ensure rounded corners on image */}
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="p-5 bg-white dark:bg-zinc-900 rounded-b-xl"> {/* Added background to text content */}
          <p className="mb-1 text-xs text-gray-600 dark:text-gray-400"> {/* Adjusted text size and color */}
            {format(new Date(article.date), "d 'de' MMMM 'de' yyyy", { locale: es })} {/* Added year to date format */}
          </p>

          <h3 className="mb-2 text-lg font-semibold text-primary"> {/* Adjusted text size and primary color */}
            {article.title}
          </h3>

          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300"> {/* Adjusted text size */}
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
