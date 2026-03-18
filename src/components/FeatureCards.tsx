import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  titleLink: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const cards: FeatureCard[] = [
  {
    image: "/images/branding/bas-people.jpg",
    imageAlt: "New to Bitcoin? Start here",
    title: "New to Bitcoin?",
    titleLink: "/start-here",
    description: "Just getting started? Learn what Bitcoin is, why it matters, and how to take your first steps.",
    ctaText: "Start Here",
    ctaLink: "/start-here",
  },
  {
    image: "/images/events/antonopoulos-talk.jpg",
    imageAlt: "About Bitcoin Association Switzerland",
    title: "About",
    titleLink: "/about-1",
    description: "Find out about our organization and mission.",
    ctaText: "Learn More",
    ctaLink: "/about-1",
  },
  {
    image: "/images/branding/bas-gv-2018-bw.jpeg",
    imageAlt: "Join Bitcoin Association Switzerland",
    title: "Become a member",
    titleLink: "/meetups-events",
    description: "You can become a contributor to our cause, or participate yourself.",
    ctaText: "Find Out How",
    ctaLink: "/meetups-events",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-center text-center h-full">
              {/* Image */}
              <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Title */}
              <h2 className="text-lg md:text-xl font-serif text-gray-900 mb-2 uppercase tracking-wide">
                <Link
                  href={card.titleLink}
                  className="hover:text-gray-600 transition-colors duration-200"
                >
                  {card.title}
                </Link>
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-3 max-w-sm flex-1">
                {card.description}
              </p>

              {/* CTA Link using shadcn Button */}
              <Button asChild variant="link" className="text-gray-700 hover:text-gray-900 p-0 text-xs italic">
                <Link href={card.ctaLink}>
                  {card.ctaText} <span className="ml-1">&rarr;</span>
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
