export default function Home() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "32px" }}>
        THE MODERN DISPATCH GLOBAL
      </h1>

      <p style={{ marginTop: "10px", color: "#555" }}>
        Global intelligence. Human clarity.
      </p>

      <article
        style={{
          marginTop: "40px",
          padding: "20px",
          border: "1px solid #eee",
          borderRadius: "8px",
        }}
      >
        <h2>Welcome to MDG</h2>

        <p>
          This platform delivers global insights on technology,
          business, travel, culture, and security in a clear,
          engaging and accessible way.
        </p>
      </article>
    </main>
  );
          }
