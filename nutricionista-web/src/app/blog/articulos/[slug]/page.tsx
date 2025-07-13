import { notFound } from "next/navigation";
import { posts } from "@/data/articles";
import { PostContent } from "@/components/blog/PostContent";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <PostContent post={post} />;
}
