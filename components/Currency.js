```javascript
import { useEffect, useState } from "react";

export default function Currency() {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=USD&symbols=KES,EUR,GBP")
      .then(res => res.json())
      .then(data => setRates(data.rates));
  }, []);

  if (!rates) return null;

  return (
    <div style={{
      display: "flex",
      gap: "20px",
      fontSize: "14px",
      color: "#A1A1AA"
    }}>
      <span>USD/KES: {rates.KES.toFixed(2)}</span>
      <span>USD/EUR: {rates.EUR.toFixed(2)}</span>
      <span>USD/GBP: {rates.GBP.toFixed(2)}</span>
    </div>
  );
}
```
