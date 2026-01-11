import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Miner's \"luck smoothing\" excuse does not hold up to scrutiny - Bitcoin Association Switzerland",
  description:
    "The enormous computing power of the GHash.IO pool sparked another debate about 51%-attacks. In this post, I want to dispel the 'luck smoothing' argument.",
};

export default function MinersLuckSmoothingPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-sm text-[#8b7355] mb-4">
            <Link
              href="/bitcoin-association-switzerland/2014/06/15/miners-luck-smoothing-excuse-does-not-hold-up-to-scrutiny"
              className="hover:underline"
            >
              15 June 2014
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            Miner&apos;s &quot;luck smoothing&quot; excuse does not hold up to
            scrutiny
          </h1>

          {/* Author and Category */}
          <div className="text-sm text-[#8b7355] mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=59025f1030454480d862303f"
              className="hover:underline"
            >
              kronrod
            </Link>
            <span className="mx-2">·</span>
            <Link
              href="/bitcoin-association-switzerland/category/Uncategorized"
              className="hover:underline"
            >
              Uncategorized
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              The enormous computing power of the GHash.IO pool sparked another
              debate about 51%-attacks. Pools with such a large share of the
              total hash rate threaten Bitcoin&apos;s decentralized nature and
              make Bitcoin depend on the benevolence of the dominating pool - in
              this case GHash.IO. Obviously, it is not in the self-interest of
              miners to all mine in the same pool, as it undermines Bitcoins
              value. When asked, why they do so anyway,{" "}
              <a
                href="http://www.reddit.com/r/Bitcoin/comments/2828s9/i_own_a_large_mining_operation_ill_explain_why_i/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
                title="miner8765 on why he mines an GHash.IO"
              >
                one frequent answer is &quot;luck smoothing&quot;
              </a>
              . In this post, I want to dispel this argument.
            </p>

            {/* Pie Chart Image */}
            <div className="text-center my-8">
              <a
                href="http://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/59025f1030454480d862303c/59025f1730454480d862309c/1493327639051/pools.png?format=original"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="http://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/59025f1030454480d862303c/59025f1730454480d862309c/1493327639051/pools.png?format=original"
                  alt="Mining pools distribution pie chart"
                  width={400}
                  height={300}
                  className="mx-auto"
                  unoptimized
                />
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Shares of Mining Power according to{" "}
                <a
                  href="https://blockchain.info/pools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                  title="Mining Pools on blockchain.info"
                >
                  blockchain.info
                </a>
              </p>
            </div>

            <p>
              The following table was obtained through a Monte-Carlo simulation
              and shows the variance of mining returns as a function of pool
              size. For example, when mining in a pool that controls 50% of the
              computing power, you can expect a daily variance in returns of
              0.6% and a monthly variance of 0.03%. Thus, you will get very
              smooth returns as good luck and bad luck are in balance.
            </p>

            <p>
              Should you decide to mine in a pool that only controls 3% of the
              total hash rate, you will see daily fluctuations as high as 20%.
              In other words: when you earn 1 Bitcoin per day at average, you
              will often see returns below 0.8 Bitcoins or above 1.2 Bitcoin -
              but it can also get as low as 0 if the pool is very unlucky that
              day. However, when looking at the variance at a monthly level,
              daily fluctuations tend to cancel each other, leading to a monthly
              variance of 0.68%.
            </p>

            {/* Data Table */}
            <div className="my-8">
              <h3 className="text-center font-medium text-gray-800 mb-4">
                Price Variance vs. Mining Return Variance
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-2 font-normal text-gray-600"></th>
                      <th className="text-center py-2 px-2 font-normal text-gray-600">
                        Bitstamp Price
                      </th>
                      <th className="text-center py-2 px-2 font-normal text-gray-600">
                        50% Pool
                      </th>
                      <th className="text-center py-2 px-2 font-normal text-gray-600">
                        25% Pool
                      </th>
                      <th className="text-center py-2 px-2 font-normal text-gray-600">
                        12.5% Pool
                      </th>
                      <th className="text-center py-2 px-2 font-normal text-gray-600">
                        6.25% Pool
                      </th>
                      <th className="text-center py-2 px-2 font-normal text-gray-600">
                        3% Pool
                      </th>
                      <th className="text-center py-2 px-2 font-normal text-gray-600">
                        0.8% Pool
                      </th>
                      <th className="text-center py-2 px-2 font-normal text-gray-600">
                        0.1% Pool
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-2 text-gray-700">Daily</td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        2.2%
                      </td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        0.6%
                      </td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        2.4%
                      </td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        4.8%
                      </td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        9%
                      </td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        20%
                      </td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        80%
                      </td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        900%
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 text-gray-700">Monthly</td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        49%
                      </td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        0.03%
                      </td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        0.08%
                      </td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        0.16%
                      </td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        0.25%
                      </td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        0.68%
                      </td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        3%
                      </td>
                      <td className="text-center py-2 px-2 text-gray-700">
                        23%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              Let&apos;s compare this to the variance of Bitcoin prices. Unlike
              the variance of mining returns which gets smaller when looking at
              longer periods, the variance of the exchange rate goes up. The
              reason for this is that mining returns do not depend on the
              returns of the previous day (i.e. they follow an{" "}
              <a
                href="http://en.wikipedia.org/wiki/Autoregressive_model"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
                title="Autoregressive Process"
              >
                AR(0) process
              </a>
              ), whereas today&apos;s price builds on yesterday&apos;s price
              such that changes add up over time. Thus, when looking at daily
              returns, mining in a 25% pool adds fluctuations of 2.4% and price
              changes account for another 2.2% - givnig you 4.6% in total.
              However, the time horizon of a miner is not (and should not be) a
              mere day. Electricity bills come in monthly and obtaining new
              hardware is a process that spans over many months. Therefore, a
              more realistic timeframe to look at is one month. And here,{" "}
              <strong>
                the variance of the exchange rate dwarfs the variance of mining
                returns
              </strong>
              . When mining in the largest pool, you will get a total variance
              of 49.03% in USD terms. When mining in a 3% pool, you will get a
              total variance of 49.68%. Wanting to optimizing such a small
              difference is complete nonsense.
            </p>

            <p>
              PS: Ziepheiw did some{" "}
              <a
                href="http://www.reddit.com/r/Bitcoin/comments/282tsb/mining_in_a_small_pool_is_statistically_as/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
                title="Ziepheiw's calculations"
              >
                additional calculations
              </a>{" "}
              that also incorporate difficulty adjustments. They do not matter
              much. Also, this post is{" "}
              <a
                href="http://www.reddit.com/r/Bitcoin/comments/286xxy/why_the_miners_luck_smoothing_excuse_is_nonsense/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
                title="reddit discussion"
              >
                being discussed on reddit
              </a>
              .
            </p>
          </div>

          {/* Like and Share */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <button className="flex items-center gap-2 hover:text-[#c75b4a] transition-colors">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              1 Likes
            </button>
            <ShareButton title="Miner's luck smoothing excuse does not hold up to scrutiny" />
          </div>

          {/* Comments Section */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Comments (2)
              </h3>
              <span className="text-sm text-gray-500">Newest First</span>
            </div>

            {/* Comment Input */}
            <div className="border border-gray-200 rounded mb-6">
              <textarea
                className="w-full p-4 text-sm text-gray-500 resize-none focus:outline-none"
                rows={4}
                placeholder=""
                disabled
              />
              <div className="flex justify-end items-center gap-2 px-4 pb-3">
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  Preview
                </button>
                <button className="text-sm bg-gray-800 text-white px-4 py-2 hover:bg-gray-700">
                  Post Comment...
                </button>
              </div>
            </div>

            {/* Comment 1: Renegade */}
            <div className="flex gap-4 py-4 border-t border-gray-100">
              <div className="flex-shrink-0">
                <Image
                  src="https://assets.squarespace.com/universal/images-v6/default-avatar.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-sm"
                />
              </div>
              <div className="flex-1">
                <div className="mb-1">
                  <a
                    href="http://cynic.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline font-medium text-sm"
                  >
                    Renegade
                  </a>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  12 years ago · 0 Likes
                </div>
                <p className="text-sm text-gray-700">
                  miner8765 said he isn&apos;t selling BTC. So USD variations
                  are irrelevant there. Did I miss{" "}
                  <a
                    href="#"
                    className="text-[#c75b4a] hover:underline"
                  >
                    something
                  </a>
                  ?
                </p>
              </div>
            </div>

            {/* Comment 2: kronrod */}
            <div className="flex gap-4 py-4 border-t border-gray-100">
              <div className="flex-shrink-0">
                <Image
                  src="https://assets.squarespace.com/universal/images-v6/default-avatar.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-sm"
                />
              </div>
              <div className="flex-1">
                <div className="mb-1">
                  <a
                    href="http://ziegeleigarten.wordpress.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline font-medium text-sm"
                  >
                    kronrod
                  </a>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  12 years ago · 0 Likes
                </div>
                <p className="text-sm text-gray-700">
                  If he can afford hoarding the Bitcoins, he has the{" "}
                  <a
                    href="#"
                    className="text-[#c75b4a] hover:underline"
                  >
                    liquidity
                  </a>{" "}
                  to absorb the variance anyway.
                </p>
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
                  href="/bitcoin-association-switzerland/2014/06/25/federal-council-report-no-special-regulation-needed"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Federal Council report: No special regulation needed
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2014/05/07/finma-comments-on-bitcoin"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Finma comments on Bitcoin
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
