"use client";

import { motion } from "framer-motion";
import { Post } from "@/types/post";
import Image from "next/image";

interface Props {
  post: Post;
}

export const PostContent = ({ post }: Props) => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto bg-gray-100 text-gray-800 dark:bg-zinc-950 dark:text-gray-600"> {/* Main section wrapper with consistent styling and reduced max-width */}
      {/* Hero-like section for the title */}
      <motion.div
        className="text-center mb-16 relative overflow-hidden rounded-3xl p-8 shadow-lg min-h-[180px] flex items-center justify-center bg-gradient-to-br from-green-400 to-green-200 dark:from-zinc-800 dark:to-zinc-900" // Adjusted gradient to be consistent
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1
          className="text-white mb-4 text-center text-2xl font-bold md:text-3xl" // Title styling - Further adjusted font size
        >
          {post.title}
        </h1>
      </motion.div>

      <article className="mx-auto"> {/* Article for content, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10"> {/* New grid container for text and image */}
          {/* Left column for text content */}
          <motion.div
            className="prose prose-base dark:prose-invert max-w-none rounded-lg p-6 shadow-xl border border-primary/20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900" // Added gradient, stronger shadow, and border
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Right column for image */}
          {post.image && (
            <motion.div
              className="flex justify-center md:justify-start pt-4 md:pt-0" // Align image to start of column on larger screens, add top padding for mobile
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-primary/20 hover:border-primary transition-all duration-300" // Smaller circular image
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Audio and Video embeds remain below the main content block */}
        {post.audioUrl && (
          <div className="mt-8">
            <iframe
              src={post.audioUrl}
              width="100%"
              height="100" // Further adjusted height
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg shadow-md border border-primary/20"
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
              className="h-full w-full rounded-lg shadow-md border border-primary/20"
            ></iframe>
          </div>
        )}
      </article>
    </section>
  );
};
