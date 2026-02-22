import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const boardElectionNavItems = [
  { label: "FAQ", href: "/faq", active: true },
  { label: "Timeline", href: "/timeline" },
  { label: "Candidates", href: "/candidates" },
  { label: "- Adriano Bertini", href: "/adriano-bertini", indent: true },
  { label: "- Dario Duran", href: "/dario-duran", indent: true },
  { label: "- Bastian Feder", href: "/bastian-feder", indent: true },
  { label: "- Demelza Hays", href: "/demelza-hays", indent: true },
  { label: "- Ralph Hofacker", href: "/ralph-hofacker", indent: true },
  { label: "- Ronald Kogens", href: "/ronald-kogens", indent: true },
  { label: "- Tobias Kress", href: "/tobias-kress", indent: true },
  { label: "- Phil Lojacono", href: "/phil-lojacono", indent: true },
  { label: "- Niklas Nikolajsen", href: "/niklas-nikolajsen", indent: true },
  { label: "- Marcel Rapold", href: "/marcel-rapold", indent: true },
  { label: "- Alexandre Flory Samartino", href: "/alexandre-flory-samartino", indent: true },
  { label: "- Lisa Tscherry", href: "/lisa-tscherry", indent: true },
  { label: "- Eric Wasescha", href: "/eric-wasescha", indent: true },
  { label: "How to vote", href: "/how-to-vote" },
];

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
  update?: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How can I apply for a board seat?",
    answer: "Submit your application before the deadline to info@bitcoinassociation.ch and roger@bitcoinassociation.ch in cc. The application must contain your name, a current photograph (JPG), a brief biography/CV (PDF), your residential address (PLZ, City is sufficient) and your motivation to run for office (PDF).",
  },
  {
    question: "What is expected from me as a board member?",
    answer: "The Bitcoin Association Switzerland dates back to 2013 and has helped many on their journey into a fascinating new world. As a board member you are responsible for the daily operations of the association, including community management, budget processes and finance management, the organisation of events and generally fulfil member's expectations. In the past, this has included working with regulators to make sure they understand the space. Recently, there have been discussions about whether the BAS should update its bylaws, for example by focusing more on Bitcoin (the current bylaws state the mission as fostering cryptocurrencies in general).",
  },
  {
    question: "How does the election process for board members work?",
    answer: (
      <>
        Each candidate will be voted upon separately and will be considered elected when he has more than 50% of the available votes. If fewer than four seats have been filled after a complete first round of voting, a second round will take place where the weakest candidate gets removed. <span className="line-through">There is no third round of voting in this manner. If more than six candidates meet the threshold of 50%, six positions will be filled by those six candidates with the most votes whereas the second round is subordinate to the first round.</span>
      </>
    ),
    update: "Update 8.9.24: This procedure will not allow mail-in members to have an equal vote to those present at the assembly. The process has therefore been updated, see \"How to vote\" for details.",
  },
  {
    question: "How many board members will get elected?",
    answer: (
      <>
        The aim is to fill five board positions from amongst the candidates, though four will be acceptable as well. <span className="line-through">If all candidates have been voted upon and fewer than four candidates are elected, voting members can each propose up to two different names (each name considered one vote) they would like to be elected even if one name gets more than 50%, that person will be asked whether he/she accepts. If after this process the board is still fewer than four, the new board members will organise a subsequent election to fill the required seat(s).</span>
      </>
    ),
    update: "Update 8.9.24: This procedure will not allow mail-in members to have an equal vote to those present at the assembly. The process has therefore been updated, see \"How to vote\" for details.",
  },
  {
    question: "Where can I see who is applying for a board seat",
    answer: "The BAS website contains a section where all candidate profiles are visible (photo, name) with the additional documents available for download.",
  },
  {
    question: "How will the President get elected?",
    answer: "Once all board members have been elected, a second vote will take place for the election of the President from amongst all board members. The person with the most member votes will then become President. Elected board members are not allowed to vote in this process but get to briefly verbally express their preferences, if any. A tie in the election for the Presidency will result in a second round of voting with all but the two strongest candidates being removed from consideration. If the second round also ends in a tie, the toss of a coin will decide.",
  },
  {
    question: "I can't make it to the general assembly, can i still get elected?",
    answer: "Yes, you can still get elected, even when you cannot attend the extra ordinary general assembly in person. What matters is that you submit your application for a board seat before the deadline. All candidates that have their profile on this website, are eligble for election and will be on the ballot paper.",
  },
  {
    question: "I can't make it to the general assembly, can i still vote?",
    answer: "Yes, you can still vote. As soon as the cutoff time for board applications closes, we will provide a voting form on this website with instructions where you can choose the candidates you want to vote for and also name the person you'd support to become President, if that person gets elected to the board. You send in this form via postal mail (yes, we know that's not very digital) to the person/address provided along with the form. That person will be the only person who knows who you've voted for and is bound to secrecy.",
  },
  {
    question: "Will the votes be anonymous at the general assembly?",
    answer: "Yes, the votes at the extra ordinary general assembly 2024 will be anonymous. As you arrive and confirm your membership (i.e. you'll have to be register as a member before 25th September), you get two voting sheets for each vote you can represent. On the first sheet, you can check the names of people you want elected for the board and on a second sheet, you can name the person you want to become President. The second sheets will be collected only after the new board has been elected.",
  },
  {
    question: "How do I pay my membership dues (individuals)?",
    answer: (
      <>
        Send the equivalent of at least CHF 21 to the Bitcoin Association Switzerland&apos;s wallet (bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju) and send an email with your name to info@bitcoinassociation.ch and roger@bitcoinassociation.ch stating your TX number. You will get a brief email confirmation of your membership within 7 days, unless there have been reasons to reject you, in which case you will also hear back from us within 7 days (possible reasons for a rejection include fake names, or a history of hostility towards Bitcoin). More on signing up can be found <Link href="/renew-membership" className="text-[#c75b4a] hover:underline">here</Link>.
      </>
    ),
  },
  {
    question: "How do I pay my membership dues (corporates)?",
    answer: "Apply for membership to info@bitcoinassociation.ch and roger@bitcoinassociation.ch where you introduce your company and explain how you are connected to the Swiss ecosystem. You will hear back within 14 days whether you've been accepted or not. If you have been accepted, you send the equivalent of at least CHF 380 to Bitcoin Association Switzerland's wallet (bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju) followed by an email to the two addresses mentioned stating your TX number. Once we confirm receipt of the funds, you can send us the logo to be added to the website.",
  },
  {
    question: "I PAID MY FEES IN LATE 2023. IS THAT STILL VALID?",
    answer: "Unfortunately, we have difficulties reconciling past payments, some of which happened on-chain and some of which happened via LN. To qualify as a member who can vote during the board election 2024, you must have paid the fee on-chain and in 2024.",
  },
  {
    question: "Who approves/rejects memberships?",
    answer: "The current board takes a vote on corporate applications and decides by a simple majority of those voting (a board member has 48 hours to cast its vote on Telegram). Individual memberships are decided using a 48hr veto process where any board member can oppose approval, but if no board member vetoes, an individual is accepted automatically.",
  },
  {
    question: "What is the timeline for the election?",
    answer: (
      <>
        A detailed timeline is available <Link href="/timeline" className="text-[#c75b4a] hover:underline">here</Link> on the BAS website.
      </>
    ),
  },
  {
    question: "How do I get to know the candidates better?",
    answer: (
      <>
        There is a time window of 30 days during which no new candidates are permitted that allow members to form an opinion on the candidates. To this end, we will organise a video conference (Zoom) with a panel discussion on the <Link href="/timeline" className="text-[#c75b4a] hover:underline">11th September</Link>. The audience will have the ability to ask questions as well.
      </>
    ),
  },
  {
    question: "What's the deal with those images on the board election 2024 section of the website?",
    answer: "They were all drawn with the aid of ChatGPT because why not. Some are better than others, but they're supposed to match each other in style.",
  },
  {
    question: "My question is not answered here, where can i ask it?",
    answer: "The BAS Chat on Telegram is certainly a good place to start, alternatively you can send an email to info@bitcoinassociation.ch. If your question may be of interest to others, this FAQ will be updated as well, so check back regularly for new answers and clarifications on this FAQ.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />

      {/* Hero Banner Image */}
      <div className="relative w-full h-[200px] md:h-[300px] mt-20">
        <Image
          src="/images/misc/faq.png"
          alt="FAQ"
          fill
          className="object-cover"
          priority
        />
      </div>

      <main className="py-12 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Sidebar Navigation */}
            <aside className="md:w-56 flex-shrink-0">
              <h2 className="text-[#8b7355] text-base font-light mb-4 font-serif italic">
                Board Election 2024
              </h2>
              <nav className="space-y-1">
                {boardElectionNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block text-xs tracking-wider transition-colors ${
                      item.active
                        ? "text-gray-900 font-semibold"
                        : "text-gray-500 hover:text-gray-900"
                    } ${item.indent ? "pl-2" : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              {/* Update Notice */}
              <div className="mb-8">
                <h3 className="text-base font-semibold text-gray-800 leading-relaxed">
                  Update 6.10.24: The new board has been elected at the extra ordinary general assembly in Zurich on the 5th October 2024. You can see the new board members{" "}
                  <Link href="/board-1" className="text-[#c75b4a] hover:underline">
                    here
                  </Link>
                  .
                </h3>
              </div>

              {/* Horizontal Rule */}
              <hr className="border-gray-300 mb-8" />

              {/* Introduction */}
              <h1 className="text-xl md:text-2xl font-normal text-gray-800 leading-relaxed mb-10">
                This document contains answers to the most frequently asked questions and is also available on the BAS website under &quot;Board Election 2024&quot;. The document may get updated as new questions come in, so make sure to check out this site regularly.
              </h1>

              {/* FAQ Items */}
              <div className="space-y-8">
                {faqItems.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-base font-semibold text-gray-800">
                      {item.question}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                    {item.update && (
                      <p className="text-sm font-semibold text-gray-800">
                        {item.update}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
