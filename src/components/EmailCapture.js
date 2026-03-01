import { useState } from "react";

export default function EmailCapture() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subscribe = () => {

    if (!email.includes("@")) {
      setMessage("Enter valid email");
      return;
    }

    setMessage("Subscribed successfully");
    setEmail("");
  };

  return (
    <div style={{
      background: "#111111",
      padding: "30px",
      borderRadius: "12px",
      textAlign: "center"
    }}>

      <h2 style={{ color: "white" }}>
        Join Premium Newsletter
      </h2>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        style={{
          padding: "12px",
          width: "60%",
          background: "#0A0A0A",
          border: "1px solid #FF6A00",
          color: "white",
          marginTop: "10px"
        }}
      />

      <button
        onClick={subscribe}
        style={{
          background: "#FF6A00",
          border: "none",
          padding: "12px 20px",
          marginLeft: "10px",
          color: "white",
          cursor: "pointer"
        }}
      >
        Subscribe
      </button>

      <p style={{ color: "#F4B400" }}>{message}</p>

    </div>
  );
  }
