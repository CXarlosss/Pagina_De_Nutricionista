// src/app/blog/articulos/[slug]/page.tsx

import { notFound } from "next/navigation";
import { posts } from "@/data/articles";
import { PostContent } from "@/components/blog/PostContent";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
      description: "Este artículo no existe o ha sido eliminado.",
    };
  }

  return {
    title: `${post.title} | Nutrición Real`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <PostContent post={post} />;
}
