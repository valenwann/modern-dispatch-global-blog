import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subscribe = () => {
    setMessage("Successfully subscribed.");
    setEmail("");
  };

  return (
    <div style={{
      background: "#111",
      padding: "20px",
      borderRadius: "12px",
      marginTop: "30px"
    }}>

      <h3 style={{ color: "white" }}>
        Join Modern Dispatch Global
      </h3>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          background: "#0A0A0A",
          border: "1px solid #333",
          color: "white"
        }}
      />

      <button
        onClick={subscribe}
        style={{
          background: "#FF6A00",
          border: "none",
          padding: "10px 20px",
          marginTop: "10px",
          color: "white",
          cursor: "pointer"
        }}
      >
        Subscribe
      </button>

      <div style={{ color: "#A1A1AA", marginTop: "10px" }}>
        {message}
      </div>

    </div>
  );
          }
