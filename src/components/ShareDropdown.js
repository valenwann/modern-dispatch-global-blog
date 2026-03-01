import { useState } from "react";

export default function ShareDropdown({ url }) {

  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>

      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "#FF6A00",
          color: "white",
          border: "none",
          padding: "8px 12px",
          cursor: "pointer"
        }}
      >
        Share
      </button>

      {open && (
        <div style={{
          position: "absolute",
          background: "#111111",
          padding: "10px",
          marginTop: "5px"
        }}>

          <a href={`https://twitter.com/share?url=${url}`} target="_blank">
            Twitter
          </a><br/>

          <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank">
            Facebook
          </a><br/>

          <a href={`https://www.linkedin.com/shareArticle?url=${url}`} target="_blank">
            LinkedIn
          </a>

        </div>
      )}

    </div>
  );
          }
