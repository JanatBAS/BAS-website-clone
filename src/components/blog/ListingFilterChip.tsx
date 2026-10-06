import Link from "next/link";
import { NEWS_PATH } from "@/data/blog-posts";

/** The "<label> ×" filter shown on a listing; × goes back to all posts. */
export default function ListingFilterChip({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center border-b border-gray-400 pb-1">
      <span className="text-xs uppercase tracking-wider text-gray-600">{label}</span>
      <Link
        href={NEWS_PATH}
        className="ml-2 text-gray-600 hover:text-gray-800 text-xs"
      >
        &times;
      </Link>
    </div>
  );
}
