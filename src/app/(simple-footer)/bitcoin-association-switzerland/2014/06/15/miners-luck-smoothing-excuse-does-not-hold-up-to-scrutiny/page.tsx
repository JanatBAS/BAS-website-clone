import BlogPostLayout, { type BlogPostComment } from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import Image from "next/image";
import { Metadata } from "next";

const post = getPostPage("miners-luck-smoothing-excuse-does-not-hold-up-to-scrutiny");

const comments: BlogPostComment[] = [
  {
    author: "Renegade",
    authorUrl: "http://cynic.me/",
    date: "12 years ago",
    likes: 0,
    body: (
      <p className="text-sm text-gray-700">
        miner8765 said he isn&apos;t selling BTC. So USD variations
        are irrelevant there. Did I miss{" "}
        <a
          href="#"
          className="text-brand hover:underline"
        >
          something
        </a>
        ?
      </p>
    ),
  },
  {
    author: "kronrod",
    authorUrl: "http://ziegeleigarten.wordpress.com/",
    date: "12 years ago",
    likes: 0,
    body: (
      <p className="text-sm text-gray-700">
        If he can afford hoarding the Bitcoins, he has the{" "}
        <a
          href="#"
          className="text-brand hover:underline"
        >
          liquidity
        </a>{" "}
        to absorb the variance anyway.
      </p>
    ),
  },
];

export const metadata: Metadata = {
  title: post.title,
  description:
    "The enormous computing power of the GHash.IO pool sparked another debate about 51%-attacks; this post dispels the \"luck smoothing\" argument for mining in such a large pool.",
};

export default function MinersLuckSmoothingPage() {
  return (
    <BlogPostLayout post={post} comments={comments}>
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
          className="text-brand hover:underline"
          title="miner8765 on why he mines an GHash.IO"
        >
          one frequent answer is &quot;luck smoothing&quot;
        </a>
        . In this post, I want to dispel this argument.
      </p>

      {/* Pie Chart Image */}
      <div className="text-center my-8">
        <a
          href="/images/blog/pools.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/blog/pools.png"
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
            className="text-brand hover:underline"
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
          className="text-brand hover:underline"
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
          className="text-brand hover:underline"
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
          className="text-brand hover:underline"
          title="reddit discussion"
        >
          being discussed on reddit
        </a>
        .
      </p>
    </BlogPostLayout>
  );
}
