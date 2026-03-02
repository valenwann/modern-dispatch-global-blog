```javascript
export default function ArticleCard({ title, image, category, date }) {
  return (
    <div style={{
      background: "#111",
      borderRadius: "12px",
      overflow: "hidden",
      marginBottom: "20px",
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

      <div style={{ padding: "15px" }}>

        <div style={{
          color: "#FF6A00",
          fontSize: "12px",
          marginBottom: "5px"
        }}>
          {category}
        </div>

        <h2 style={{
          color: "white",
          fontSize: "18px",
          margin: "0 0 5px 0"
        }}>
          {title}
        </h2>

        <div style={{
          color: "#A1A1AA",
          fontSize: "12px"
        }}>
          {date}
        </div>

      </div>
    </div>
  );
}
```
