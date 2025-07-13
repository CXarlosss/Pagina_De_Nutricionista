import { notFound } from "next/navigation";
import { posts } from "@/data/articles";
import { PostContent } from "@/components/blog/PostContent";

// Declare que params es una Promise que resuelve un objeto con slug.
type ParamsType = Promise<{ slug: string }>;

export default async function ArticlePage({ params }: { params: ParamsType }) {
  const { slug } = await params; // Esperamos la promesa

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <PostContent post={post} />;
}
