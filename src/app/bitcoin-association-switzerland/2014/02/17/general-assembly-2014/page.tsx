import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import Image from "next/image";
import { Metadata } from "next";

const post: BlogPostData = {
  title: "General Assembly 2014",
  date: "17 February 2014",
  author: "kronrod",
  authorId: "59025f1030454480d862303f",
  href: "/bitcoin-association-switzerland/2014/02/17/general-assembly-2014",
  categories: ["Uncategorized"],
  comments: [],
  newerPost: {
    title: "The MtGox debacle would not have happened in a free market",
    href: "/bitcoin-association-switzerland/2014/02/25/the-mtgox-debacle-would-not-have-happened-in-a-free-market",
  },
  olderPost: {
    title: "Bitcoin in Echo der Zeit",
    href: "/bitcoin-association-switzerland/2013/12/04/bitcoin-in-echo-der-zeit",
  },
};

export const metadata: Metadata = {
  title: post.title,
  description:
    "Our general assembly will take place on 2014-02-23 at Colab Zurich, with highlights including an intro to Ethereum by the founders themselves.",
};

export default function GeneralAssembly2014Page() {
  return (
    <BlogPostLayout post={post}>
      <p>
        As announced, our general assembly will take place on 2014-02-23 at Colab Zurich (Zentralstrasse 37, colab-zurich.ch). The doors open at 14:00 and the assembly formally starts at 14:15. You can find the agenda and comment on it{" "}
        <a
          href="https://docs.google.com/document/d/1a2a2I4fADwAtdO-43l1SRqXQhskJ297w_eNRrGwnI90/edit#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
        >
          here
        </a>
        . In particular, I&apos;d like to point you to traktandum 7 (as we Swiss call agenda items) &quot;Where to spend your Bitcoins?&quot;. Send me an image/screenshot of your favorite underappreciated Bitcoin service and we&apos;ll present it at the assembly. You may also use this opportunity to advertise own stuff for sale (e.g. your car).
      </p>

      <p>
        Further highlights are an intro to Ethereum by the founders themselves and a quick presentation of Veeting, a Swiss secure video conference software accepting Bitcoin. Also, we have an ATM project getting more concrete and consider launching a Bureaucracy Relief Fund.
      </p>

      <p>
        Then, most importantly, we finally have our membership application form online on{" "}
        <a
          href="http://bitcoinassociation.ch/join.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
        >
          our join page
        </a>
        . Fill it in to formally become a member!
      </p>

      <p>
        We also would like to thank colab zurich for providing this excellent event location!
      </p>

      {/* Colab Zurich Logo */}
      <div className="my-8 flex justify-center">
        <a
          href="http://colab-zurich.ch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/blog/colab-zurich-logo.png"
            alt="Colab Zurich Logo"
            width={300}
            height={150}
            className="object-contain"
          />
        </a>
      </div>
    </BlogPostLayout>
  );
}
