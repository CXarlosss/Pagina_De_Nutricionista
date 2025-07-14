"use client";

import { Post } from "@/types/post";
import { formatDate } from "@/lib/utils"; 

export const PodcastContent = ({ post }: { post: Post }) => {
  return (
    <article className="prose max-w-4xl mx-auto py-12 px-4"> {/* Removed dark:prose-invert */}
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4"> {/* Removed dark:text-gray-400 */}
        {formatDate(post.date)} · {post.readingTime}
      </p>

      <div className="mb-6 w-full aspect-video">
        <iframe
          src={post.videoUrl}
          className="w-full h-full rounded-xl"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className="mb-6">
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

      {post.content && (
        <div
          className="mt-8 whitespace-pre-line"
          dangerouslySetInnerHTML={{
            __html: typeof post.content === "string" ? post.content : String(post.content),
          }}
        />
      )}

      <div className="mt-10 border-t pt-6 text-sm text-gray-600"> {/* Removed dark:text-gray-300 */}
        <p>Síguenos en:</p>
        <ul className="mt-2 space-y-1">
          <li>
            👉 Instagram:{" "}
            <a
              href="https://www.instagram.com/partiendoelkoko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              @partiendoelkoko
            </a>
          </li>
          <li>
            👉 TikTok:{" "}
            <a
              href="https://www.tiktok.com/@partiendoelkoko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              @partiendoelkoko
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};