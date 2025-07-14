"use client";

import { motion } from "framer-motion";
import { Post } from "@/types/post";
import Image from "next/image";

interface Props {
  post: Post;
}

export const PostContent = ({ post }: Props) => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-gray-800"> {/* Eliminado dark:text-gray-100 */}
      {/* Título del post */}
      <h1 className="mb-16 text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
        {post.title}
      </h1>

      {/* Contenido del artículo */}
      <motion.article
        className="mx-auto max-w-3xl rounded-xl p-8 shadow-xl border border-primary/20 bg-white" /* Eliminado dark:bg-zinc-900 */
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">
          {/* Imagen destacada del post */}
          {post.image && (
            <motion.div
              className="flex items-center justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-4/5 aspect-square max-w-xs rounded-xl overflow-hidden shadow-xl border-4 border-primary/20 hover:border-primary transition-all duration-300"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          )}

          {/* Contenido del texto */}
          <motion.div
            className="prose prose-base max-w-none" /* Eliminado dark:prose-invert */
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Audio embed */}
        {post.audioUrl && (
          <div className="mt-8">
            <iframe
              src={post.audioUrl}
              width="100%"
              height="100"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg shadow-md border border-primary/20"
            ></iframe>
          </div>
        )}

        {/* Video embed */}
        {post.videoUrl && (
          <div className="mt-8 aspect-video">
            <iframe
              src={post.videoUrl.replace("watch?v=", "embed/")}
              title={post.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-lg shadow-md border border-primary/20"
            ></iframe>
          </div>
        )}
      </motion.article>
    </section>
  );
};