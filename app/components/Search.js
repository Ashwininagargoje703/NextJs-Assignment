import React from "react";

const apiLists = {
  Etherium:
    "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=365&interval=daily",
  Dogecoint:
    "https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=365&interval=daily",
  Solana:
    "https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=365&interval=daily",
};

export default function Search() {
  const handleDropdownChange = (event) => {
    value = event.target.value;
  };

  return (
    <div>
      <select id="dropdown" name="link" onChange={handleDropdownChange}>
        {Object.keys(apiLists).map((cryptoName) => {
          return (
            <option key={apiLists[cryptoName]} value={apiLists[cryptoName]}>
              {cryptoName}
            </option>
          );
        })}
      </select>
    </div>
  );
}
