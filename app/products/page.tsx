export const metadata = {
  title: "製品一覧 | 漢方薬株式会社",
};

const products = [
  { name: "葛根湯", desc: "かぜのひきはじめに。" },
  { name: "八味地黄丸", desc: "疲れや冷えに。" },
  { name: "加味逍遙散", desc: "女性の不調に。" },
];

export default function ProductsPage() {
  return (
    <>
      <section className="page-title-band">
        <h1 className="page-title-band__title">製品一覧</h1>
        <p className="page-title-band__sub">Products</p>
      </section>

      <section className="products-section">
        <h2 className="content-section__title">主な製品</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              <h3 className="product-card__name">{product.name}</h3>
              <p className="product-card__desc">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
