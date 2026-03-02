export const metadata = {
  title: "沿革 | 漢方薬株式会社",
};

const timelineItems = [
  { year: "1980年", text: "創業。漢方薬の製造・販売を開始。" },
  { year: "1995年", text: "本社ビル竣工。研究施設を拡充。" },
  { year: "2010年", text: "ISO取得。品質管理体制を強化。" },
  { year: "2020年", text: "創立40周年。新ブランドを発表。" },
];

export default function HistoryPage() {
  return (
    <>
      <section className="page-title-band">
        <h1 className="page-title-band__title">沿革</h1>
        <p className="page-title-band__sub">History</p>
      </section>

      <section className="content-section">
        <h2 className="content-section__title">会社の歩み</h2>
        <div className="timeline">
          {timelineItems.map((item) => (
            <div key={item.year} className="timeline__item">
              <span className="timeline__year">{item.year}</span>
              <p className="timeline__text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
