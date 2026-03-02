export default function ArticleCard({
  title,
  category,
  date,
  image
}) {

  return (

    <div style={{
      borderRadius: "12px",
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      transition: "0.3s",
      cursor: "pointer"
    }}>

      <img
        src={image}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "20px" }}>

        <div style={{
          color: "#FF6A00",
          fontSize: "13px",
          fontWeight: "600"
        }}>
          {category}
        </div>

        <h2 style={{
          fontSize: "20px",
          margin: "10px 0"
        }}>
          {title}
        </h2>

        <div style={{
          fontSize: "14px",
          color: "#777"
        }}>
          {date}
        </div>

      </div>

    </div>

  );

        }
