import Link from "next/link";
import Charts from "../components/Charts";
import "../globals.css";

async function getPrices(item) {
  let res = await fetch(
    "https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=365&interval=daily",
    { cache: "no-store" }
  );
  let data = await res.json();
  return data.prices;
}

export default async function page() {
  let prices = await getPrices();
  return (
    <main>
      <nav>
        <Link href="/">Etherium</Link>
        <Link href="/dogecoin">Dogecoin</Link>
        <Link href="/solona">Solona</Link>
      </nav>
      <Charts prices={prices} />
    </main>
  );
}
