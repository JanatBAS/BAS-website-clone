import BlogPostLayout, { type BlogPostComment } from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import { Metadata } from "next";

const post = getPostPage("comments-of-bitcoin-association-switzerland-on-the-draft-revised-vasp-guidance");

const comments: BlogPostComment[] = [
  {
    author: "Michael Bruggler",
    date: "4 years ago",
    body: (
      <>
        <p className="text-gray-700 text-sm leading-relaxed">
          Thanks for this enlighting examples and explications.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mt-2">
          Looking at many problems like bank secrecy, risk assessment (supreme dept crises...), money laundering, offshore obfuscation, corruption etc.) over the last decade, I&apos;m surprised how determined destructive this regulatory proposals are. How the self regulatory organization Swiss Banking Association has guided their members, it comes to no surprise, that some serious members left their organization. Observing how Credit Suisse and UBS did monopolise many discussions, while failing on being a model role in risk assessment/management or how poorly the prevention of money laundering has been handled by many American Bank (laundering US$ 200 Trillions...) I sure agree that regulators should have their neutral and independent view on how to deal with sanctimonious and advantageous claims coming from the banking industry.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mt-2">
          In all fairness I also want to mention that a friend of mine lost about CHF 1 Mio. in the Mt. Gox trading platform when it became insolvent. Looking at Ethereum&apos;s DAO, Dogecoin, PayCoin, SpaceBIT, GetGems (Gems) to name a view critical circumstances, I would not necessarily come to the same conclusion, that the counterparty risk is 0. But agree that one has to assess the risk for each crypto currency (technology/cryptography used, nodes, time-stamping scheme, ecological aspects, speed, underlaying assets etc.) and each counter-party involved.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mt-2">
          I agree with our federal council, that we have to support an appropriately liberal and globally competitive regulatory frame work to protect unsuspecting consumers as well as innovation. A frame, in which our FinTech Start Up industry can perform their first fragile inovative steps in order to support economic freedom for all of us later on.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mt-2">Kind regards</p>
        <p className="text-gray-700 text-sm leading-relaxed">Michael</p>
        <p className="text-gray-700 text-sm leading-relaxed">www.fintechwerkstatt.ch</p>
      </>
    ),
  },
];

export const metadata: Metadata = {
  title: post.title,
  description:
    "Comments of Bitcoin Association Switzerland on the draft prudential treatment of cryptoasset exposures by the Basel Committee on Banking Supervision.",
};

export default function PrudentialTreatmentCryptoassetExposures() {
  return (
    <BlogPostLayout post={post} comments={comments}>
      <p className="mb-6">
        The original response can be found{" "}
        <a
          href="https://github.com/meisserecon/www/raw/gh-pages/2021-06-26%20BAS%20comment%20on%20BIS%20draft.pdf"
          className="text-brand hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>.
      </p>

      <p className="font-semibold mb-4">Prudential Treatment of Cryptoasset Exposures</p>

      <p className="mb-6">Dear Basel Committee on Banking Supervision</p>

      <p className="mb-6">
        We welcome this opportunity to comment on your draft document &quot;Prudential Treatment of Cryptoasset Exposure&quot;. At the same time, we are unsure whether our words will be heard as the concerns we raised the last time seem to have fallen on deaf ears. If you are interested in improving the dialog with the public, it might be helpful to shortly summarize and acknowledge received feedback in an according report. A good example is the Swiss government that publishes a summary of the received comments after every consultation. This shows the public that its comments are being read and appreciated. In the case of the proposal at hand, such a report would probably also help to explain how you arrived at such an extreme position.
      </p>

      <p className="font-semibold mb-4">Negative Overall Impression</p>

      <p className="mb-6">
        Overall, the proposed regulation is so restrictive and so far away from a sensible approach that it is hard for us to comprehend how anyone could consider the draft fair and balanced. It is even conceivable that the proposal in its current form could be legally challenged in various countries due to not being reconcilable with constitutional principles such as proportionality and economic freedom. On top of that, your proposal is counter-productive as it discourages banks from taking the most prudent approach to hedge their crypto exposure (see the certificate example later on). We would love to be proven wrong, but we cannot shake off the impression that your reasoning is guided by politics and not by the constructive and neutral application of principles.
      </p>

      <p className="font-semibold mb-4">Good Principles Applied Wrongly</p>

      <p className="mb-6">
        We fully agree with the principle &quot;same risk, same rules&quot;. However, that principle does not seem to be applied consistently. The draft names various risks of crypto assets, but neither tries to quantify them nor takes into account the reduced risks of crypto assets.
      </p>

      <p className="mb-6">
        For example, in contrast to group 1 crypto assets, group 2 crypto assets lack a counterparty risk. Like with physical gold, there is no counterparty behind Bitcoin, and therefore, there is no counterparty risk either. While you mention the lack of a counterparty risk at a later point in the draft document, it does not seem to have had an impact on the proposed treatment of crypto assets. If you want to follow your own stated principles, you should recognize the absence of a counterparty risk as risk-reducing.
      </p>

      <p className="mb-6">
        Further, crypto currencies like Bitcoin provide much stronger property guarantees than traditional currencies like the US dollar. In contrast to crypto currencies, all electronically held dollars can be frozen or seized at any time without the cooperation of their owner. Banks are sometimes even threatened to be completely excluded from dollar clearing for political reasons. In theory, such threats can be challenged in court. But in practice, the necessary proceedings to do so can take many years and the court decisions would often arrive too late to avert the harm done to the threatened banks and by extension also the stability of the financial system. In contrast, crypto assets cannot easily be abused for political ends and no one can be excluded from Bitcoin clearing. Not requiring a legal system to function and being independent of national politics is a great advantage of crypto currencies that in an honest assessment should be recognized as risk-reducing.
      </p>

      <p className="mb-6">
        When assessing the risks of crypto assets, one should further appreciate that well-designed stablecoins can be much less risky than their conventionally secured counterparts. A stablecoin that is collateralized on-chain and backed by fully automated stability mechanisms can be much less risky than a traditionally collateralized stablecoin that depends on opaque intermediaries. For example, the Liquity USD (LUSD) is a dollar-based stablecoin that is collateralized on-chain with the cryptocurrency Ether. In case the price of the collateral drops, it can be liquidated automatically and secured within minutes. In contrast, it might take years of legal disputes to liquidate the issuer of a centralized stablecoin and to get hold of the used collateral (if it is still there). The draft proposal fails to recognize how blockchain technology can be used to reduce financial and regulatory risks significantly. Instead of essentially outlawing banking with crypto assets, you should encourage banks to analyze and use them!
      </p>

      <p className="mb-6">
        We agree that if the BIS is to propose any regulations, that these should constitute a &quot;minimum standard&quot; that can serve as a foundation for more restrictive local rules. However, it is somewhat hypocritical to propose the most restrictive capital requirements conceivable and still call that &quot;minimum standard&quot;. A minimum standard should, by definition, err on the side of being too liberal and not err on the side of caution, especially when proposing a simplistic &quot;one-size-fits-all&quot; rule. A good minimum standard should give local regulators the possibility to extend them where necessary and to further elaborate on them. However, your current proposal is in effect a &quot;maximum standard&quot; that leaves no room for fine-tuning. It would not make sense to impose a risk weight of 1251%. Your proposed minimum of 1250% is already the most restrictive weight possible, at least for long positions.
      </p>

      <p className="font-semibold mb-4">Well-Intended Group 1 Criteria</p>

      <p className="mb-6">
        Generally, it makes sense to regulate assets by their function and not their form. However, the group 1 criterion of 10 bpts fluctuation is way too restrictive and also the wrong metric to look at. To give a concrete example: a stablecoin like the Tether (USDT) would have a good chance to qualify as &quot;group 1 crypto asset&quot; as it enjoys a very high degree of liquidity and is traded at a tight spread versus the US dollar. However, at the same time, there is a non-negligible risk of a regulator freezing the accounts of the issuer in the name of combating money-laundering, thereby causing a sudden drop in the market value of the Tether. The tail risk of such a freeze cannot be adequately measured by monitoring small-scale, short-term volatility. Instead of forcing banks to implement onerous and continuous monitoring, you should allow banks to dedicate their compliance resources to implement actually useful safeguards tailored towards the specific crypto asset at hand. Of course, this precludes having a simple and globally applicable &quot;one-size-fits-all&quot; rule, but that is exactly the point: trying to impose a global one-size-fits-all criterion like the 10-basis-point idea would do more harm than good.
      </p>

      <p className="mb-6">
        In the medium term, reliable rating agencies might emerge that provide useful risk assessments for crypto assets, similar to how rating agencies cover the bond market today with ratings from AAA to D. Just like it is not a good idea to apply the same risk weight to all bonds, it is no good idea to apply the same risk weight to all crypto currencies. By defining an extremely conservative risk-weight for all crypto assets, you are denying the free market the opportunity to develop its own, more nuanced risk metrics. Once reliable ratings have emerged, regulators can use them to define capital requirements without inflicting as much collateral damage as a &quot;one-size-fits-all&quot; rule does. Already defining a binding rule before that happened makes it very hard for rating agencies to emerge as banks would not be allowed to take a risk-based approach based on their assessments.
      </p>

      <p className="mb-6">
        The second criterion for a crypto asset qualifying as &quot;group 1&quot; demands them to be &quot;legally enforceable in jurisdictions&quot;. Unfortunately, this excludes the most interesting and potentially least risky class of stablecoins, namely those built on decentralized protocols that do not depend on the solvency of an issuer or even the presence of a functional legal system. If the BIS is truly interested in financial stability, it should endorse stablecoins that are by design not exposed to traditional counterparty and enforceability risks. For example, the aforementioned LUSD is secured with a collateral on-chain that can be publicly verified at all times. This allows a bank to assess its stability with much more certainty and higher accuracy than a setup that relies on opaque traditional intermediaries and that assumes the counterparty&apos;s auditors and supervisors to be competent and incorruptible. A well-informed regulator should recognize the operational superiority of open and automatically enforceable liquidation mechanisms and encourage their use accordingly. The draft proposal would do the opposite.
      </p>

      <p className="mb-6">
        In the case of the LUSD, a rule like the 10-bps-proposal would also be quite destructive. Stablecoins like the LUSD have no issuer but instead depend on market forces pushing their price towards the fundamental value. However, the market makers that do the work of pushing the price towards the fundamental value can only operate profitably as long as there are slight deviations from the fundamental value. The arbitrage gains must be high enough to compensate them for the costs of dedicating capital and overcoming the frictions of transferring value between the traditional financial system and decentralized finance. Ironically, the proposed rules would significantly increase these frictions, thereby hurting the efficiency of the markets. In fact, the frictions your rules create could cause a stablecoin to trade at a premium or discount that is larger than 0.1%, thereby causing it to not qualify as group 1 crypto asset anymore. This is neither constructive nor fair.
      </p>

      <p className="mb-6">
        Further, when the LUSD temporarily trades at 1.01 USD, this is not a sign of it being unstable. It is a signal that the demand for the LUSD is higher than the arbitrage channel between the LUSD and the traditional USD can absorb at a tight spread. Instead of worrying about the risk of a stablecoin like the LUSD departing 0.1% from the underlying and trading at 1.001 USD, you should better worry about the risk of it departing 20% from the fundamental value, which is a completely different risk that should be assessed with different methods. Such methods likely have to be tailor-made towards the specific crypto assets and should take the stabilization mechanism as well as its parameters into account. These subtleties cannot be captured by a simple and general rule, which is why you should abstain from proposing such a rule.
      </p>

      <p className="font-semibold mb-4">Extreme Group 2 Capital Requirements</p>

      <p className="mb-6">
        The most ill-conceived aspect of the draft proposal is probably the 1250% risk weight for group 2 crypto assets without the possibility for netting short and long exposures. In essence, this would outlaw banking with Bitcoin. Every Bitcoin lent to a client would have to be fully covered by equity, making it equivalent to lending out equity capital directly and destroying one of the last incentives for a financial entity that deals with crypto currencies to apply for a banking license. Further, it would push banks with outstanding instruments denominated in Bitcoin towards using more risky means of hedging their exposure.
      </p>

      <p className="mb-6">
        As an example, consider the Bitcoin certificate issued by bank Vontobel (ISIN CH0553378750). It tracks the price of Bitcoin and is redeemable with the issuer. Assuming there is one billion dollars worth of outstanding certificates, the most conservative and least risky way of hedging that exposure would be to hold one billion worth of Bitcoins. However, under your current proposal, that hedging would not be recognized as risk-reducing at all, as the proposal lacks the possibility of netting long and short positions. As a consequence, the issuer would probably resort to entering into complicated agreements with third parties that are not banks to do the hedging for them. This is clearly costlier and riskier, and yet it is the behavior you are encouraging with the proposed regulation.
      </p>

      <p className="mb-6">
        The right way to move forward here is to apply the risk weight to the *net* exposure of the bank. For Bitcoins that are held indirectly, one should, of course, take the according counterparty risk into account. But as long as the bank holds Bitcoins directly, there is no such risk. There is no liquidity risk, no market risk, no exchange rate risk or any other risk that falls within the scope of the Basel framework in that setup. Economically, holding Bitcoins directly to hedge against a short Bitcoin exposure is as safe as holding central bank sight deposits to hedge against a short exposure in that central bank&apos;s currency. Therefore, the correct risk weight for directly allocated Bitcoins that have a matching liability in Bitcoin is 0%. This is also the risk weight for physically allocated gold bullion according to the Basel III Framework. The same reasoning applies to Bitcoin.
      </p>

      <p className="mb-6">
        Furthermore, there are many conceivable cases where group 2 crypto assets can make sense as a collateral. For example, when a client borrows tzBTC from a bank, the most secure collateral for such a loan would be real Bitcoins, as that would cover all exchange rate and counterparty risks for the bank.
      </p>

      <p className="font-semibold mb-4">Strategic Thoughts</p>

      <p className="mb-6">
        Strategically, there are two types of strategies on how law-makers can deal with reckless risk-taking. The first one is to prohibit everything that looks even slightly risky from a bird&apos;s eye perspective. This is what the draft proposal would do. The problem with this approach is that it causes a lot of collateral damage as it also prohibits a broad range of activities that would add value to the economy. However, for regulators and their advisors, this is often the preferred approach as it equips them with additional powers and makes banks depend on their expertise in order to navigate the created regulations. The second and in our opinion more fruitful strategy is to increase liability in the case of bad outcomes. If individual members of the board of directors of a bank can be held personally accountable for the systemic damage their bank causes, they will think twice about letting the bank take disproportionate risks. While the first strategy aims at outlawing the symptom (the risk-taking), the second approach aims at the root cause, namely the economic incentives of decision-takers that asymmetrically benefit from good outcomes.
      </p>

      <p className="mb-6">
        For regulators, the problem is the opposite: they are blamed when things go wrong, but no one recognizes their work when things go well. Here, it would be helpful if regulators could benefit more directly when their supervised entities do well and if they could be held more easily liable for the opportunities they destroy. This would better align the regulators&apos; interests with the economic interests of their countries. The latter, of course, is rather theoretical, as the economic loss caused by averting opportunities is very hard to measure.
      </p>

      <p className="font-semibold mb-4">Conclusion: Draft Proposal Harmful</p>

      <p className="mb-6">
        To conclude, the proposed measures would do more harm than good. All that needs to be said at this still early stage is that crypto assets that represent traditional assets should (obviously!) be treated like the traditional assets they represent. A crypto asset that is a share should be treated like a share. A crypto asset that is a bond should be treated like a bond. And a crypto asset that is a currency should be treated like a currency. The technology an asset is &quot;printed on&quot; should not matter. What matters is what it represents.
      </p>

      <p className="mb-6">
        For currencies, it should also not matter who the issuer is or whether an issuer exists at all. All the major world currencies have ceased to be redeemable for anything real a long time ago. Like Bitcoin, the USD and the EUR do not represent a claim towards an issuer. They only have value because people have some faith in the systems they represent. So why not just classify Bitcoin as an extraordinarily volatile currency? You should note that the volatility of Bitcoin has been decreasing for years, and by 2030, its price might have become as stable as that of gold or the South African Rand. There is no reason to treat a debt denominated in Bitcoin fundamentally differently from a debt denominated in any other currency.
      </p>

      <p className="mb-6">
        Should you choose to treat Bitcoin and other crypto assets as proposed, you would reveal that you care more about preserving the power of your constituents than about actually reducing risks in banking. The greatest risk we face when it comes to regulating crypto assets is that global standard-setters get it wrong and inadvertently spoil a once-in-a-lifetime opportunity for the traditional financial system to transition towards being freer, more inclusive, more open, and more transparent. We would like to kindly ask you to try not to contribute to that risk.
      </p>

      <p className="mb-6">If you wish to discuss the raised concerns more deeply, we stand at your disposal.</p>

      <p className="mb-8">Best regards</p>

      {/* Signatures */}
      <div className="mb-6 space-y-1">
        <p className="font-semibold">Bitcoin Association Switzerland</p>
        <p>Lucas Betschart</p>
        <p>Roger Darin</p>
        <p>Luzius Meisser</p>
      </div>
    </BlogPostLayout>
  );
}
