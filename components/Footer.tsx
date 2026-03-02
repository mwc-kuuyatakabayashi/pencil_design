import Link from "next/link";

const footerLinks = [
  { href: "/", label: "サイトトップ" },
  { href: "/about", label: "会社概要" },
  { href: "/products", label: "製品一覧" },
  { href: "/history", label: "沿革" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/sitemap", label: "サイトマップ" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__logo">漢方薬 株式会社</p>
      <nav className="footer__nav">
        {footerLinks.map(({ href, label }) => (
          <Link key={href} href={href} className="footer__link">
            {label}
          </Link>
        ))}
      </nav>
      <p className="footer__copy">© 2025 漢方薬株式会社 All rights reserved.</p>
    </footer>
  );
}
