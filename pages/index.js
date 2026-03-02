import Layout from "../components/Layout";
import ArticleCard from "../components/ArticleCard";

export default function Home() {

  return (

    <Layout>

      {/* HERO SECTION */}

      <section style={{
        padding: "60px 20px",
        maxWidth: "1100px",
        margin: "0 auto"
      }}>

        <h1 style={{
          fontSize: "48px",
          fontWeight: "700"
        }}>
          Global intelligence. Human clarity.
        </h1>

        <p style={{
          fontSize: "18px",
          color: "#555",
          marginTop: "10px"
        }}>
          Technology. Business. Security. Culture.
        </p>

      </section>


      {/* ARTICLES GRID */}

      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px"
      }}>


        <ArticleCard
          title="Global Markets Respond to AI Expansion"
          category="Finance"
          date="March 2026"
          image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
        />

        <ArticleCard
          title="The Future of Cybersecurity in Africa"
          category="Security"
          date="March 2026"
          image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
        />

        <ArticleCard
          title="Why Nairobi Is Becoming a Tech Hub"
          category="Technology"
          date="March 2026"
          image="https://images.unsplash.com/photo-1518770660439-4636190af475"
        />


      </section>

    </Layout>

  );

}
