import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";

export default function BlogPostPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Hero Banner */}
        <div className="relative h-[250px] md:h-[300px] overflow-hidden">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1592639163221-RXP2V0ZPFYHH8B88Z4Z5/fsb2.png?format=2500w"
            alt="Our Comment on the risk assessment for global Stablecoins of the G20's Financial Stability Board"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <p className="text-xs uppercase tracking-widest mb-2 text-white/80">
                A bright new dawn for digital transfers, sound money and personal freedom.
              </p>
              <p className="text-sm italic mb-3">Zurich, 2020-06-20</p>
              <h1 className="text-xl md:text-2xl font-normal uppercase tracking-wider">
                Comment on Stablecoins
              </h1>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Author */}
          <div className="mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31"
              className="text-[#87a4ad] hover:opacity-80 text-sm"
            >
              Luzius Meisser
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
            <p className="mb-6">
              Today we sent the following letter to the Financial Stability Board of the G-20 commenting on their{" "}
              <Link
                href="https://www.fsb.org/2020/04/addressing-the-regulatory-supervisory-and-oversight-challenges-raised-by-global-stablecoin-arrangements-consultative-document/"
                className="text-[#87a4ad] hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                risk assessment for &quot;global stablecoins&quot;
              </Link>
              :
            </p>

            <p className="mb-6 font-medium text-gray-800">Dear Financial Stability Board</p>

            <p className="mb-6">
              We welcome this opportunity to comment on your thoughts regarding global stablecoins. In the following, we will outline our main concerns regarding the regulation of stablecoins. We are afraid that focusing on the posed questions would make us miss the forest for the trees. In fact, the main risk in this context does not stem from the idea of global stablecoins itself, but from the political response it has elicited.
            </p>

            <p className="mb-6">
              What is at risk are our basic economic freedoms. An important principle of a liberal, free-market economy is that everything that is not explicitly forbidden is allowed. This pillar of western wealth is being eroded by overzealous regulation. Laws that originally were limited in scope and adhered to the principle of proportionality are replaced by overarching &quot;regulatory frameworks&quot; that provide strict bounds for businesses within which they are allowed to operate, outlawing every business activity that has not been explicitly foreseen by the lawmakers.
            </p>

            <p className="mb-6">
              The European Commission proliferates this fundamentally broken view with statements like: &quot;The Council and the Commission state that no global &apos;stablecoin&apos; arrangement should begin operation in the European Union until the legal, regulatory and oversight challenges and risks have been adequately identified and addressed.&quot; (Joint{" "}
              <Link
                href="https://europa.eu/!VV76qW"
                className="text-[#87a4ad] hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                statement
              </Link>{" "}
              by the Council and the Commission on &quot;stablecoins&quot;). Instead of allowing for free experimentation with novel ideas, the European Commission wants to control them and only allow them to grow within narrow, predefined bounds.
            </p>

            <p className="mb-6">
              This worrying attitude not only slows down innovation, but also invites the institutions concerned with preserving the status quo to abuse the law-making process to prevent the emergence of competing ideas. In a recent{" "}
              <Link
                href="http://ssrn.com/abstract=3585372"
                className="text-[#87a4ad] hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                article
              </Link>
              , Ferracuti et al. nicely show how political activism disproportionally pays off financially for large firms. This puts small, innovative companies at a disadvantage. By prematurely suggesting that global stablecoins require extensive new regulation, you further advance this undesired development.
            </p>

            <p className="mb-6">
              The right strategy at this point in time for any jurisdiction would be to eradicate as many barriers as possible and to wait and see how the market evolves. In case of the manifestation of actual systemic risks, law-makers and regulators will still have plenty of time to react as stablecoins are still at a very early stage. The largest stablecoin, the Tether, has an outstanding volume of merely{" "}
              <Link
                href="http://coinmarketcap.com/currencies/tether"
                className="text-[#87a4ad] hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                9 billion
              </Link>
              . It does not even have 1% of the economic relevance of the single company Amazon. Extensively regulating stablecoins at this stage can only be seen as premature. The only regulatory action that makes sense at this point in time is to remove barriers in order to speed up innovation.
            </p>

            <p className="mb-6">
              In the light of these considerations, we would like to suggest law-makers and regulators to adhere to the following five recommendations and invite you to reiterate these ideas in your communication with your member countries:
            </p>

            <h3 className="text-base font-semibold text-gray-800 mt-8 mb-4">
              1. Treat stablecoins like currencies, and not like securities.
            </h3>
            <p className="mb-6">
              In some jurisdictions, national regulators tend to classify stablecoins as securities when the issuer pegs their value such as the US Dollar or the Swiss Franc. However, applying the extremely heavy regulatory frameworks designed for securities to stablecoins causes disproportionate regulatory costs. Here, the principle &quot;same risks, same rules&quot; should be consequently followed and stablecoins that serve no investment purpose should be treated like any other currency or means of payment. For the regulator, this has the benefit of being able to apply the FATF&apos;s travel rule (which applies to payments, but not to the trading of securities) when stablecoins are transferred between financial intermediaries.
            </p>

            <h3 className="text-base font-semibold text-gray-800 mt-8 mb-4">
              2. Encourage law-makers to impose deadlines on regulators
            </h3>
            <p className="mb-6">
              Being cautious, financial market authorities often tend to be hesitant in allowing novel business ideas, thereby slowing down innovation. A prime example is the Narrow Bank, an innovative bank that successfully obtained a banking license years ago but cannot start operating as the Federal Reserve Bank of New York refuses to provide it with a central bank account for{" "}
              <Link
                href="https://www.bloomberg.com/opinion/articles/2019-03-08/the-fed-versus-the-narrow-bank"
                className="text-[#87a4ad] hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                dubious reasons
              </Link>
              . To be more precise, the federal reserve is not officially declining the opening of the account, but instead is postponing it indefinitely. This legal trickery allows them to escape judicial accountability, as there is no decision that the Narrow Bank could fight in court. The root problem here is that regulators in many jurisdictions can indefinitely postpone their decisions, even on purpose. Such delays cause enormous economic cost as license applicants often need to be fully staffed and ready from the point in time when the application is filed. To address this problem, Liechtenstein requires its financial market authority by law to decide on licence applications within six months. Other jurisdictions should be encouraged to take an example of Liechtenstein and also take measures to limit the economic damage done by slow regulatory processes.
            </p>

            <h3 className="text-base font-semibold text-gray-800 mt-8 mb-4">
              3. Provide guidelines when regulatory costs should be considered excessive
            </h3>
            <p className="mb-6">
              In particular in the field of information technology, innovation often comes from small startups and not from the established dinosaurs. At the same time, the financial markets are extremely densely regulated, leading to high regulatory costs, which disproportionately affect small businesses. In combination, this results in a sluggish adoption of new technologies in finance, which in turn makes the financial system less adaptive and less resilient. In order to avert the risk of the global financial system becoming sclerotic, we encourage you to issue concrete guidelines for at what point regulatory costs should be deemed excessive. For example, we think that in a healthy regulatory environment, compliance costs should stay below 5% of the total expenses of a typical company. But already today, compliance costs for financial institutions often exceed 20% of their total budget. And this does not even take into account all the missed growth opportunities due to the bad user experience of many regulatory processes. This is a problem worth pointing to and countries should be encouraged to take measures against the excessive costs of compliance.
            </p>

            <h3 className="text-base font-semibold text-gray-800 mt-8 mb-4">
              4. Address the risk of regulatory capture and anti-competitive behaviour under the disguise of compliance
            </h3>
            <p className="mb-6">
              When imposing new regulation, there is always the risk of regulatory capture, i.e. established players twisting the regulation in ways that hurt competition and innovation. In particular, the biggest risk for holders of the currently most important stablecoin &quot;Tether&quot; is an overzealous enforcement of anti-money laundering regulation. Tether is backed 1:1 by US dollars and issued by an organization with close ties to the crypto exchange Bitfinex. If we held any Tether right now, we would probably be less worried about whether they are actually backed by dollars, and more about whether the issuer will be able to wire us the money once we want to exchange the Tether back into a bank account. In the past, Bitfinex and related organizations have been repeatedly excluded from international dollar-clearing on{" "}
              <Link
                href="https://www.coindesk.com/bitcoin-exchange-bitfinex-sues-wells-fargo-over-bank-transfer-freeze"
                className="text-[#87a4ad] hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                questionable legal grounds
              </Link>
              . The more regulation there is, the more potential excuses established banks have to squash the business of emerging new competitors under the disguise of fulfilling their compliance duties. You should keep a close eye on all regulation that provides established financial institutions with excuses for anti-competitive behavior. In particular, the unjustified freezing of funds poses a real economic risk for the stability of the currently most popular stablecoin.
            </p>

            <h3 className="text-base font-semibold text-gray-800 mt-8 mb-4">
              5. Emphasize the importance of freedom of innovation to keep the financial system anti-fragile
            </h3>
            <p className="mb-6">
              The most well-known stablecoin project is Libra. This project has faced extreme public scrutiny before even having started its operations. While the public is free to form its own opinions, regulators should be careful to not get captured by politics. They should make sure that the law is applied equally to all market participants. Instead, in a move that could come right out of the handbook for despotic governance, two US senators have chosen to abuse their power and to{" "}
              <Link
                href="https://www.brown.senate.gov/newsroom/press/release/brown-schatz-warn-payments-providers-of-risks-with-libra-association"
                className="text-[#87a4ad] hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                threaten Libra association members
              </Link>{" "}
              with &quot;a high level of scrutiny from regulators not only on Libra-related payment activities&quot; in case they continue supporting the project. The threat of selectively enforcing regulation violates the principle of equality before the law and shows that the risk of politicians and regulators abusing their power is real. It is a defining characteristic of despotic governments to have laws that are so complex that virtually everyone is violating them all the time. Then, they are selectively enforced against those the government does not like. It worries us to see such tactics being applied in the United States and we encourage you to remind your member countries to adhere to the rule of law in order to protect economic freedom. It is the role of the free market to decide what innovations are worth pursuing, and not that of the government.
            </p>

            <p className="mb-6">
              We hope that our arguments can find an open ear in the Financial Stability Board. In case you have comments or further questions, please do not hesitate to get in touch with us. We are looking forward to the further discussion on global stablecoins.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 text-sm text-gray-500">
            Tagged:{" "}
            <Link
              href="/bitcoin-association-switzerland/tag/Regulation"
              className="text-[#87a4ad] hover:opacity-80"
            >
              Regulation
            </Link>
          </div>

          {/* Likes and Share */}
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-[#c7a857]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              7 Likes
            </span>
            <ShareButton title="Comment on Stablecoins" />
          </div>

          {/* Comments Section */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Comments (1)
              </h2>
            </div>

            {/* Comment */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Link href="http://framingbitcoin.com/" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <Link
                    href="http://framingbitcoin.com/"
                    className="font-semibold text-gray-800 hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Marq
                  </Link>
                  <span className="text-xs text-gray-500">6 years ago</span>
                  <span className="text-xs text-gray-400">0 Likes</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  What a nicely balanced view on the space. It will be hard to overcome the vested interests of the regulators and the inertia of the legacy financial system. Hayek might have provided us with the only viable solution all along: &quot;I don&apos;t believe we shall ever have a good money again before we take the thing out of the hands of government, that is, we can&apos;t take them violently out of the hands of government, all we can do is by some sly roundabout way introduce something they can&apos;t stop.&quot;
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">
                  Keep up the great work
                </p>
              </div>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
            <div className="text-left">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Newer Post</p>
              <Link
                href="/bitcoin-association-switzerland/2021/6/23/comments-on-draft-revised-vasp-guidance"
                className="text-sm text-[#87a4ad] hover:opacity-80 leading-tight"
              >
                Comments of Bitcoin Association<br />
                Switzerland on the draft revised VASP<br />
                Guidance
              </Link>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Older Post</p>
              <Link
                href="/bitcoin-association-switzerland/2020/4/9/our-comment-on-gwv-finma-adjustment-for-finsa-finia"
                className="text-sm text-[#87a4ad] hover:opacity-80 leading-tight"
              >
                Our Comment on GWV-FINMA<br />
                adjustment for FinSA / FinIA
              </Link>
            </div>
          </div>
        </article>
      </main>
      <FooterSimple />
    </>
  );
}
