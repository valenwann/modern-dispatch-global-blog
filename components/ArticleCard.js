```javascript
export default function ArticleCard({ title, category, date, image }) {
  return (
    <article style={{
      background: "#111111",
      borderRadius: "12px",
      overflow: "hidden",
      marginBottom: "24px",
      border: "1px solid #222"
    }}>
      
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "16px" }}>
        
        <div style={{
          color: "#FF6A00",
          fontSize: "12px",
          marginBottom: "6px"
        }}>
          {category}
        </div>

        <h2 style={{
          color: "#fff",
          fontSize: "20px",
          margin: "0 0 8px 0"
        }}>
          {title}
        </h2>

        <div style={{
          color: "#888",
          fontSize: "13px"
        }}>
          {date}
        </div>

      </div>

    </article>
  );
}
```
