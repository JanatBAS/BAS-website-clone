import React from "react";

interface PageHeroProps {
  title: string;
  description: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "gradient" | "dark";
}

export default function PageHero({
  title,
  description,
  icon,
  variant = "gradient",
}: PageHeroProps) {
  const bg =
    variant === "gradient"
      ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      : "bg-[#1a1a1a]";
  const descriptionColor = variant === "gradient" ? "text-gray-300" : "text-gray-400";

  return (
    <section className={`${bg} pt-32 pb-16 md:pt-40 md:pb-20`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {icon && (
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              {icon}
            </div>
          </div>
        )}
        <h1 className="text-3xl md:text-4xl font-light text-white mb-4">{title}</h1>
        <p className={`${descriptionColor} text-lg max-w-2xl mx-auto`}>{description}</p>
      </div>
    </section>
  );
}
