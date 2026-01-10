import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tone Vays Meetup in Zurich September 2017 - Bitcoin Association Switzerland",
  description:
    "Record attendance for Bitcoin Meetup with Tony Vays in Zurich. The event with Tony Vays was attended by more than 330 Bitcoin enthusiast in Volkshaus Zurich.",
};

export default function ToneVaysMeetupPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Hero Section with Bitcoin B background */}
        <div className="relative bg-[#1a365d] overflow-hidden">
          {/* Bitcoin B watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg
              viewBox="0 0 64 64"
              className="w-[500px] h-[500px] text-[#d4a853]"
              fill="currentColor"
            >
              <path d="M32 0C14.327 0 0 14.327 0 32s14.327 32 32 32 32-14.327 32-32S49.673 0 32 0zm4.5 45.5h-4v4h-3v-4h-2v4h-3v-4h-5v-3h2.5c.828 0 1.5-.672 1.5-1.5V23c0-.828-.672-1.5-1.5-1.5H20v-3h5v-4h3v4h2v-4h3v4.181c4.326.464 7 2.819 7 6.319 0 2.5-1.5 4.5-3.5 5.5 2.5 1 4.5 3 4.5 6 0 4-3.174 6.836-8 7zm-4-21h-4v7h4c2.209 0 4-1.567 4-3.5s-1.791-3.5-4-3.5zm.5 10h-4.5v8h4.5c2.485 0 4.5-1.791 4.5-4s-2.015-4-4.5-4z" />
            </svg>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <p className="text-[#d4a853] text-xs uppercase tracking-wider mb-4">
              CONNECT WITH YOUR PEERS AT OUR LOCAL MEETUPS. SOUND MONEY MATTERS. SWISS PERFECTION.
            </p>
            <div className="flex justify-center items-center gap-6 text-xs text-white/70 mb-2">
              <span>JOIN US ON</span>
              <a
                href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white"
              >
                <svg className="w-4 h-4" viewBox="0 0 64 64" fill="currentColor">
                  <path d="M30.8,33.4c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4 c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4c0.2,0.8,0.6,2,0.1,2.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5 c-1.5-4.6-3.5-11.8-5.2-16.6c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8 c-1-1.4-3.1-4.8-4.1-6.9c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6 c-0.7-3.4-1.2-8-1.1-11.1c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4 C26.9,25.5,28.9,29.5,30.8,33.4z" />
                </svg>
                MEETUP
              </a>
              <span>OR</span>
              <a
                href="https://x.com/bitcoin_ch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X
              </a>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-8">
            <Link href="/bitcoin-association-switzerland" className="hover:text-[#c75b4a]">
              Bitcoin Association Switzerland
            </Link>
            <span className="mx-2">&gt;</span>
            <span>Events</span>
          </div>

          {/* Author and Date */}
          <div className="text-sm text-[#c75b4a] mb-4">
            <Link
              href="/bitcoin-association-switzerland?author=59b547881f318d4561a56cc2"
              className="hover:underline"
            >
              Marc Bettinger
            </Link>
          </div>

          {/* Date */}
          <div className="text-sm text-[#c75b4a] mb-6">
            <Link
              href="/bitcoin-association-switzerland/2017/9/13/tone-vays-meetup-in-zurich-september-2017"
              className="hover:underline"
            >
              2 October 2017
            </Link>
          </div>

          {/* Category */}
          <div className="mb-6">
            <Link
              href="/bitcoin-association-switzerland/category/Events"
              className="text-sm text-[#c75b4a] hover:underline"
            >
              Events
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-8 leading-tight">
            Tone Vays Meetup in Zurich September 2017
          </h1>

          {/* Hero Image */}
          <div className="mb-8">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1506873054155-MN9XEC0RHZLNGH2NL14A/highres_464511993.jpeg"
              alt="Tone Vays Meetup in Zurich September 2017"
              width={800}
              height={533}
              className="w-full"
            />
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="font-bold">
              Record attendance for Bitcoin Meetup with Tony Vays in Zurich
            </p>

            <p>
              On Wednesday 13th of September the Bitcoin Association Switzerland hosted the
              largest Bitcoin Meetup so far. The event with Tony Vays was attended by more
              than 330 Bitcoin enthusiast in Volkshaus Zurich. A lot of veterans but as well a
              lot of new joiners, the Bitcoin Community around Zurich is expanding! Dominique
              Lara Salzgeber opened the Meetup and introduced the special guest and speaker
              Tony Vays. Before Tony started Ronald Kogens from sponsor &quot;Froriep&quot; introduced
              the community in the currently very hot topic of ICOs and token sales from a
              legal perspective. Especially the different token models that could be offered
              like utility token, debt token, equity token or participation rights token und
              the later set-up of the company. Does it make sense to set up a company in a way
              of a foundation, like Ethereum did, or in a way of a stock corporation or
              limited liability company?
            </p>

            <p>
              After this Tony joined the stage with big applause. He introduced himself and
              brought some background what he has done before he entered the Bitcoin Community
              in early 2013. Tony worked as a Risk Analyst at Bear Stearns and later becoming
              a VP at JP Morgan Chase in the aftermath of the 2008 financial crisis. Since he
              joined the Bitcoin trail he is independent content creator at LibertyLifeTrail,
              on his YouTube Channel &amp; WorldCryptoNetwork focused on sound economics &amp;
              finance. In addition he is hosting the Podcast &quot;Cryptoscam&quot; where he analyses
              also other Cryptoprojects like Ethereum at the moment. He started with a poll in
              this large audience, what is the amount of people that already own Bitcoin. Just
              a few hands didn&apos;t showed up here, what was an impressive result for Tony. He
              then showed two interesting quotes from Nobelprize winners. First one from Paul
              Krugman 1998, where he was claiming the impact of the Internet in the future
              won&apos;t be bigger than the impact of the fax machine. The other quote was done by
              Milton Friedman 1999, where he predicted a reliable &quot;e-cash&quot;, a method whereby
              on the Internet you can transfer funds from A to B, without A knowing B or B
              knowing A. So in fact Bitcoin, 10 years before it started. The next slides of
              the presentation covered the history of Bitcoin with interesting price turning
              points. Even for veteran guys it was very interesting and impressive, how Tony
              linked Bitcoin history with the price movements. For example the acceptance of
              Bitcoin from Wikileaks and the popping of the first bubble 2011 when the price
              crashed from around 30 USD to just 2 USD. How 2012 the Chinese TV influenced the
              price, by presenting Bitcoin to an audience of more than 500 million. How
              Silkroad and Mt. Gox leveraged the price 2012 and 2013 and the Cyprus banking
              crisis have had a great influence for the European Bitcoin Community, because at
              that level started the massive media attention. And the main reasons why Bitcoin
              than declined after the first ATH of over 1000 USD end 2013. In Tonys view it
              was just this formula:
            </p>

            <p className="font-mono bg-gray-100 p-4 rounded">
              Price = Demand (New Bitcoin Users) - [Supply (Merchant Selling) + Mined Coins]
            </p>

            <p>
              Especially the Merchants that accepted Bitcoin as payment have had for him a
              negative effect on the price. Because they just sold the coins after they
              received them, what influenced the price in a negative way. He then compared the
              price movements of Silver and Bitcoin and it was interesting to see the
              similarities just with a time gap of around two years.
            </p>

            <p>
              The next part was very important and impressive, because Tony was showing what
              makes Bitcoin precious and unique, compared with any other asset class. The Top
              use cases are:
            </p>

            <ol className="list-decimal list-inside space-y-1">
              <li>Donations to causes, goods and services government does not approve of</li>
              <li>Gambling</li>
              <li>Hiding assets</li>
              <li>Transferring value cross borders</li>
            </ol>

            <p>
              Later also Tony showed up how simple and easy the Bitcoin Whitepaper was written
              compared with other papers and regulations. And how the governments in the world
              working towards a cashless society, to bring down the costs but more important
              control the people, allow negative interest rates and generate tax revenues. A
              nice comparison with the past was when Tony showed how Rome declined because of
              their bad monetary regime. When Rome devaluated the currency the end of the
              Empire was near.
            </p>

            <p>
              In the next minutes Tony explained how he predicts price movements with
              technical analysis. He called also that the 3000 USD will be the bottom in the
              current drawdown, what seems to be proven just two days later. A Q&amp;A session
              followed where Tony explained, that he doesn&apos;t like Altcoins which are a kind of
              pennystock investments for him and a tread against Bitcoin. And that the
              electricity costs are not really a problem for the Bitcoin network, it&apos;s a
              feature to keep the Bitcoin network safe and he is running a miner by himself.
              He received a big applause for his impressive and outstanding presentation. In
              the closing words Bitcoin Association President Lucas Betschart thanked him for
              his great talk and invited the audience for an apero in the foyer financed by
              the sponsors of this event what was very gladly accepted by the community for
              additional talks and discussions.
            </p>

            <p>
              The full event can be watched{" "}
              <a
                href="https://youtu.be/sA5uXLOez0c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                here
              </a>{" "}
              or below - please keep in mind that events like this are made possible thanks to our corporate members and sponsorships.
            </p>

            {/* Sponsor Logos */}
            <div className="flex items-center gap-8 my-8">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1506872868781-GZTO0FAM9JM19XA4HI1O/f.jpeg"
                alt="Froriep"
                width={150}
                height={50}
                className="h-12 w-auto object-contain"
              />
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1506872873414-HOQE3ZWRMVDBPORN3S9D/ey-2.gif"
                alt="EY"
                width={150}
                height={50}
                className="h-12 w-auto object-contain"
                unoptimized
              />
            </div>

            {/* YouTube Embed */}
            <div className="my-8">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/sA5uXLOez0c"
                  title="Tone Vays: Bitcoin Speculation (Zurich, 13th September 2017)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Like and Share */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <button className="flex items-center gap-2 hover:text-[#c75b4a] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              4 Likes
            </button>
            <button className="flex items-center gap-2 hover:text-[#c75b4a] transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-start">
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Newer Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2017/10/30/bitcoin-gold-do-we-need-it-and-if-yes-how-many-s7kaj"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Bitcoin Gold - Do we need it and if yes, how many?
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2017/8/8/lakeside-partners-joins-the-bitcoin-association-switzerland"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Self-made
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <FooterSimple />
    </>
  );
}
