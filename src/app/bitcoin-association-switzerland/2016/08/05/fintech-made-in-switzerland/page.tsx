import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import { Metadata } from "next";

const post: BlogPostData = {
  title: "FinTech Made in Switzerland",
  date: "5 August 2016",
  author: "kronrod",
  authorId: "59025f1030454480d862303f",
  href: "/bitcoin-association-switzerland/2016/08/05/fintech-made-in-switzerland",
  categories: ["Uncategorized"],
  comments: [],
  newerPost: {
    title: "Welcoming new board members",
    href: "/bitcoin-association-switzerland/2017/4/27/welcoming-new-board-members",
  },
  olderPost: {
    title: "Swiss Move to Reduce Blockchain Regulation",
    href: "/bitcoin-association-switzerland/2016/06/20/swiss-parliamentary-motion-to-reduce-blockchain-regulation",
  },
};

export const metadata: Metadata = {
  title: post.title,
  description:
    "Manual Stagars is creating a Swiss FinTech documentary and talked to Luzius Meisser about the blockchain and opportunities for Switzerland.",
};

export default function FintechMadeInSwitzerlandPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Manual Stagars is creating{" "}
        <a
          href="http://fintech-documentary.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
        >
          a Swiss FinTech documentary
        </a>{" "}
        and talked to Luzius Meisser about the blockchain and opportunities for Switzerland.
      </p>

      {/* YouTube Embed */}
      <div className="my-8">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/FyYcPhbNtyk"
            title="&quot;FinTech Made in Switzerland&quot;: Interview Luzius Meisser, Bitcoin Association Switzerland"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </BlogPostLayout>
  );
}
