// 動的にメタデータを生成する関数
//動的ページでは、表示される内容がデータに基づいて変化します。例えば、商品の詳細ページやブログの記事ページなどがこれに該当します
function generateMetadata(article) {
    return {
      title: article.title,
      description: article.excerpt,
      keywords: article.keywords.join(', ')
    };
  }
  
  function ArticlePage({ article }) {
    // メタデータを生成
    const metadata = generateMetadata(article);
  
    return (
      <div>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
        </Head>
        {/* 記事の内容 */}
        {/* ... */}
      </div>
    );
  }
  
  // データを取得するための関数
  export async function getServerSideProps(context) {
    // URLからIDを取得してデータを取得するなど
    const article = await fetchArticle(context.params.id);
    return { props: { article } };
  }
  