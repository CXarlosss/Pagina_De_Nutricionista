"use client";

import { motion } from "framer-motion";
import { Post } from "@/types/post";
import Image from "next/image";

interface Props {
  post: Post;
}

export const PostContent = ({ post }: Props) => {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 text-gray-800 dark:text-gray-100">
      <motion.h1
        className="text-primary mb-6 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {post.title}
      </motion.h1>

      {post.image && (
        <motion.div
          className="mb-10 overflow-hidden rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="h-auto w-full object-cover"
          />
        </motion.div>
      )}

      <motion.div
        className="prose prose-lg dark:prose-invert max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      {post.audioUrl && (
        <div className="mt-8">
          <iframe
            src={post.audioUrl}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      )}

      {post.videoUrl && (
        <div className="mt-8 aspect-video">
          <iframe
            src={post.videoUrl.replace("watch?v=", "embed/")}
            title={post.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full rounded-lg shadow-md"
          ></iframe>
        </div>
      )}
    </article>
  );
};
