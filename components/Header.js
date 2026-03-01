import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timezone) => {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(time);
  };

  return (
    <header style={styles.header}>
      
      <div style={styles.topRow}>
        <div style={styles.logo}>
          THE MODERN DISPATCH GLOBAL
        </div>

        <nav style={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>

      <div style={styles.infoBar}>

        <div style={styles.clockBox}>
          Nairobi {formatTime("Africa/Nairobi")}
        </div>

        <div style={styles.clockBox}>
          New York {formatTime("America/New_York")}
        </div>

        <div style={styles.clockBox}>
          Paris {formatTime("Europe/Paris")}
        </div>

        <div style={styles.clockBox}>
          Tokyo {formatTime("Asia/Tokyo")}
        </div>

      </div>

    </header>
  );
}

const styles = {

  header: {
    borderBottom: "1px solid #eee",
    padding: "20px",
    background: "#fff"
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000"
  },

  nav: {
    display: "flex",
    gap: "20px",
    color: "#FF6A00",
    fontWeight: "500"
  },

  infoBar: {
    display: "flex",
    gap: "15px",
    marginTop: "15px",
    flexWrap: "wrap"
  },

  clockBox: {
    background: "#000",
    color: "#FF6A00",
    padding: "8px 14px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "500"
  }

};
