import Link from "next/link";

export const metadata = {
  title: "サイトマップ | 漢方薬株式会社",
};

const sitemapLinks = [
  { href: "/", label: "サイトトップ" },
  { href: "/about", label: "会社概要" },
  { href: "/products", label: "製品一覧" },
  { href: "/history", label: "沿革" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/sitemap", label: "サイトマップ" },
];

export default function SitemapPage() {
  return (
    <>
      <section className="page-title-band">
        <h1 className="page-title-band__title">サイトマップ</h1>
        <p className="page-title-band__sub">Sitemap</p>
      </section>

      <section className="sitemap-section">
        <h2 className="sitemap-section__title">当サイトのページ一覧</h2>
        {sitemapLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="sitemap-section__link"
          >
            {link.label}
          </Link>
        ))}
      </section>
    </>
  );
}
