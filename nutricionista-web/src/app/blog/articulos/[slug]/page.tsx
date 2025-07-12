// src/app/blog/articulos/[slug]/page.tsx
import { notFound } from "next/navigation";
import { posts } from "@/data/articles";
import { Post } from "@/types/post";
import { PostContent } from "@/components/blog/PostContent";
// import { type PageProps } from "next"; // Ya no es necesario importar PageProps si no se extiende

// Define la interfaz de props para la página dinámica de forma más directa.
// Esto es un intento de workaround para el error de compilación específico
// donde 'PageProps' parece ser interpretada incorrectamente como una 'Promise'.
interface ArticlePageProps {
  params: { slug: string };
  // Si necesitas searchParams, puedes añadirlos aquí manualmente:
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
