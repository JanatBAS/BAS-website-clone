import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexis Roussel, CEO of Bity SA, warns about centralized money advertised as Crypto Currency on Swiss TV - Bitcoin Association Switzerland",
  description:
    "Alexis Roussel, cofondateur de Bity, discusses the difference between true cryptocurrencies like Bitcoin and centralized alternatives on Leman Bleu TV.",
};

export default function AlexisRousselWarnsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-sm text-gray-500 mb-6">
            <Link
              href="/bitcoin-association-switzerland/2017/5/5/alexis-roussel-warns-about-centralized-money-advertised-as-crypto-currency-on-swiss-tv"
              className="hover:underline"
            >
              14 May 2017
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-2 leading-tight">
            Alexis Roussel, CEO of Bity SA, warns about centralized money advertised as Crypto Currency on Swiss TV{" "}
            <a
              href="https://bitcoin.fr/alexis-roussel-sur-leman-bleu-tv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c75b4a] hover:underline"
            >
              &rarr;
            </a>
          </h1>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6 mt-8">
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
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <ShareButton title="Alexis Roussel, CEO of Bity SA, warns about centralized money advertised as Crypto Currency on Swiss TV" />
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-start">
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Newer Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2017/5/7/stellungnahme-der-bitcoin-association-switzerland-zur-neuen-fintech-regulierung"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Our Regulatory Comment on the new Fintech-Regulation
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2017/4/27/welcoming-new-board-members"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Welcoming new board members
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
