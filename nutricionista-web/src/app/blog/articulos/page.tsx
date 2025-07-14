// src/app/blog/articulos/page.tsx
import { PostCard } from "@/components/blog/PostCard";
import { posts } from "@/data/articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artículos | Nutrición Real",
  description: "Lee artículos sobre salud, alimentación y bienestar.",
};

export default function ArticulosPage() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-gray-900">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center"> {/* CAMBIO: text-3xl para móviles, sm:text-4xl para pantallas más grandes */}
        Artículos del blog
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"> {/* CAMBIO: Añadido grid-cols-1 */}
        {posts.map((article) => (
          <PostCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}