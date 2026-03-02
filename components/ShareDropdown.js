import { useState } from "react";

export default function ShareDropdown() {

  const [open, setOpen] = useState(false);

  const url = typeof window !== "undefined"
    ? window.location.href
    : "";

  return (
    <div style={{ position: "relative" }}>

      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "#111",
          border: "1px solid #333",
          color: "white",
          padding: "10px 15px",
          cursor: "pointer"
        }}
      >
        Share
      </button>

      {open && (
        <div style={{
          position: "absolute",
          background: "white",
          color: "black",
          marginTop: "5px",
          borderRadius: "6px",
          overflow: "hidden"
        }}>

          <div style={{ padding: "10px", cursor: "pointer" }}
            onClick={() => navigator.clipboard.writeText(url)}>
            Copy Link
          </div>

          <a href={`https://facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank">
            <div style={{ padding: "10px" }}>Facebook</div>
          </a>

          <a href={`https://twitter.com/intent/tweet?url=${url}`}
            target="_blank">
            <div style={{ padding: "10px" }}>X</div>
          </a>

        </div>
      )}

    </div>
  );
          }
