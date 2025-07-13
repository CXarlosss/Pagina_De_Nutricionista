import { notFound } from "next/navigation";
import { posts } from "@/data/articles";
import { PostContent } from "@/components/blog/PostContent";

// 🔥 CORRECCIÓN: params es un objeto directo, no una Promise.
export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params; // 🔥 CORRECCIÓN: No se hace 'await params' aquí

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <PostContent post={post} />;
}
