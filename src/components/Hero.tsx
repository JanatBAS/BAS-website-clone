import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh]">
      {/* Background Image */}
      <Image
        src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w"
        alt="Mountain sunrise landscape"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
        <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-[0.15em] md:tracking-[0.2em] max-w-4xl leading-relaxed md:leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          A Bright New Dawn For Digital Transfers, Sound Money And Personal Freedom
        </h1>
      </div>
    </section>
  );
}
