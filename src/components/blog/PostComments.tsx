import Image from "next/image";
import type { BlogPostComment } from "@/components/BlogPostLayout";

// Comment metadata items after the date get a dot separator drawn in CSS.
const metaItemClassName = "before:content-['·'] before:mr-2";

/** Read-only list of the comments a post received on the original site. */
export default function PostComments({ comments }: { comments: BlogPostComment[] }) {
  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-sm font-medium text-gray-800 uppercase tracking-wider mb-6">
        Comments ({comments.length})
      </h2>

      {comments.map((comment, index) => (
        <div key={index} className="flex gap-4 py-4 border-t border-gray-100">
          <Image
            src="/images/misc/default-avatar.png"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 mb-2 text-xs text-gray-500">
              {comment.author &&
                (comment.authorUrl ? (
                  <a
                    href={comment.authorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-800 hover:text-[#c75b4a]"
                  >
                    {comment.author}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-gray-800">{comment.author}</span>
                ))}
              <span>{comment.date}</span>
              {comment.pending && (
                <>
                  <span className={metaItemClassName}>Pending</span>
                  <span className={metaItemClassName}>Awaiting Moderation</span>
                </>
              )}
              {comment.likes !== undefined && (
                <span className={metaItemClassName}>
                  {comment.likes} {comment.likes === 1 ? "Like" : "Likes"}
                </span>
              )}
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-2 break-words">
              {comment.body}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
