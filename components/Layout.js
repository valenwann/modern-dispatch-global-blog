import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "30px 20px"
      }}>
        {children}
      </main>

      <footer style={{
        textAlign: "center",
        padding: "40px",
        marginTop: "60px",
        borderTop: "1px solid #eee"
      }}>
        © 2024c THE MODERN DISPATCH GLOBAL
      </footer>

    </>
  );
}
