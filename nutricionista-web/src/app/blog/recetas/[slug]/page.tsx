import { notFound } from "next/navigation";
import { posts } from "@/data/articles";
import { Post } from "@/types/post";
import { PostContent } from "@/components/blog/PostContent";

export default async function RecetaPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const receta: Post | undefined = posts.find(
    (p) => p.slug === slug && p.category === "Recetas"
  );

  if (!receta) notFound();

  return <PostContent post={receta} />;
}
