import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getBitcoinPriceHistory = async (currency = "usd", interval) => {
  const url = `${BASE_URL}/coins/bitcoin/market_chart?vs_currency=${currency}&days=${interval}`;
  try {
    const response = await axios.get(url);
    const prices = response.data.prices;

    return prices;
  } catch (error) {
    console.error("Error fetching Bitcoin price history", error);
    return [];
  }
};
