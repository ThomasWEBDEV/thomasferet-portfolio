import Link from "next/link";
import { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
};

type LinkProps = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonProps = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

type Props = LinkProps | ButtonProps;

export default function Button(props: Props) {
  const { children, className = "", variant = "primary" } = props;

  const base =
    "inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-brand-600 hover:bg-brand-500 text-white"
      : "border border-neutral-700 hover:border-neutral-600 text-neutral-100 bg-neutral-900/30";

  if ("href" in props) {
    // Lien Next.js typé
    return (
      <Link href={props.href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  // Bouton natif typé
  const { onClick, type = "button" } = props;
  return (
    <button type={type} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
