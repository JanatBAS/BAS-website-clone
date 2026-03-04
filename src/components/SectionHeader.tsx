interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeader({ children, className }: SectionHeaderProps) {
  return (
    <h2
      className={`text-[#8b7355] text-lg font-light font-serif italic ${
        className ?? "mb-4"
      }`}
    >
      {children}
    </h2>
  );
}
