// src/app/blog/podcast/page.tsx

import { podcastPosts } from "@/data/podcasts";
import { PostCard } from "@/components/blog/PostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast | Partiendo el KOKO",
  description: "Escucha todos los episodios del podcast Partiendo el KOKO sobre nutrición, salud y vida real.",
};

export default function PodcastPage() {
  const temporada1 = podcastPosts.slice(0, 3);  // Episodios 1x01 a 1x03
  const temporada2 = podcastPosts.slice(3, 6);  // Episodios 2x01 a 2x03
  const temporada3 = podcastPosts.slice(6, 9);  // Episodios 3x01 a 3x03

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-16 text-center">Podcast: Partiendo el KOKO</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Temporada 1</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {temporada1.map((episode) => (
            <PostCard key={episode.slug} article={episode} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Temporada 2</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {temporada2.map((episode) => (
            <PostCard key={episode.slug} article={episode} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Temporada 3</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {temporada3.map((episode) => (
            <PostCard key={episode.slug} article={episode} />
          ))}
        </div>
      </div>
    </section>
  );
}
