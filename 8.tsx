//静的メタデータ設定
//静的ページ:会社の「About Us」ページや「Contact」ページなどがこれに該当します。これらのページでは、訪れるすべてのユーザーに対して同じ内容が表示されます。
const metadata = {
    title: "About Us - My Company",
    description: "Learn more about My Company.",
    keywords: "company, professional, services"
  };
  
  function AboutPage() {
    return (
      <div>
        {/* メタデータを利用してヘッドタグの中に情報を設定する */}
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
        </Head>
        {/* ページの内容 */}
        {/* ... */}
      </div>
    );
  }
  