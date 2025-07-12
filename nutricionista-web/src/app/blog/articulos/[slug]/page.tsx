// src/app/blog/articulos/[slug]/page.tsx
import { notFound } from "next/navigation";
import { posts } from "@/data/articles";
import { Post } from "@/types/post";
import { PostContent } from "@/components/blog/PostContent";

// Define la interfaz de props para la página dinámica.
// Esta es la forma estándar en Next.js App Router.
interface ArticlePageProps {
  params: { slug: string };
  // Next.js también pasa 'searchParams' a las Page Props,
  // aunque no se use en este componente, es parte de la interfaz 'PageProps'
  // searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  // Busca el post correspondiente al slug en tus datos.
  const post: Post | undefined = posts.find((p) => p.slug === params.slug);

  // Si el post no se encuentra, muestra la página 404 de Next.js.
  if (!post) {
    return notFound();
  }

  // Renderiza el componente PostContent con los datos del post encontrado.
  return <PostContent post={post} />;
}
