export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>環境構築セミナーへようこそ 🎉</h1>
      <p>このページが表示されていれば、Next.jsのDev Container環境は正常に動いています。</p>
      <p>
        バックエンド（Spring Boot）は{" "}
        <a href="http://localhost:8080" target="_blank" rel="noreferrer">
          http://localhost:8080
        </a>{" "}
        で動作しています。
      </p>
    </main>
  );
}
