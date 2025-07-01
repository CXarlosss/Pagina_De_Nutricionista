import { PostCard } from "@/components/blog/PostCard";
import { posts } from "@/data/articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recetas | Nutrición Real",
  description: "Encuentra recetas sanas, fáciles y deliciosas para tu día a día.",
};

export default function RecetasPage() {
  const recetas = posts.filter((p) => p.category === "Recetas");

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">Recetas saludables</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recetas.map((receta) => (
          <PostCard key={receta.slug} article={receta} />
        ))}
      </div>
    </section>
  );
}
