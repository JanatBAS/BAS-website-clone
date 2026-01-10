import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[50vh] md:h-[55vh] lg:h-[60vh]">
      {/* Background Image */}
      <Image
        src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w"
        alt="Mountain sunrise landscape"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay to match original screenshot */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Text Content - positioned in upper portion */}
      <div className="absolute inset-x-0 top-[35%] flex justify-center px-4 sm:px-8">
        <p className="text-white text-center text-[10px] sm:text-[11px] md:text-xs font-normal uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
          A Bright New Dawn For Digital Transfers, Sound Money And Personal Freedom
        </p>
      </div>
    </section>
  );
}
