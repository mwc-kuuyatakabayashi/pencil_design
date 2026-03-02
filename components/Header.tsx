"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "サイトトップ" },
  { href: "/about", label: "会社概要" },
  { href: "/products", label: "製品一覧" },
  { href: "/history", label: "沿革" },
  { href: "/contact", label: "お問い合わせ" },
] as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="header__logo">
        漢方薬 株式会社
      </Link>
      <nav className="nav">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nav__link ${pathname === href ? "nav__link--current" : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
