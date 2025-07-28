"use client";

import { motion } from "framer-motion";
import { Post } from "@/types/post";
import Image from "next/image";

interface Props {
  post: Post;
}

export const PostContent = ({ post }: Props) => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-gray-800">
      {/* TÍTULO */}
      <motion.h1
        className="mb-12 text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {post.title}
      </motion.h1>

      {/* IMAGEN DESTACADA */}
      {post.image && (
        <motion.div
          className="relative w-full h-72 md:h-96 mb-16 rounded-xl overflow-hidden shadow-lg border border-primary/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      )}

      {/* CONTENIDO PRINCIPAL */}
      <motion.div
        className="prose prose-lg max-w-4xl mx-auto prose-headings:text-gray-900 prose-p:text-gray-800 prose-a:text-primary prose-li:marker:text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* AUDIO */}
      {post.audioUrl && (
        <div className="max-w-3xl mx-auto mt-12">
          <iframe
            src={post.audioUrl}
            width="100%"
            height="100"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg shadow-md border border-primary/20"
          />
        </div>
      )}

      {/* VIDEO */}
      {post.videoUrl && (
        <div className="max-w-4xl mx-auto mt-12 aspect-video">
          <iframe
            src={post.videoUrl.replace("watch?v=", "embed/")}
            title={post.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-md border border-primary/20"
          />
        </div>
      )}
    </section>
  );
};
