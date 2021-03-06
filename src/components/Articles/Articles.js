import Article from "./Article";

export default function Articles({ articles }) {
  articles = articles.sort(
    (a, b) => (a.details.sort ?? 999) - (b.details.sort ?? 999)
  );

  return (
    <>
      {articles.length === 0 && (
        <div className={"h-44 p-8 text-black"}>Such empty...</div>
      )}

      {articles.map((article, index) => (
        <div key={index}>
          <Article article={article} />
        </div>
      ))}
    </>
  );
}
