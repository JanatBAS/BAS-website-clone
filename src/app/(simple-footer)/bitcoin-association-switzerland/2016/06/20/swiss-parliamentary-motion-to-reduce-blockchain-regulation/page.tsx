import BlogPostLayout, { type BlogPostComment } from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import Image from "next/image";
import { Metadata } from "next";

const post = getPostPage("swiss-parliamentary-motion-to-reduce-blockchain-regulation");

const comments: BlogPostComment[] = [
  {
    author: "Karla G",
    authorUrl: "https://www.karlagarrison.com/",
    date: "2 years ago",
    pending: true,
    likes: 0,
    body: <p className="text-sm text-gray-700">Intereesting thoughts</p>,
  },
];

export const metadata: Metadata = {
  title: post.title,
  description:
    "Together with 23 co-signatories from all major parties, Swiss member of parliament Franz Gruter filed a parliamentary motion to reduce regulatory burdens of blockchain startups by restricting the legal definition of client deposit.",
};

export default function SwissMoveToReduceBlockchainRegulationPage() {
  return (
    <BlogPostLayout post={post} comments={comments}>
      <div className="mb-8">
        <Image
          src="/images/blog/parliament.jpg"
          alt="Swiss parliament"
          width={800}
          height={500}
          className="w-full h-auto"
        />
      </div>

      <p>
        Together with 23 co-signatories from all major parties, Swiss member of parliament Franz Gruter filed a{" "}
        <a
          href="https://www.parlament.ch/de/ratsbetrieb/suche-curia-vista/geschaeft?AffairId=20163472"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          parliamentary motion
        </a>{" "}
        to reduce regulatory burdens of blockchain startups by restricting the legal definition of &quot;client deposit&quot;. Today, firms that handle client money - regardless of whether in Swiss Francs, Bitcoin, or any other currency - get very quickly classified as banks, even if their risk profile fundamentally differs from that of typical banks. Being classified as a bank comes with regulatory and capital requirements that are practically impossible to fulfill for startups. That might be the primary reason why there is not a single operationally active cryptocurrency exchange in the style of bitstamp or bitfinex in Switzerland despite having an otherwise{" "}
        <a
          href="http://www.nzz.ch/schweiz/internet-unternehmer-unterwegs-im-crypto-valley-ld.89840"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          lively ecosystem of crypto startups
        </a>
        . Luzius Meisser, founder of Bitcoin Association Switzerland comments: &quot;This motion is a strong signal to blockchain startups all around the world that the Swiss parliament wants Switzerland to be at the forefront of fintech innovation.&quot;
      </p>

      <p>
        The main part of the motion states (translation): &quot;The federal council shall be instructed to define the term &quot;client deposit&quot; from{" "}
        <a
          href="https://www.admin.ch/opc/de/classified-compilation/19340083/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          banking bill
        </a>{" "}
        art.1 and the{" "}
        <a
          href="https://www.admin.ch/opc/de/classified-compilation/20131795/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          banking act
        </a>{" "}
        art. 2 more narrowly, to the extent risk allows. The current broad interpretation by financial regulator Finma obstructs innovative blockchain startups whose business models get qualified as banking even in cases where the intention behind the law - namely depositor protection - would not require such a qualification.&quot; The full version (in German) can be found on the Website of the{" "}
        <a
          href="http://www.digitale-nachhaltigkeit.ch/2016/06/blockchain-motion/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          parliamentary group for digital sustainability
        </a>
        .
      </p>

      <p>
        Franz Gruter comments in{" "}
        <a
          href="http://www.nzzmediasolutions.ch/titel/zentralschweiz-sonntag-2/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          Zentralschweiz am Sonntag
        </a>{" "}
        that he wants to prevent Finma from trampling the seedlings of a promising new ecosystem with the boots of bureaucracy. Andreas Glarner from law firm{" "}
        <a
          href="http://www.mme.ch/de/team/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          MME
        </a>{" "}
        emphasizes the importance of creating a free, yet carefully regulated, environment in order to continue attracting blockchain startups from all over the world. Switzerland is already well positioned with initiatives like the{" "}
        <a
          href="http://cryptovalleyzug.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          Cryptovalley in Zug
        </a>
        , a city that recently made international headlines by deciding to accept Bitcoin payments.
      </p>

      <p>
        As a next step, the parliament will vote on the motion. However, the vote has not been scheduled yet and can happen in the autumn session the earliest. Having a citizen legislature, the Swiss parliament meets less often than that of other countries. (As a nice side-effect, it also tends to make fewer and more concise laws.) If passed, it would be up to the federal council to take concrete measures, some of which might again be voted on in parliament. In practice, the motion might already have am indirect positive impact today by sending a strong signal to the Swiss financial markets regulator Finma - which is explicitely mentioned in the motion - to interpret the existing rules less restrictively.
      </p>
    </BlogPostLayout>
  );
}
