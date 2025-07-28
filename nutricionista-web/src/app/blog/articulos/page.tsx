// src/app/blog/articulos/page.tsx

import { Metadata } from "next";
import { PostCard } from "@/components/blog/PostCard";
import { posts } from "@/data/articles";

export const metadata: Metadata = {
  title: "Artículos | Nutrición Real",
  description: "Descubre artículos sobre nutrición, psiconutrición y bienestar general.",
};

export default function ArticulosPage() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto text-gray-900">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-primary">
        Artículos del blog
      </h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} article={post} />
        ))}
      </div>
    </section>
  );
}
