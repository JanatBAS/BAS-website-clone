import BlogPostLayout, { type BlogPostComment } from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import { Metadata } from "next";

const post = getPostPage("general-discussion-meetup");

const comments: BlogPostComment[] = [
  {
    author: "The Lust For Live",
    authorUrl: "https://thelustforlifepunk.blogspot.com/",
    date: "2 years ago",
    likes: 0,
    body: <p className="text-sm text-gray-700">Interesting readd</p>,
  },
];

export const metadata: Metadata = {
  title: post.title,
  description: "The November 20th meetup will be dedicated to discussing our association.",
};

export default function GeneralDiscussionMeetupPage() {
  return (
    <BlogPostLayout post={post} comments={comments}>
      <p>
        <a
          href="http://www.meetup.com/Bitcoin-Meetup-Switzerland/events/149566652/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          General Discussion Meetup
        </a>
      </p>

      <p>
        The November 20th meetup will be dedicated to discussing our association. If you want to help shaping its future, please join us on that evening. We also plan to stream the event on Google plus.
      </p>
    </BlogPostLayout>
  );
}
