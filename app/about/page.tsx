export const metadata = {
  title: "会社概要 | 漢方薬株式会社",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-title-band">
        <h1 className="page-title-band__title">会社概要</h1>
        <p className="page-title-band__sub">Company</p>
      </section>

      <section className="content-section">
        <h2 className="content-section__title">私たちについて</h2>
        <p className="section__lead">
          漢方薬株式会社は、創業より漢方薬の製造・販売を行い、
        </p>
        <p className="section__lead">
          お客様の健康と安心に寄与することを目指しています。
        </p>
        <div className="info-table">
          <div className="info-table__row">
            <span className="info-table__label">会社名</span>
            <span className="info-table__value">漢方薬株式会社</span>
          </div>
          <div className="info-table__row">
            <span className="info-table__label">所在地</span>
            <span className="info-table__value">
              〒100-0001 東京都千代田区〇〇1-2-3
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
