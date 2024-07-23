// Function to dynamically generate metadata
// In dynamic pages, the displayed content changes based on the data.
// Examples include product detail pages and blog article pages.

/**
 * Generates metadata for an article.
 *
 * @param {object} article - The article object containing title, excerpt, and keywords.
 * @returns {object} An object containing the metadata (title, description, keywords).
 */
function generateMetadata(article) {
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords.join(', '),
  };
}

/**
 * Renders the article page with dynamically generated metadata.
 *
 * @param {object} props - The component props containing the article data.
 * @returns {JSX.Element} The article page component.
 */
function ArticlePage({ article }) {
  // Generate metadata
  const metadata = generateMetadata(article);

  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      {/* Article content */}
      {/* ... */}
    </div>
  );
}

/**
 * Fetches article data from an external source based on the URL ID.
 *
 * @param {object} context - The context object containing the request parameters.
 * @returns {object} An object containing the article data as props.
 */
export async function getServerSideProps(context) {
  // Fetch article data based on the ID from the URL
  const article = await fetchArticle(context.params.id);
  return { props: { article } };
}
  
