import { podcastPosts } from "@/data/podcasts";
import { notFound } from "next/navigation";
import { PodcastContent } from "@/components/blog/podcast/PostContent";
import { Post } from "@/types/post";

interface Props {
  params: { slug: string };
}

export default function PodcastEpisodePage({ params }: Props) {
  const post: Post | undefined = podcastPosts.find(
    (p) => p.slug === params.slug
  );

  if (!post) return notFound();

  return <PodcastContent post={post} />;
}
