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
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg",
    imageAlt: "About Bitcoin Association Switzerland",
    title: "About",
    titleLink: "/about-1",
    description: "Find out about our organization and mission.",
    ctaText: "Learn More",
    ctaLink: "/about-1",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg",
    imageAlt: "Join Bitcoin Association Switzerland",
    title: "Join US",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-center text-center">
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
              <p className="text-sm text-gray-600 leading-relaxed mb-3 max-w-sm">
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
