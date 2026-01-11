import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Op Ed: Proof of Work, not Proof of Stake - Bitcoin Association Switzerland",
  description:
    "A personal journey through the Bitcoin world, exploring encounters with key figures and investigating the identity of Satoshi Nakamoto.",
};

export default function ProofOfWorkNotProofOfStakePage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Author */}
          <div className="text-sm text-[#c75b4a] mb-2">
            <Link
              href="/bitcoin-association-switzerland?author=5968efd7f14aa14e4bef8611"
              className="hover:underline"
            >
              Bernhard Muller Hug
            </Link>
          </div>

          {/* Date */}
          <div className="text-sm text-[#c75b4a] mb-6">
            <Link
              href="/bitcoin-association-switzerland/2017/7/14/proof-of-work-not-proof-of-stake"
              className="hover:underline"
            >
              15 July 2017
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-8 leading-tight">
            Op Ed: Proof of Work, not Proof of Stake
          </h1>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">474843 3.981E-04</h2>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
              I slept here last night.
            </blockquote>

            <p>
              Couldn&apos;t have put it more precisely. The thing was a drag. Since the speech at the Arnhem conference the nights had been very short.
            </p>

            <p>
              Ironically, I only found{" "}
              <a
                href="https://www.youtube.com/watch?v=JdJexAYjrDw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                the video
              </a>{" "}
              by looking at comments below Craig Wright memes. I wondered why they would pop-up after such a long period of silence? After viewing the footage, I immediately started looking for people discussing it online. There buried somewhere, I found an invitation link to a chat. The chat turned out to contain a contributor who went by csw...
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">256260 7.576E-03</h2>

            <p>
              I stepped out of work meetings a few times to use my phone. The man was hard to reach, the number he gave me was off the grid. He finally phoned back and apologized for having been busy with his piloting lessons. We arranged the handover at lunch time.
            </p>

            <p>
              I excused myself from the business lunch at the strip mall and went over to the Salt Lake City University Park Marriot. A white Porche Cayenne pulled up and I immediately spotted the Utah number plate &quot;BITCOIN&quot;. The plate excited me but the car was ugly looking, not my preference really. That must be him then. I entered the car and we only briefly greeted since he immediately asked if I had been videoing him in his car just before. I denied, and he told me that there were just some people doing that before while pointing somewhere. He made a notion towards the number plate, evidently it was not the first time this had happened. I found this strange; around my parts of the world no one even knew what Bitcoin is at the time so how would a passerby even have noticed? Then again, we don&apos;t do custom plates so it&apos;s not a thing to look at number plates, plus in the Mormon state there seem to be lots of skilled IT people, so they might have had a head start on all of this.
            </p>

            <p>
              We changed topic and he proposed to go for lunch just after we had executed the deal. Since I picked up the package personally he insisted on giving me back the shipping fee and pulled out a whole stack of QR codes on colored paper. He mentioned those being the safest for giving change and Bitcoin handouts to people. He must have had a system where he had a prepared address list at home as he only gave me the private key and didn&apos;t do anything to fund it right in that moment. Instead, he wrote down a number and an amount on a piece of paper.
            </p>

            <p>
              We perused to lunch in one of these bagel, doughnut &amp; muffin places on a busy intersection the Americans like to call deli. I remember him mentioning that in real life, he only had socially engaged with bitcoiners once before and didn&apos;t seem to be interested in pursuing it much further. It came a bit as a surprise, as he was quite prominent in the Bitcoin scene and had made a{" "}
              <a
                href="https://casascius.wordpress.com/2013/04/24/i-made-a-video-as-a-reply-to-ron-paul/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                big effort to convince
              </a>{" "}
              <a
                href="https://de.wikipedia.org/wiki/Ron_Paul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Ron Paul
              </a>{" "}
              that Bitcoin is to be taken seriously. His plan had worked out, it seemed.
            </p>

            <p>
              Later in the year, I received a PGP signed message confirming that he personally handed me the series I bought on that day.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">127786 1.136E-01</h2>

            <p>
              I had spent all of 1999 down-under as an exchange student. One of my dear friends from that time called me to have a chat. He mentioned an{" "}
              <a
                href="http://www.spiegel.de/netzwelt/netzpolitik/hacker-waehrung-bitcoin-geld-aus-der-steckdose-a-765382.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                article
              </a>{" "}
              he had just come across that was about a new, private, digital currency. He reckoned it would appeal to me, since we have had lots of discussions about the internet and its potential implications during our student&apos;s exchange. We&apos;ve had this crazy idea we called the 3DRelationshipGrid, where you could have seen how many hubs you&apos;d had to pass to e.g. know Michael Jackson.
            </p>

            <p>
              He couldn&apos;t explain the new currency comprehensively, but promised to send me the link. I read the article once and I don&apos;t have any recollection of understanding how Bitcoin worked back then. I was more intrigued by the cheekiness of creating something like this, a private form of money on the internet. I also recognized that the designer tried to make a system which determines how many of these coins can be created and that the number of units in circulation would approximate an asymptotic curve, which means one that is inching closer towards a finite value but will never actually reach it.
            </p>

            <p>
              In retrospect, I find it very fortunate that this call from my dear friend was my first contact with Bitcoin. It was a well-informed article for a mainstream media outlet, especially when considering that this was a very early period of Bitcoin. I always figured most people have heard of Bitcoin through news of crashes, heists or economists predicting its epic failure.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">128327 7.246E-02</h2>

            <p>
              I gave this funny money very little chance of survival, but had the feeling it might be investment worthy. My experience with{" "}
              <a
                href="https://de.wikipedia.org/wiki/Ultima_Online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Ultima Online
              </a>{" "}
              had taught me that intangible assets can have real market value. Items and gold had regularly been sold on Ebay.
            </p>

            <p>That day I wrote back to my friend:</p>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
              I think it is investment worthy. I will report back. I have sent 100 EUR to{" "}
              <a
                href="https://de.wikipedia.org/wiki/Mt.Gox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Mt.Gox
              </a>{" "}
              to buy Bitcoins. It takes 2-3 days and I can&apos;t watch the exchange rate rise. Dreadful to watch and not being able to buy. Mining is not worth it, as my graphics card doesn&apos;t seem to be compatible.
            </blockquote>

            <p>
              I seem to have managed to complete this first trade on Mt.GOX, since my email history shows that I sent myself an encrypted .rar-archive of the wallet.dat file. The conversation with my friend went on about investing in mining and at one point we wanted to invest a few thousand in these{" "}
              <a
                href="https://web.archive.org/web/20110722025454/https://en.bitcoin.it/wiki/Mining_hardware_comparison"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                6990
              </a>{" "}
              to mine at his place. Orders were placed but the merchants were sold out globally so we got refunded.
            </p>

            <p>
              Later that summer, bitcoin would rocket to astonishing 35$. Probably the effect of a first media hype triggered by the fact that Bitcoin crossed 1$ earlier in the year. In Q4 it corrected to 5$ and I learned that this had already been the 3rd or 4th bubble. Then, I got distracted and focused on other things.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">260265 7.353E-03</h2>

            <p>
              I had arranged for two meetings in advance of the{" "}
              <a
                href="https://bitcointalk.org/index.php?topic=266951"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Bitcoin 2013 EU Conference in Amsterdam
              </a>
              .
            </p>

            <p>
              The first one was in a coffee shop called e-help and several aliases have signaled to turn up. It ended up being quite a crowd. Among them, I remember Vitalik &amp; Mihei from Bitcoin Magazine, David Bayley from{" "}
              <a
                href="https://ybitcoin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                yBitcoin
              </a>
              , Peter the Scottish Avalon miner,{" "}
              <a
                href="https://www.linkedin.com/in/dmitrymurashchik/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Dimitry
              </a>{" "}
              and husband and{" "}
              <a
                href="https://twitter.com/bfl_josh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                BFL Josh
              </a>
              .
            </p>

            <p>
              About 65% of the attendants had a pending order with BFL, thus Josh decided to leave the establishment early. During the remainder of the conference, he hid like a weasel and was only briefly seen on the periphery of the venue to attend to important meetings (probably some sort of firefighting for BFL-orders being TwoWeeks&trade; late).
            </p>

            <p>
              Some of the remaining people started smoking Indica and we continued to discuss involvement and future plans. Nobody wanted to over-do it that night and we all left for our hotels in due time. After all we had missed the first day of the conference already.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">260367 7.246E-03</h2>

            <p>The conference was crowded and I was excited by the talks and panels ahead.</p>

            <p>
              The second meeting was arranged with the gentleman from{" "}
              <a
                href="http://newlibertydollar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                New Liberty Dollar
              </a>
              , for just after his presentation at the conference. He had messaged me on the 24th, that his flight only allowed him to get to the venue after his slot at 10:10am. The organizers were apparently not responding to his request to reschedule, which frustrated him.
            </p>

            <p>
              Joseph was a tall guy with a long pony tail and a noticeable hat. We greeted by shaking hands and mustering each other&apos;s faces, establishing proper eye contact. They say that the first half second you see someone the unconscious bias is formed. In his case, my bias went towards liking Joseph who spoke with a firm but soft and friendly voice.
            </p>

            <p>
              The conditions of the deal were agreed upon. We would exchange one of my coins picked up in Salt Lake City for 5 of{" "}
              <a
                href="https://bitcointalk.org/index.php?topic=269535.0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                his coins
              </a>
              . These were minted to commemorate Bitcoin and featured a QR-code on their surface. Decoding it leads to a homepage which shows you the value of the coin in Bitcoin or any other currency. I grasped that the idea was to have an ounce of silver with a face value of 0.25 BTC. At the time of creation that added up to about the price of a troy ounce of silver. Gold or silver coins denoted in USD or other fiat currencies normally appreciate in value against the denominated units. In this case the design was to get the opposite effect. Thus, it demonstrates what a hard asset BTC is, as it appreciates against silver.
            </p>

            <p>
              The coins I received had a special stamp on them to honor the 5 year anniversary of the{" "}
              <a
                href="https://web.archive.org/web/20100704213649/http://www.bitcoin.org:80/bitcoin.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Satoshi white paper
              </a>
              , which was released on the 31st of October 2008.
            </p>

            <p>
              My motive for the trade originated in being intrigued by how many people in the Bitcoin community were thinking about what money actually is. Which requirements we would define, if we designed our own. It had truly never occurred to me before to even think about it. The economics section in the paper was something for old farts. Who actually cares how money is created, where it comes from or who controls it as long as you have enough? If you haven&apos;t got any, there are far more important things for you to do than philosophize about it.
            </p>

            <p>So on that day, for the first time in my life, I consciously engaged in barter trade.</p>

            <p>
              It was noon and Joseph and I decided to go for lunch together. We went to a Kebab place just across the street from the conference. After ordering, we sat down at one of these tables that are just too small and too low for tall guys like us. I asked Joseph about the New Liberty Dollar and how it compares to the Liberty Dollar. It turned out that he knew{" "}
              <a
                href="https://en.wikipedia.org/wiki/Bernard_von_NotHaus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Bernard von NotHaus
              </a>{" "}
              personally and also helped him with his legal work. At the time, Von NotHaus was seen as the{" "}
              <a
                href="https://en.wikipedia.org/wiki/Rosa_Parks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Rosa Parks
              </a>{" "}
              of the Libertarians. He was found guilty of money counterfeiting by a jury and that came as a surprise, since he had always advertised the Liberty Dollar as an alternative to the US Dollar, a new money so to speak, not a copy of a currency he considered flawed. The idea was to have an actual metal based currency again, which people could use if they chose to. As the Liberty Dollar got more and more successful, it must have been a threat to some powers, as the FBI raided Von HotHaus and confiscated all the metal. Since the alleged money counterfeiting was so absurd, the judge didn&apos;t want to sentence him, which left him in limbo between conviction and an actual sentencing for years.
            </p>

            <p>
              I gathered the New Liberty Dollar was a kind of protest against von NotHaus&apos; detention and the strike against the alternative currency. A reclamation of rights, so to speak. We went back to discussing Bitcoin and earlier electronic currency systems. It turned out that Joseph had far more knowledge about these things than I. The names of some of the systems I had heard of before, but he seemed to know a lot more about their history and more importantly much more about the motivation for their creation. We discussed for a while and concluded that no human being should ever be hindered from transacting with another human being. If one has no choice which money one uses in a transaction, one is not free.
            </p>

            <p>
              Satoshi wanted to make that conclusion truth. A genius scheme was elaborated and launched with comparatively little effort. But who was he, Satoshi? A group or an individual?
            </p>

            <p>
              I am not sure, why Joseph opened up to me, why he gave me a glimpse of who it could be. He must have trusted me for some reason. Apparently, he had met someone at{" "}
              <a
                href="https://archive.org/details/whatthehack2005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                a hacker camp in the Netherlands in 2005
              </a>
              , who had shown him notes of such a system which he would consider to be Bitcoin today. Joseph had taken notes during their discussion and might have been shown some documentation by the other person. When he mentioned that he might still have image material of the person at the event, I told him, he should consider destroying that. The only piece of identity he did give away, was that the name he had been offered, Satoshi Nakamoto, clearly couldn&apos;t have been the official name of the person he had been talking to. I figured, it must have been either a woman or a non-Japanese person.
            </p>

            <p>
              Years later, Joseph would confirm that a{" "}
              <a
                href="http://archive.is/GTwIt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                leaked story
              </a>{" "}
              was actually written by him. The resemblance to what he had told me at the time was astonishing.
            </p>

            <p>
              The conference ended the next day, after many interesting speeches and encounters. As of today, I am still in contact with some of these people. Some have gone to take part in noticeable Bitcoin endeavors.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">387544 2.410E-03</h2>

            <p>
              News of a person named{" "}
              <a
                href="https://en.wikipedia.org/wiki/Craig_Steven_Wright"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Craig Steven Wright
              </a>{" "}
              started coming up. I only caught it on reddit; apparently there was a story about a guy who got interviewed by video chat at the Bitcoin Investor Conference in Las Vegas. The girl who had interviewed the man, indirectly had outed him as Satoshi.{" "}
              <a
                href="https://www.youtube.com/watch?v=LdvQTwjVmrE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                The video
              </a>{" "}
              showed that she was indeed asking many very specific questions and thus indirectly had led to speculations. In December, after two magazines ({" "}
              <a
                href="http://web.archive.org/web/20151208235451/http://gizmodo.com/this-australian-says-he-and-his-dead-friend-invented-bi-1746958692"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                1
              </a>
              ,{" "}
              <a
                href="http://web.archive.org/web/20151208214655/https://www.wired.com/2015/12/bitcoins-creator-satoshi-nakamoto-is-probably-this-unknown-australian-genius/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                2
              </a>
              ), most likely tipped off by outside sources, had posted that Mr. Wright most likely was Satoshi. Shortly thereafter, his home and offices were raided by the Australian Tax Authority accompanied by the Australian Federal Police.
            </p>

            <p>
              The whole story was weird, but I wasn&apos;t that interested in it until in spring the next year{" "}
              <a
                href="https://en.wikipedia.org/wiki/Gavin_Andresen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Gavin Andresen
              </a>
              , the former lead developer of Bitcoin, wrote a{" "}
              <a
                href="http://gavinandresen.ninja/satoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                blog post
              </a>{" "}
              confirming the Australian in fact being Satoshi. Later, other people confirmed it as well, among them my encounter Joseph from the conference in 2013. Some, like Gavin, even attested they had seen cryptographic proof.
            </p>

            <p>
              It was later announced that the proof would also be made public sometime in the future. I was quite positive this proof would happen, since Joseph had acknowledged that this was the man he had met in 2005.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">409829 2.257E-03</h2>

            <p>
              I made sure to have popcorn ready, so to speak. I had to work, but there wouldn&apos;t be a reason stopping me from peeking into reddit every 1-2 hours.
            </p>

            <p>
              <a
                href="https://web.archive.org/web/20160502072011/http://www.drcraigwright.net/jean-paul-sartre-signing-significance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                The blog post
              </a>{" "}
              appeared with a statement and instruction to verify the proof. It was weird, as the free text kind of implied that Craig Wright did not actually want to provide that proof. He had mentioned previously that he did not want to come out and that other people had pressured him do it. My reading up on the person the past week, lead me to believe that the man was getting extorted, had huge tax issues, potentially financial issues at large and that there might even be more factors involved that forced him to act. The title referencing{" "}
              <a
                href="http://www.nybooks.com/articles/1964/12/17/sartre-on-the-nobel-prize/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Sartre
              </a>{" "}
              was strange, but I didn&apos;t pay much attention to it at the time.
            </p>

            <p>
              A few minutes later the internet was full of experts claiming that the proof was false, old signatures were copied and variable names didn&apos;t check out in the script. Reddit was glowing and the truth was swiftly established. The guy was an utter fake, a confidence trickster at best.
            </p>

            <p>
              After another failed attempt to provide proof through moving coins, things quickly went silent. I thought about that story a lot. Why would someone pull such a stunt? Why &quot;scam&quot; people without asking for something? Why did Joseph acknowledge him? Well-respected business men and community members with a reputation on the line had been in on this? It seemed so stupid and it felt to me, this couldn&apos;t be the end of the story.
            </p>

            <p>
              I kept searching social media for quite some time after the hoax was over. A very strange{" "}
              <a
                href="https://www.documentcloud.org/documents/2644014-Tulip-Trust-Redacted.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                leak
              </a>{" "}
              was shared. Apparently, the Tulip Trust did not allow usage of the keys and a{" "}
              <a
                href="https://bitcoinmagazine.com/articles/satoshi-saga-continues-tulip-trust-trustee-expected-to-appear-by-september-says-joseph-vaughnperling-1462467803/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                board meeting of said trust
              </a>{" "}
              was to be held in September. Very vague stuff about the trust being an alleged vessel for the early Satoshi coins. I couldn&apos;t find more on that and pursued other interests.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">474078 3.945E-04</h2>

            <p>
              I found some pastebin links on reddit. I read lots of them. I learned that a guy, I figured one working for Craig Wright with{" "}
              <a
                href="https://nchain.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                nChain
              </a>
              , managed to organize a Q&amp;A session a while back. He seemed to be the speaking organ for Craig Wright as all questions were answered through his account. There were miles of records of these conversations that had been going on for quite a while. Mostly very technical stuff, but also some personal. There were references that he started leaking documents, basic stuff like his many university diplomas for degrees he wasn&apos;t supposed to have according to some sources. Finally, one conversation was about getting CSW to join the chat himself...
            </p>

            <p>
              A while back on TV, Craig Wright had made it crystal clear: This was the last{" "}
              <a
                href="https://www.youtube.com/watch?v=5DCAC1j2HTY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                TV-Appearance
              </a>{" "}
              ever, he didn&apos;t want help or money and generally wanted to be left alone. Appeal to authority disgusted him. He generally seemed to be a rough character, and most likely he was extraordinarily tense during that period. He vanished with a{" "}
              <a
                href="https://web.archive.org/web/20160505140114/http://www.drcraigwright.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                final note on his blog
              </a>
              , stating he can&apos;t do it due to being too weak. After the obvious shit-storm that followed, things turned very silent.
            </p>

            <p>
              So why had he agreed to do a Q&amp;A in the first place? Most likely he couldn&apos;t stand the idea, that so many allegations against him, Craig Steven Wright, stood unanswered. In addition, someone must have convinced him that support from other people than nChain employees might help, if he truly wanted to make his ideas work and finish what he had presumably started. After all Bitcoin was only as good as the size and quality of its economy and community.
            </p>

            <p>
              After I got administered to the chat I found myself in the lobby. I scrolled up to see what was being discussed and was surprised to find that the on-boarding of Craig Wright in the chat had apparently worked and that he was still there. I felt like a stupid fanboy, when I went through many of his comments and more interestingly the files he submitted. There were 10 pages of files and photographs. Scans of his diplomas, screenshots of emails linking him to{" "}
              <a
                href="https://en.wikipedia.org/wiki/Dave_Kleiman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Dave Kleiman
              </a>
              , photographs showing his linkage to the Japanese culture, invoices, court documents, tax stuff, archived code, personal pictures, documents about his past in online gambling and most importantly snippets of the stuff his team seems to be working on today.
            </p>

            <p>
              It all matched pretty well with the{" "}
              <a
                href="http://archive.is/kjuLi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                article published on 30th of June 2016
              </a>{" "}
              I found later in the week. Journalist{" "}
              <a
                href="https://en.wikipedia.org/wiki/Andrew_O%27Hagan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Andrew O&apos;Hagan
              </a>{" "}
              accompanied Craig Wright for 5 months, including the time the whole drama had happened. I must have missed it when it came out as it also covered the time after the debacle. The journalist specifically mentioned that when asked, he chose not to publish first, as he thought the real value was in the aftermath. As I sucked it in, it became clear that there might be a plausible story after all...
            </p>

            <p>
              The person controlling the csw account seems to want to make a move which leaves very little surface for future attacks and extortion. Breadcrumbs are thrown out there, in hope for people to pick them up and be smart enough to connect the dots. It seems Craig Wright attempts to restore his credibility as Craig Wright whilst maintaining plausible deniability that he was behind Satoshi. He likes mystery and shows a flair of citing all sorts of myths, legends and literature. Among them is{" "}
              <a
                href="https://en.wikipedia.org/wiki/Sun_Tzu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Sun Tzu
              </a>{" "}
              who wrote the famous book on{" "}
              <a
                href="https://en.wikipedia.org/wiki/The_Art_of_War"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                The Art of War
              </a>{" "}
              2500 years ago.
            </p>

            <p>
              The whole story and the itch I was sensing drove me to make a very blunt move. Without even introducing myself I straight out confronted csw with a few questions in the lobby. Specifically, I wanted to inquire about his attendance to the hacker conference back in 2005. The response was basically: &quot;no comment&quot; with a whiff of &quot;you idiot&quot;. I reckoned to get booted from the chat immediately after such a stupid move, but to my surprise that didn&apos;t happen.
            </p>

            <p>
              It gave me the creeps when I checked the users-page and found my old acquaintance Joseph to be an active member of this chat with one of his uploaded files being a flyer to a{" "}
              <a
                href="https://sha2017.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                hacker&apos;s conference in the Netherlands
              </a>{" "}
              later in the year. What was going on here? What are the alleged imposter and team actually working on?
            </p>

            <p>My research leads me to believe that there should be papers, patents and code coming out for the following:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Turing completeness of Bitcoin. It means Bitcoin could be so much more than it is today. To the very extreme, that could turn many alt-coins worthless. Endless possibilities, almost.
              </li>
              <li>
                A dealerless system, which means that shards for a key can be produced in a way that there is no risk anyone has a copy of the original key. These shards can then be used to sequentially sign M/N. If that became true, it also means a pretty big deal, especially when working in Bitcoin natively. Craig Wright mentioned during his appearance in Arnhem that it should provide the basis for storing bitcoin much smarter and safer.
              </li>
              <li>
                Drastic scalability on chain. The team believes that on chain scaling is the solution to Bitcoin&apos;s scaling problems.
              </li>
              <li>
                IP to IP transactions, fixed but apparently very similar to the original implementation.
              </li>
              <li>
                A native Bitcoin market, fixed but apparently very similar to the original implementation.
              </li>
              <li>
                A potential attack vector against SegWit miners.
              </li>
            </ul>

            <p>So is Craig Wright Satoshi? No.</p>

            <p>Was Craig Wright Satoshi in his former life? In his own words:</p>

            <div className="my-6">
              <Image
                src="http://i.imgur.com/nAcekfj.png"
                alt="Craig Wright response"
                width={600}
                height={100}
                className="max-w-full h-auto"
              />
            </div>

            <p>
              My gut feeling tells me, that some of the people involved in all of this, are actually close to Bitcoin&apos;s roots, to the ideology and forces it was created by; true market capitalism, true economic sovereignty.
            </p>

            <p>
              At this point, the reader might be disappointed by not being offered more tangibility. Be told that, if Craig Wright would have been Satoshi and he would have shown you any sort of cryptographic proof, he should be the most heavily challenged developer out there. I ask you all to intellectually challenge Craig Wright&apos;s work. No matter what you or I believe about Satoshi, Craig Wright is in fact a highly qualified individual to work on Bitcoin. He has never asked anything of you, except maybe to just bugger off.
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
              8 Likes
            </button>
            <ShareButton title="Op Ed: Proof of Work, not Proof of Stake" />
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Comments (3)</h3>


            {/* Comment 1 */}
            <div className="mb-8 flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-2">
                  <span className="text-gray-400">8 years ago</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-400">Pending</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-400">Awaiting Moderation</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-400">0 Likes</span>
                </div>
                <p className="text-sm text-gray-700">
                  &quot;I ask you all to intellectually challenge Craig Wright&apos;s work.&quot;
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  First there would have to be some. Wright makes a lot of claims but never backs them up. Wright is code-free.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  FWIW, dealerless multisig ECDSA is known for a long time, it&apos;s just a PITA to implement and requires many communication rounds. e.g. stevengoldfeder.com/papers/threshold_sigs.pdf
                </p>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="mb-8 flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-medium text-gray-700">Bernhard Muller Hug</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-400">8 years ago</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-400">Pending</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-400">Awaiting Moderation</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-400">0 Likes</span>
                </div>
                <p className="text-sm text-gray-700">
                  Thanks for this input. Author here. You can find three things already on the nChain homepage today it seems. Here are also some other articles I have collected for a start:
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <a
                    href="https://drive.google.com/open?id=0B1X9aq8p_7wDQldQWGtYTlNxczg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline break-all"
                  >
                    https://drive.google.com/open?id=0B1X9aq8p_7wDQldQWGtYTlNxczg
                  </a>
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  According to CSW there should be more coming in the next days, weeks and month...
                </p>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="mb-8 flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-medium text-gray-700">Sam</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-400">8 years ago</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-400">Pending</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-400">Awaiting Moderation</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-400">0 Likes</span>
                </div>
                <p className="text-sm text-gray-700">
                  Informative, thanks for sharing.
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
                  href="/bitcoin-association-switzerland/2017/8/8/lakeside-partners-joins-the-bitcoin-association-switzerland"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Self-made
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2017/5/10/how-to-join-the-community"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  How to participate in the local Bitcoin community
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
