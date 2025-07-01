// src/app/blog/articulos/[slug]/page.tsx
import { notFound } from "next/navigation";
import { posts } from "@/data/articles";
import { Post } from "@/types/post";
import { PostContent } from "@/components/blog/PostContent";

interface Props {
  params: { slug: string };
}

export default function ArticlePage({ params }: Props) {
  const post: Post | undefined = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return <PostContent post={post} />;
}
