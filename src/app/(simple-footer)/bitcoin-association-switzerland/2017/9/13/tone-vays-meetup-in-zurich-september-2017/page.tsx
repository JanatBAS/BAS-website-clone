import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import Image from "next/image";
import { Metadata } from "next";

const post = getPostPage("tone-vays-meetup-in-zurich-september-2017");

export const metadata: Metadata = {
  title: post.title,
  description:
    "On 13 September the Bitcoin Association Switzerland hosted its largest Bitcoin Meetup so far, with Tony Vays and more than 330 Bitcoin enthusiasts in Volkshaus Zurich.",
};

export default function ToneVaysMeetupPage() {
  return (
    <BlogPostLayout post={post}>
      <div className="mb-8">
        <Image
          src="/images/blog/tone-vays-meetup-highres.jpeg"
          alt="Tone Vays Meetup in Zurich September 2017"
          width={800}
          height={533}
          className="w-full"
        />
      </div>

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
          className="text-brand hover:underline"
        >
          here
        </a>{" "}
        or below - please keep in mind that events like this are made possible thanks to our corporate members and sponsorships.
      </p>

      {/* Sponsor Logos */}
      <div className="flex items-center gap-8 my-8">
        <Image
          src="/images/blog/tone-vays-meetup-photo.jpeg"
          alt="Froriep"
          width={150}
          height={50}
          className="h-12 w-auto object-contain"
        />
        <Image
          src="/images/blog/ey-logo.gif"
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
    </BlogPostLayout>
  );
}
