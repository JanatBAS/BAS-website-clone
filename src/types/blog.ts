/** A post as shown in the News listing, category, tag and archive pages. */
export interface BlogPost {
  id: string;
  author: string;
  authorId: string;
  date: string;
  timestamp: number; // Unix timestamp in milliseconds, used for sorting
  category?: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
  tags?: string[];
  commentCount?: number;
  unoptimizedImage?: boolean;
}
