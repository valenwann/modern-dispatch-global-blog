import Head from "next/head";

export default function SEO({
  title = "Modern Dispatch Global",
  description = "Global news, finance, technology, and world insights.",
  image = "/news.jpg",
  url = "https://moderndispatchglobal.com"
}) {
  return (
    <Head>

      {/* Primary SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content="news, global news, finance, technology, world news, modern dispatch global" />
      <meta name="author" content="Modern Dispatch Global" />

      {/* Mobile SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter SEO */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Google indexing */}
      <meta name="robots" content="index, follow" />

      {/* Theme color */}
      <meta name="theme-color" content="#0A0A0A" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

    </Head>
  );
    }
