import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bitcoin Gold - Do we need it and if yes, how many? - Bitcoin Association Switzerland",
  description:
    "BCash/Bitcoin cash did it on August 1st 2017, Bitcoin2x/Segwit2x does it at block 494,784. For better or worse, creating a new cryptocurrency by forking off of Bitcoin seems to be this season's fashion.",
};

export default function BitcoinGoldPage() {
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
            <span>Opinion</span>
          </div>

          {/* Author and Date */}
          <div className="text-sm text-[#c75b4a] mb-4">
            <Link
              href="/bitcoin-association-switzerland?author=59f7754108466514fa33b9ab"
              className="hover:underline"
            >
              Lewin Boehnke
            </Link>
          </div>

          {/* Date */}
          <div className="text-sm text-[#c75b4a] mb-6">
            <Link
              href="/bitcoin-association-switzerland/2017/10/30/bitcoin-gold-do-we-need-it-and-if-yes-how-many-s7kaj"
              className="hover:underline"
            >
              31 October 2017
            </Link>
          </div>

          {/* Category */}
          <div className="mb-6">
            <Link
              href="/bitcoin-association-switzerland/category/Opinion"
              className="text-sm text-[#c75b4a] hover:underline"
            >
              Opinion
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-8 leading-tight">
            Bitcoin Gold - Do we need it and if yes, how many?
          </h1>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              BCash/Bitcoin (BCH){" "}
              <sup>
                <a href="#fn1" className="text-[#c75b4a] hover:underline">
                  1
                </a>
              </sup>{" "}
              cash did it on August 1st 2017, Bitcoin2x/Segwit2x(B2X) does it at block 494,784,
              which is currently estimated to occur{" "}
              <a
                href="https://coinsalad.com/2x/countdown"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                on November 16th
              </a>
              . For better or worse, creating a new cryptocurrency by forking off of Bitcoin seems
              to be this season&apos;s fashion, and seeing the relative success of the previous and
              current attempts (lingering at prices of several percent of that of Bitcoin, which
              gives it a market cap in the billions of dollar), it is also a trend which is quite
              likely going to carry over into the next year. And since this topic comes up again and
              again at the{" "}
              <a
                href="https://www.meetup.com/de-DE/Bitcoin-Meetup-Switzerland/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                meetups
              </a>{" "}
              and the{" "}
              <Link href="/about-1" className="text-[#c75b4a] hover:underline">
                chat groups
              </Link>{" "}
              organized by the BAS, it is certainly worthwhile to capture some of the most relevant
              and interesting points in written words. I&apos;ll say some general things about forks of
              Bitcoin and how to benefit from them, but -since this has been splendidly covered
              elsewhere- spend most of the text with the specific changes of the Bitcoin Gold fork.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Where&apos;s my dividend?</h2>

            <p>
              While of course technically wrong, a lot of Bitcoin holders consider the coins that
              they sell on the fork-chain as some sort of dividend, making Bitcoin a positive-carry
              product. In fact, it is more of money falling out of the sky into the hands of people
              who own Bitcoin, thus the commonly used phrase &apos;airdrop&apos;. This sounds nice, and if you
              play it correctly it is, but there is a lot of things that can go wrong while claiming
              the dividend, you get exposed to risk of loss, in the worst case even of your Bitcoin
              and you definitely risk your monetary privacy. What you have to do depends on what you
              are trying to achive
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
              I want to hold my forkcoin
            </h3>

            <p>
              Great, that&apos;s the spirit. You don&apos;t have to do anything <em>if</em> you own the
              private key to your Bitcoin. You&apos;ll be able to access both paths of the fork knowing
              only your private key at any point down the road. This doesn&apos;t mean that it is easy to
              do so or that you will be able to do it quickly, depending on how you store your
              private keys. But it will always be possible and you can just take as much time and
              read as many manuals as you need in order to be comfortable with the process and wait
              for mature software to become available to sweep your keys or spend them from your
              hardware wallet. The coins on neither side of the fork will run away or become
              unavailable. That is, of course, unless one of the forks ceases to exist in its
              entirety. If on the other hand you store your coins with an external party, your
              ownership of either side depends on their whim. This has famously been a problem with{" "}
              <a
                href="https://blog.coinbase.com/update-on-bitcoin-cash-8a67a7e8dbdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Coinbase&apos;s approach to BCH
              </a>
              , who will keep their customers BCH until January.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
              I want to trade the fork as soon as possible
            </h3>

            <p>
              Well, this one might become a little tricky. You&apos;ll need quick access to the forked
              coins, at a time when there are no manuals around and no vetted software for doing so.
              Your safest bet is to store your private keys on paper, but this is{" "}
              <strong>expert mode only!!!</strong> Do this at your own risk.
            </p>

            <p>
              No matter when and if you spend your forked coins, doing so requires signing something
              with the same private key that also secures your Bitcoin in the same address. So
              please handle this with care. Only use software that has been well vetted by you or
              parties you trust before exposing your private keys to them. If in doubt, one option
              that can prevent you from loss is to empty the Bitcoin from that wallet first, to some
              other wallet under your control. Once that transaction is sufficiently confirmed on
              the blockchain, even if you expose your private key to some untrusted software, the
              worst that software can do is take your forked coins and potentially compromise your
              privacy. This is true for forks with strong replay protection, which Bitcoin Gold
              seems to have. This section does not apply for future upcoming forks like B2X.
            </p>

            <p>
              Privacy is something you should consider in all cases. Sending the forked coins to
              some exchange will give information at least to that counterparty about your Bitcoin
              holdings as well.
            </p>

            <p>
              It is rather unfortunate that I have to say this, but for the BCH fork, and seemingly
              also for the currently ongoing Bitcoin Gold fork, traders who were able to get the
              best price, immediately post-fork, were the ones who did <em>not</em> follow the
              best-practice recommendation to store their private keys themselves, but had their
              Bitcoin waiting on an exchange. For BCH there was no prior precedence and it was
              unknown which exchanges would give their customers the BCH quickly for the BTC they
              held during the fork and it was also not clear which exchanges would open a market
              quickly. For B2X, this is{" "}
              <a
                href="https://blog.coinigy.com/2017/10/comprehensive-list-of-exchange-segwit2x-stances/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                much better documented
              </a>{" "}
              already now, weeks before the fork.
            </p>

            {/* Bitcoin Gold Logo */}
            <div className="my-8 text-center">
              <Image
                src="/images/blog/tone-vays.jpg"
                alt="Bitcoin Gold Logo"
                width={400}
                height={400}
                className="mx-auto"
              />
              <p className="text-sm text-gray-500 mt-2 italic">The Bitcoin Gold logo</p>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Gold?</h2>

            <p>
              So after now spending half the article before looking at Bitcoin Gold at all but
              rather dealing with general considerations and best-practices of forks, let&apos;s go into
              the subject at hand and look at their four most prominently placed goals:
              Decentralization, fair distribution, replay protection and transparency.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
              Decentralizaion - The hashing function
            </h3>

            <p>
              The{" "}
              <a
                href="https://bitcoingold.org/faq/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                self-stated main purpose
              </a>{" "}
              is to increase the decentralization of Bitcoin mining by switching to a mining
              algorithm that is &apos;asic resistant&apos;. This means that it is supposed to be more
              difficult to construct Application Specific Integrated Circuits for the sole purpose
              of mining. This is achieved by making the hash function more memory intensive. In
              short, &apos;mining&apos; is done by calculating some hash function of the block header, which
              consists of (unique) information about the block and some nonce. The nonce is some
              number that can be changed until the hash is lower than the current mining difficulty.
              It is impossible to predict how the hash will change when changing the nonce due to
              the{" "}
              <a
                href="https://en.wikipedia.org/wiki/Avalanche_effect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                avalanche effect
              </a>
              , so in order to find a low hash, there is no other way than to try different nonces
              one after the other by{" "}
              <a
                href="https://en.wikipedia.org/wiki/Brute-force_search"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                brute force
              </a>
              .
            </p>

            <p>
              I want to cut the level of detail short at this point, but it is relevant for this
              discussion to understand that he who can check more hashes per second has a relative
              advantage over others to find blocks and thus claim the reward. Bitcoin uses
              double-sha256, which is complicated, yet{" "}
              <a
                href="https://www.youtube.com/watch?v=y3dqhixzGVo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                fairly straight-forward
              </a>
              . The reason that asics are so much more powerful in mining than your usual CPU or GPU
              is that those are designed to solve general problems, the efficiency of asics lies in
              stripping away all of that and implementing in hardware just the necessary task and
              nothing else. Modern mining asics are just now catching up to the latest development
              in chip-set manufacturing, before it was possible to produce equipment that was vastly
              more efficient at mining than [CG]PUs even with outdated production facilities.
            </p>

            <p>
              Bitcoin gold on the other hand uses Equihash, the same hashing algorithm that is{" "}
              <a
                href="https://z.cash/blog/why-equihash.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                used in Zcash
              </a>{" "}
              and for the same reason as there. Its bottleneck is not some calculation, but
              shuffling through large amounts of memory. You can get your competitive edge not by
              buying dedicated computing hardware, but by buying dedicated fast computer memory. But
              that memory is already very much at the forefront of the technological advancements,
              since it is the same piece of hardware that is used in traditional PCs. There is no
              potential for building more efficient mining hardware by employing outdated tech.
              Sure, it will still be possible for anybody to buy more memory and get the edge, but
              firstly, the advantage will be linear and limited and secondly (and more importantly)
              access to memory is easy and evenly spread out. This is indeed very much unlike the
              situation in Bitcoin, where very few mining chip manufacturers control the market. You
              already have your mining hardware at home.
            </p>

            <p>
              While the idea for &apos;decentralizing&apos; mining seems appealing at first for just this
              reason and was similarly one of the driving forces behind litecoin&apos;s scrypt algorithm,
              it turns out to be susceptible to other problems. It is important for the stability of
              a cryptocurrency that nobody is able to take a huge chunk of the market. For
              asic-susceptible hashing algorithms that might happen by chip production monopolies,
              for asic-resistant algorithms the risk are botnets, that is meshes of computers that
              are controlled by attackers usually obtained through viruses and that can easily reach
              sizes of{" "}
              <a
                href="https://en.wikipedia.org/wiki/Botnet#Historical_list_of_botnets"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                several tens of millions
              </a>
              , that have been used for cryptocurrency mining{" "}
              <a
                href="https://www.cryptocoinsnews.com/cpu-mining-is-making-a-comeback-but-only-on-botnets/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                recently
              </a>
              . In a similar way, the infamous illegal video sharing platform Pirate Bay recently
              started taking &apos;payments&apos; by using the CPU of visitors of their site{" "}
              <a
                href="http://www.bbc.com/news/technology-41306384"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                to mine Monero
              </a>
              . The reach of this kind of use of resources is -as of now- very limited, but those
              two examples show the potential for very few entities to get a significant share of
              the total hashrate and thereby of the chance to disrupt the currency if the mining
              equipment did <em>not</em> have to been bought for that specific purpose like asics.
            </p>

            <p>
              I honestly did not make up my mind yet if a currency should rather be asic-resistant
              or botnet-resistant. I tend towards the latter, as this will at least not lead to wide
              swings in the hashrate as botnets are switched off, but depending on the degree of
              mining centralization, disruptions can be expected there as well. And Bitcoin clearly
              currently does have some shortcoming on that front.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Replay protection</h3>

            <p>
              This is probably in response about the ongoing debate whether or not strong replay
              protection will be present in the B2X fork later in November. That team got a lot of
              heat for repeatedly switching their stance on replay protection, leading up to
              exchanges{" "}
              <a
                href="https://support.coinbase.com/customer/portal/articles/2892985-segwit-2x-faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                implementing their own splitting solution
              </a>
              . It might seem like the safer option to go with strong replay protection. No
              complains here, it is state-of-the-art, at the same time not excitingly new, BCH paved
              that path in August.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
              Transparency - The team
            </h3>

            <p>
              The reason behind the claim for transparency is the fact that the software is
              available as open source and it being built by volunteer developers. I struggle to
              come up with a relevant project for which this is not the case, so I am not sure how
              to evaluate this as an advantage. But let&apos;s take the opportunity to look at the code.
            </p>

            <p>
              The GitHub repositories for{" "}
              <a
                href="https://github.com/BTCGPU/website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                website
              </a>
              ,{" "}
              <a
                href="https://github.com/BTCGPU/blockexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                blockexplorer
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/BTCGPU/whitepaper"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                whitepaper
              </a>{" "}
              are empty. At least there, the development and discussion seems to be internal only.
              For the whitepaper, one reason that it is not on GitHub might be that the meta tags of{" "}
              <a
                href="https://btcgpu.org/wp-content/uploads/2017/10/BitcoinGold-Roadmap.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                the pdf
              </a>{" "}
              reveal the original file name:{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                Microsoft Word - Bitcoin Gold Roadmap.docx
              </code>
              . This is of course not a problem per se. But I find it hard to imagine that there has
              been a lot of collaborative work on this.
            </p>

            <p>
              Visiting the{" "}
              <a
                href="https://github.com/BTCGPU/BTCGPU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                GitHub page
              </a>{" "}
              of the code, the first thing that stands out is the huge &quot;<strong>Warning</strong>:
              Bitcoin Gold is a work in progress. If you don&apos;t understand what you are doing, please
              don&apos;t compile and run your own client from the staging tree. Your own client will NOT
              WORK for both testnet and mainnet. However, you&apos;re more than welcome to help test the
              code and join the development.&quot;
            </p>

            <p>
              Well, at least that&apos;s honest, although I had hoped for more finished product at a
              stage when the forking date already happened and we are just waiting for the
              publication of the chain. I did not spend too much time on going through the GitHub
              repository. But commit messages like &quot;Disable bitcoin libs to make TravisCI happy.&quot; or
              a &quot;Change mainnet address version.&quot; of six days ago (followed more recently by &quot;Fix
              broken tests for new address format.&quot; leave some doubts about the seriousness of the
              project. At the same time, they fell more than 400 commits behind the{" "}
              <a
                href="https://github.com/bitcoin/bitcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                main bitcoin core repository
              </a>{" "}
              from which they forked.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
              Fair distribution - The hardfork
            </h3>

            <p>
              Special attention should be drawn to{" "}
              <a
                href="https://github.com/BTCGPU/BTCGPU/commit/09ff5dd82f24efa3f7eaef633131e9434a215c9b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                commit 09ff5dd: Add foundersReward
              </a>
              . How precisely this would work was unknown up to that point how their reward will be.
              From reading the code it seems that they want to receive 20% of the block reward for
              the first 8000 blocks, that is an insane 100k BTC. At the current exchange rate this
              would be around 13 million dollar. I guess it is up to the reader to decide if this is
              an appropriate reward for a project of a hand full of developers that came to
              existence less than two month ago (according to their GitHub repo).
            </p>

            <p>
              They claim that &quot;A hard fork of Bitcoin is the most fair and efficient method of
              creating and distributing a new digital asset. Coins that are created from a new
              genesis block always have ownership concentrated among a smaller group of people.&quot; It
              seems unclear how &apos;coins that are created from a new genesis block&apos; differ from &apos;coins
              that are scalped off the block reward over some time&apos;.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Conclusion</h2>

            <p>
              When googling for &quot;Bitcoin Gold&quot;, their own website is only linked on page 3, and
              even then it is not the landing page. Before that you&apos;ll find several topical and
              general interest news outlets{" "}
              <sup>
                <a href="#fn2" className="text-[#c75b4a] hover:underline">
                  2
                </a>
              </sup>
              . Apparently there is more to say about the project than by the project, which somehow
              fits into the overall picture. Especially because I don&apos;t necessarily think that the
              asic-resistant hash function solves an actual problem with Bitcoin, I don&apos;t see the
              need for this project at this time. Let&apos;s see if{" "}
              <a
                href="https://twitter.com/fluffypony/status/924881919875145729"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                the other candidates
              </a>{" "}
              will get a better evaluation.
            </p>

            {/* Footnotes */}
            <hr className="my-8 border-gray-300" />

            <div className="text-sm text-gray-600 space-y-3">
              <p id="fn1">
                1. I really don&apos;t want to enter the naming discussion so I&apos;ll just give all
                relevant names for all currencies that I mention.{" "}
                <a href="#" className="text-[#c75b4a] hover:underline">
                  ↩
                </a>
              </p>

              <p id="fn2">
                2. And this was done in &apos;incognito mode&apos; to prevent exposure to my own{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Filter_bubble"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                >
                  google bubble
                </a>{" "}
                <a href="#" className="text-[#c75b4a] hover:underline">
                  ↩
                </a>
              </p>
            </div>

            {/* Author attribution */}
            <p className="mt-8 text-sm text-gray-600">
              Lewin Boehnke, Head of Research,{" "}
              <a
                href="https://cryptofundag.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Crypto Finance AG
              </a>
            </p>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <ShareButton title="Bitcoin Gold - Do we need it and if yes, how many?" />
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Comments (2)</h3>

            {/* Comment Sort */}
            <div className="mb-6 text-sm text-gray-500">
            </div>

            {/* Comments */}
            <div className="space-y-6">
              {/* Comment 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-800">LaLaLa</span>
                    <span className="text-xs text-gray-500">8 years ago</span>
                    <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded">
                      Pending
                    </span>
                    <span className="text-xs text-gray-400">Awaiting Moderation</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Such a great article - thanks for sharing!
                  </p>
                  <div className="mt-2 text-xs text-gray-500">1 Like</div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-800">AnotherOne</span>
                    <span className="text-xs text-gray-500">8 years ago</span>
                    <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded">
                      Pending
                    </span>
                    <span className="text-xs text-gray-400">Awaiting Moderation</span>
                  </div>
                  <p className="text-sm text-gray-700">Sh!tcoin</p>
                  <div className="mt-2 text-xs text-gray-500">0 Likes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-start">
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Newer Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2018/3/2/the-latest-regulatory-threat"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  The Latest Regulatory Threat
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2017/9/13/tone-vays-meetup-in-zurich-september-2017"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Tone Vays Meetup in Zurich September 2017
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
