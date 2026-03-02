import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1 className="hero__title">
          自然のちからで、
          <br />
          健やかな毎日を。
        </h1>
        <p className="hero__sub">
          創業より受け継ぐ漢方の知恵を、現代のくらしにお届けします。
        </p>
        <Link href="/products" className="btn btn--primary">
          製品を見る
        </Link>
      </section>

      <section className="section">
        <h2 className="section__title">私たちの想い</h2>
        <p className="section__lead">
          漢方薬株式会社は、古来より伝わる漢方の知恵を現代に活かし、
        </p>
        <p className="section__lead">
          皆様の健やかな毎日をお支えすることを使命としています。
        </p>
        <div className="card-row">
          <div className="card">
            <h3 className="card__title">品質へのこだわり</h3>
            <p className="card__body">
              厳選された生薬と製造工程で、安心・安全な製品をお届けします。
            </p>
          </div>
          <div className="card">
            <h3 className="card__title">研究開発</h3>
            <p className="card__body">
              伝統と科学の融合により、新しい価値を創造し続けています。
            </p>
          </div>
          <div className="card">
            <h3 className="card__title">社会貢献</h3>
            <p className="card__body">
              健康啓発活動を通じて、地域社会に貢献しています。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
