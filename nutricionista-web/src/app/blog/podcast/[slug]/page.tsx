import { podcastPosts } from "@/data/podcasts";
import { notFound } from "next/navigation";
import { PodcastContent } from "@/components/blog/podcast/PostContent";
import { Post } from "@/types/post";

export default async function PodcastEpisodePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const post: Post | undefined = podcastPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <PodcastContent post={post} />;
}
