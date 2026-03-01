import { useCurrency } from "./CurrencyContext";

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      style={{
        background: "#111111",
        color: "#FF6A00",
        border: "1px solid #FF6A00",
        padding: "6px",
        borderRadius: "6px"
      }}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="KES">KES</option>
    </select>
  );
}
