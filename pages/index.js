import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>

      <div style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        marginTop: "30px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
      }}>

        <h2>Welcome to MDG</h2>

        <p>
          This platform delivers global insights on technology,
          business, travel, culture, and security in a clear,
          engaging and accessible way.
        </p>

      </div>

    </Layout>
  );
  }
