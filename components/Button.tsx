import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function Button({ href, onClick, children, variant = "primary", className = "" }: Props) {
  const base = "inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-brand-600 hover:bg-brand-500 text-white"
      : "border border-neutral-800 hover:border-neutral-700 text-neutral-200";

  if (href) {
    return <Link href={href} className={`${base} ${styles} ${className}`}>{children}</Link>;
  }
  return <button onClick={onClick} className={`${base} ${styles} ${className}`}>{children}</button>;
}
