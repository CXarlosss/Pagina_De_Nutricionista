// src/app/blog/page.tsx
import Link from "next/link";

export default function BlogIndexPage() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-gray-900">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">El Blog</h1> {/* CHANGE: text-3xl for mobile, sm:text-4xl for larger screens */}
      <p className="text-lg mb-8 text-center">
        Bienvenida al espacio donde compartimos ideas, recursos, recetas y reflexiones sobre nutrición, salud y bienestar.
      </p>

      <div className="flex flex-col gap-6 items-center">
        <Link href="/blog/articulos" className="text-primary underline hover:no-underline text-lg">
          → Ver artículos
        </Link>
        <Link href="/blog/recetas" className="text-primary underline hover:no-underline text-lg">
          → Ver recetas
        </Link>
        <Link href="/blog/podcast" className="text-primary underline hover:no-underline text-lg">
          → Escuchar podcast
        </Link>
      </div>
    </section>
  );
}