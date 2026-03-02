 ```javascript
import Layout from "../components/Layout";
import ArticleCard from "../components/ArticleCard";
import EmailCapture from "../components/EmailCapture";
import SEO from "../components/SEO";

export default function Home() {

  return (
    <Layout>

      <SEO
        title="Modern Dispatch Global"
        description="Global news, technology, security, finance and intelligence."
        image="/news.jpg"
      />

      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px"
      }}>

        <ArticleCard
          title="Global Markets Surge in 2026"
          category="Finance"
          date="March 2026"
          image="/market.jpg"
        />

        <ArticleCard
          title="Cybersecurity Threats Increasing Worldwide"
          category="Security"
          date="March 2026"
          image="/cyber.jpg"
        />

        <EmailCapture />

      </div>

    </Layout>
  );
}
```
