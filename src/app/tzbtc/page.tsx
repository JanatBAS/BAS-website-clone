import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function TzBTCPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Sidebar */}
            <aside className="md:w-48 flex-shrink-0">
              <nav className="sticky top-24">
                <p className="text-[#5aa9a9] text-sm mb-2">Tokenized Bitcoin</p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/tzbtc"
                      className="text-[#5aa9a9] text-sm font-medium hover:underline"
                    >
                      tzBTC
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-2xl">
              {/* Title Section */}
              <h1 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
                tzBTC
              </h1>

              {/* Quote/Code Block */}
              <div className="bg-gray-100 px-4 py-3 mb-6 font-mono text-sm text-gray-700 text-center">
                tzBTC is a token on the Tezos blockchain backed 1-1 by Bitcoin
                (BTC).
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8">
                tzBTC brings the liquidity and stability of Bitcoin to the Tezos
                network. It gives people more choice how they can use Bitcoin
                and by that increase the utility and strengthen the position of
                Bitcoin as the world&apos;s leading digital currency.
              </p>

              {/* Logo */}
              <div className="flex justify-center mb-12">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1584471858726-YBDOCH4266YDPSLYBNE5/TZBTC+Logo"
                  alt="TZBTC Logo"
                  width={180}
                  height={178}
                  className="w-[180px] h-auto"
                />
              </div>

              {/* Setup Section */}
              <h1 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
                Setup
              </h1>

              <p className="text-gray-600 leading-relaxed mb-6">
                The multi-signature concept of tzBTC enables a strongly
                trust-reduced setup with no central issuer while being fully
                transparent. In this setup{" "}
                <strong className="text-gray-800">
                  the Bitcoin Association Switzerland acts as a third-party
                  overseer and mediator, adding to the integrity of the tzBTC
                  system.
                </strong>{" "}
                In a nutshell, we make sure there will never be more tzBTC
                issued on the Tezos blockchain than Bitcoins hold in the
                keyholders multi-signature address. The memorandum describing
                why thanks to this setup tzBTC is not a security token and the
                applicability of Swiss financial market regulations can be found{" "}
                <a
                  href="https://github.com/lclc/bitcoin-association-switzerland/blob/master/tzbtc/20190829%20Memo%20TZBTC.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5aa9a9] hover:underline"
                >
                  here
                </a>
                .
              </p>

              {/* Keyholders */}
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-4">
                Keyholders
              </h3>

              <p className="text-gray-600 mb-3">
                The keyholders consist of the following Swiss companies:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-8 text-gray-600">
                <li>
                  <a
                    href="https://www.lexr.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5aa9a9] hover:underline"
                  >
                    LEXR
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mtpelerin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5aa9a9] hover:underline"
                  >
                    Mt Pelerin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.komainu.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5aa9a9] hover:underline"
                  >
                    Komainu
                  </a>
                </li>
                <li>
                  <a
                    href="https://tangany.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5aa9a9] hover:underline"
                  >
                    Tangany
                  </a>
                </li>
                <li>
                  <a
                    href="https://hextrust.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5aa9a9] hover:underline"
                  >
                    Hex Trust
                  </a>
                </li>
              </ul>

              {/* Contracts */}
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-4">
                Contracts
              </h3>

              <p className="text-gray-600 mb-3">
                Following you can find all contracts (or templates of them)
                between the parties involved:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-8 text-gray-600">
                <li>
                  <a
                    href="https://github.com/lclc/bitcoin-association-switzerland/blob/master/tzbtc/2020_04_02_TZBTC_Use_of_Keys_Agreement_v1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5aa9a9] hover:underline"
                  >
                    Gatekeepers and Keyholders standard contract
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/lclc/bitcoin-association-switzerland/blob/master/tzbtc/Agreement%20Association_TEMPLATE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5aa9a9] hover:underline"
                  >
                    Tezos Foundation support of the Bitcoin Association
                    Switzerland
                  </a>
                </li>
              </ul>

              {/* On-Chain */}
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-4">
                On-Chain
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">
                <li>
                  <a
                    href="https://tzstats.com/KT1PWx2mnDueood7fEmfbBDKx1D9BAnnXitn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5aa9a9] hover:underline"
                  >
                    Token Contract on the Tezos Blockchain
                  </a>
                </li>
                <li>
                  Bitcoin Multi-Signature Custody Addresses:
                  <ul className="list-[circle] list-inside ml-6 mt-2 space-y-1">
                    <li>
                      <a
                        href="https://blockstream.info/address/37wUPNb2VQi7QPLLRcutKLN55mdW3h5xxv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5aa9a9] hover:underline text-sm"
                      >
                        37wUPNb2VQi7QPLLRcutKLN55mdW3h5xxv
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blockstream.info/address/38i1zYiosXxZ2BV52VgqbAfm2UJ7A62Eya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5aa9a9] hover:underline text-sm"
                      >
                        38i1zYiosXxZ2BV52VgqbAfm2UJ7A62Eya
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <p className="text-gray-800 font-bold mb-8">
                More information on tzBTC can be found on{" "}
                <a
                  href="https://tzbtc.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5aa9a9] hover:underline"
                >
                  tzbtc.io
                </a>
                .
              </p>

              {/* Separator */}
              <Separator className="my-8" />

              {/* Issuance Check Statements */}
              <h1 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
                Issuance Check Statements
              </h1>

              <p className="text-gray-600 leading-relaxed mb-6">
                Each quarter we will issue a statement on the number of tzBTC
                tokens issued and the BTC hold in multi-signature by the
                keyholders. The number has to be exactly the same.
              </p>

              {/* Reports */}
              <div className="space-y-4">
                <pre className="bg-gray-100 px-4 py-3 font-mono text-xs md:text-sm text-gray-700 overflow-x-auto whitespace-pre-wrap">
                  Report 1, 2020-04-08, 10:00, There exist 1 tzBTC backed by 1
                  BTC. No divergence.
                </pre>

                <pre className="bg-gray-100 px-4 py-3 font-mono text-xs md:text-sm text-gray-700 overflow-x-auto whitespace-pre-wrap">
                  Report 2, 2020-07-01, 10:00, There exist 357.94 tzBTC backed by
                  357.94 BTC. No divergence.
                </pre>

                <pre className="bg-gray-100 px-4 py-3 font-mono text-xs md:text-sm text-gray-700 overflow-x-auto whitespace-pre-wrap">
                  Report 3, 2020-10-04, 09:31, There exist 357.94 tzBTC backed by
                  357.94 BTC. No divergence.
                </pre>

                <pre className="bg-gray-100 px-4 py-3 font-mono text-xs md:text-sm text-gray-700 overflow-x-auto whitespace-pre-wrap">
                  Report 4, 2021-01-01, 10:00, There exist 357.94 tzBTC backed by
                  357.94 BTC. No divergence.
                </pre>

                <pre className="bg-gray-100 px-4 py-3 font-mono text-xs md:text-sm text-gray-700 overflow-x-auto whitespace-pre-wrap">
                  Report 5 2022-05-20, 13:00, There exist 1&apos;076.16 tzBTC
                  backed by 1&apos;076.16 BTC. No divergence.
                </pre>

                <pre className="bg-gray-100 px-4 py-3 font-mono text-xs md:text-sm text-gray-700 overflow-x-auto whitespace-pre-wrap">
                  Report 6 2023-09-19, 18:03, There exist 1&apos;076.16 tzBTC
                  backed by 1&apos;076.16 BTC. No divergence.
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </div>
  );
}
