import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import { Metadata } from "next";

const post: BlogPostData = {
  title: "General Discussion Meetup",
  date: "8 November 2013",
  author: "kronrod",
  authorId: "59025f1030454480d862303f",
  href: "/bitcoin-association-switzerland/2013/11/08/general-discussion-meetup",
  categories: ["Uncategorized"],
  comments: [
    {
      author: "The Lust For Live",
      authorUrl: "https://thelustforlifepunk.blogspot.com/",
      date: "2 years ago",
      likes: 0,
      body: <p className="text-sm text-gray-700">Interesting readd</p>,
    },
  ],
  newerPost: {
    title: "Bitcoin in Echo der Zeit",
    href: "/bitcoin-association-switzerland/2013/12/04/bitcoin-in-echo-der-zeit",
  },
  olderPost: {
    title: "Bitcoin on RTS and Euronews",
    href: "/bitcoin-association-switzerland/2013/11/07/bitcoin-on-rts-and-euronews",
  },
};

export const metadata: Metadata = {
  title: post.title,
  description: "The November 20th meetup will be dedicated to discussing our association.",
};

export default function GeneralDiscussionMeetupPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        <a
          href="http://www.meetup.com/Bitcoin-Meetup-Switzerland/events/149566652/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
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
