import React, { createContext, useState, useContext } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");

  const symbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    KES: "KSh"
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        symbol: symbols[currency],
        setCurrency
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
