import { notFound } from "next/navigation";
import { posts } from "@/data/articles";
import { Post } from "@/types/post";
import { PostContent } from "@/components/blog/PostContent";

interface Props {
  params: { slug: string };
}

export default function RecetaPage({ params }: Props) {
  const receta: Post | undefined = posts.find(
    (p) => p.slug === params.slug && p.category === "Recetas"
  );

  if (!receta) return notFound();

  return <PostContent post={receta} />;
}
