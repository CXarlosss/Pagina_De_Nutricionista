import { podcastPosts } from "@/data/podcasts";
import { PostCard } from "@/components/blog/PostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast | Partiendo el KOKO",
  description: "Escucha todos los episodios del podcast Partiendo el KOKO sobre nutrición, salud y vida real.",
};

export default function PodcastPage() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Podcast: Partiendo el KOKO
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {podcastPosts.map((episode) => (
          <PostCard key={episode.slug} article={episode} />
        ))}
      </div>
    </section>
  );
}
