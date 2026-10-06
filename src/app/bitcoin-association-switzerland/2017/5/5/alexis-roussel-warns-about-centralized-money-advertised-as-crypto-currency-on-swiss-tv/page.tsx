import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import { Metadata } from "next";

const post: BlogPostData = {
  title:
    "Alexis Roussel, CEO of Bity SA, warns about centralized money advertised as Crypto Currency on Swiss TV",
  titleHref: "https://bitcoin.fr/alexis-roussel-sur-leman-bleu-tv/",
  date: "14 May 2017",
  href: "/bitcoin-association-switzerland/2017/5/5/alexis-roussel-warns-about-centralized-money-advertised-as-crypto-currency-on-swiss-tv",
  newerPost: {
    title: "Our Regulatory Comment on the new Fintech-Regulation",
    href: "/bitcoin-association-switzerland/2017/5/7/stellungnahme-der-bitcoin-association-switzerland-zur-neuen-fintech-regulierung",
  },
  olderPost: {
    title: "Welcoming new board members",
    href: "/bitcoin-association-switzerland/2017/4/27/welcoming-new-board-members",
  },
};

export const metadata: Metadata = {
  title: post.title,
  description:
    "Alexis Roussel, cofondateur de Bity, discusses the difference between true cryptocurrencies like Bitcoin and centralized alternatives on Leman Bleu TV.",
};

export default function AlexisRousselWarnsPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Alexis Roussel, cofondateur de Bity, etait mardi l&apos;invite du journal de Leman Bleu ou on lui a demande de reagir a la creation mediatisee du Bilur, systeme centralise et monnaie privee indexee sur le petrole : &laquo; Quand on regarde ces nouvelles monnaies qui apparaissent, et dans ce cas precisement, on ne peut pas parler de crypto-monnaie : il ne s&apos;agit pas d&apos;un systeme ouvert, il y a un intermediaire fixe qui decide et qui est le garant de la quantite de petrole disponible.
      </p>

      {/* YouTube Embed */}
      <div className="my-8">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Z7a4IWn3xBs"
            title="Alexis Roussel - Bity"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <p>
        Un des fondamentaux du bitcoin c&apos;est justement qu&apos;il existe par lui-meme sur un reseau et qu&apos;il n&apos;y a pas besoin d&apos;un intermediaire pour garantir sa valeur [...]. [Bitcoin] est un reseau ouvert, ca veut dire que quelqu&apos;un qui est a l&apos;autre bout de la planete et qui n&apos;a pas de compte bancaire mais qui a un telephone (et la majorite de la population, maintenant, a un telephone), peut avoir acces a des services financiers numeriques sans attendre l&apos;autorisation d&apos;une banque. Cela ouvre des possibilites gigantesques. &raquo;
      </p>

      <p>
        Source:{" "}
        <a
          href="https://bitcoin.fr/alexis-roussel-sur-leman-bleu-tv/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
        >
          https://bitcoin.fr/alexis-roussel-sur-leman-bleu-tv/
        </a>
      </p>
    </BlogPostLayout>
  );
}
