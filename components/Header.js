import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      borderBottom: "1px solid #eee",
      padding: "20px 0",
      background: "#ffffff",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>

        <div style={{
          fontSize: "22px",
          fontWeight: "700",
          letterSpacing: "-0.5px"
        }}>
          THE MODERN DISPATCH GLOBAL
        </div>

        <nav style={{ display: "flex", gap: "20px" }}>

          <Link href="/" style={linkStyle}>Home</Link>

          <Link href="/portfolio" style={linkStyle}>Portfolio</Link>

          <Link href="/about" style={linkStyle}>About</Link>

          <Link href="/privacy" style={linkStyle}>Privacy</Link>

        </nav>

      </div>
    </header>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#111",
  fontWeight: "500"
};
