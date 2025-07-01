export interface Post {
  content: string | TrustedHTML;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  readingTime: string;
  audioUrl?: string;   // nuevo
  videoUrl?: string;   // nuevo
}
