export default function ArticleCard({ title, image, category, date }) {
  return (
    <div style={{
      background: "#111111",
      borderRadius: "12px",
      overflow: "hidden",
      transition: "0.3s",
      cursor: "pointer"
    }}>

      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "16px" }}>

        <span style={{
          color: "#F4B400",
          fontSize: "12px"
        }}>
          {category}
        </span>

        <h2 style={{
          color: "white",
          fontSize: "18px",
          margin: "6px 0"
        }}>
          {title}
        </h2>

        <p style={{
          color: "#A1A1AA",
          fontSize: "13px"
        }}>
          {date}
        </p>

      </div>
    </div>
  );
          }
