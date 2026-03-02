```javascript
import Clock from "../components/Clock";
import Currency from "../components/Currency";
import ArticleCard from "../components/ArticleCard";
import EmailCapture from "../components/EmailCapture";
import ShareDropdown from "../components/ShareDropdown";

export default function Home() {

  return (

    <div style={{
      maxWidth: "800px",
      margin: "auto",
      padding: "20px"
    }}>

      <Clock />

      <Currency />

      <ArticleCard
        title="Global Markets Surge in 2026"
        category="Finance"
        date="March 2, 2026"
        image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
      />

      <ShareDropdown />

      <EmailCapture />

    </div>

  );
}
```
