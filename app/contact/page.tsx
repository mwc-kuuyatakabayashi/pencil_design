export const metadata = {
  title: "お問い合わせ | 漢方薬株式会社",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-title-band">
        <h1 className="page-title-band__title">お問い合わせ</h1>
        <p className="page-title-band__sub">Contact</p>
      </section>

      <section className="form-section">
        <h2 className="form-section__title">お問い合わせフォーム</h2>
        <form action="#" method="post" className="form">
          <div className="form-group">
            <label htmlFor="name" className="form-group__label">
              お名前（必須）
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-group__input"
              required
              placeholder="お名前を入力"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-group__label">
              メールアドレス（必須）
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-group__input"
              required
              placeholder="メールアドレスを入力"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-group__label">
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              name="message"
              className="form-group__textarea"
              placeholder="お問い合わせ内容を入力"
            />
          </div>
          <button type="submit" className="btn btn--primary">
            送信する
          </button>
        </form>
      </section>
    </>
  );
}
