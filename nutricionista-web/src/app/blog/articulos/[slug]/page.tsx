// src/app/blog/articulos/[slug]/page.tsx
import { notFound } from "next/navigation";
import { posts } from "@/data/articles";
import { Post } from "@/types/post";
import { PostContent } from "@/components/blog/PostContent";

interface ArticlePageProps {
  params: { slug: string };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const post: Post | undefined = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <PostContent post={post} />;
}
