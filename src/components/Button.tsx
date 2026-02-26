import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base = "inline-block text-sm font-medium rounded-full transition-all duration-300 text-center";
  const variants = {
    primary: "bg-gold text-white px-14 py-4 hover:bg-lightning hover:shadow-natural",
    outline:
      "border-2 border-dark text-dark px-8 py-3.5 hover:bg-dark hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
