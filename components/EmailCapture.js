```javascript
import { useState } from "react";

export default function EmailCapture() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Subscribed successfully.");
    setEmail("");
  }

  return (
    <div style={{
      background: "#111111",
      padding: "24px",
      borderRadius: "12px",
      marginTop: "40px"
    }}>

      <h3 style={{ color: "#FF6A00" }}>
        Subscribe to Modern Dispatch Global
      </h3>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{
            padding: "12px",
            width: "100%",
            marginTop: "10px",
            background: "#000",
            color: "#fff",
            border: "1px solid #333",
            borderRadius: "6px"
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "10px",
            background: "#FF6A00",
            color: "#fff",
            padding: "12px",
            border: "none",
            borderRadius: "6px",
            width: "100%",
            cursor: "pointer"
          }}
        >
          Subscribe
        </button>

      </form>

      {message && (
        <p style={{ color: "#00ff99", marginTop: "10px" }}>
          {message}
        </p>
      )}

    </div>
  );
}
```

