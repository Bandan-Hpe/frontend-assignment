import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { getBitcoinPriceHistory } from "./../api";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const PriceChart = ({ interval }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Bitcoin Price (USD)",
        data: [],
        borderColor: "rgb(75, 64, 238)",
        backgroundColor: "rgb(75, 64, 238)",
        borderWidth: 1,
        pointRadius: 2, //
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBitcoinPriceHistory("usd", interval);

        if (Array.isArray(data) && data.length > 0) {
          const labels = data.map((item) =>
            new Date(item[0]).toLocaleDateString()
          );
          const prices = data.map((item) => item[1]);
          console.log(prices);

          setChartData({
            labels,
            datasets: [
              {
                label: "Bitcoin Price (USD)",
                data: prices,
                borderColor: "rgb(75, 64, 238)",
                backgroundColor: "rgb(75, 64, 238)",
                borderWidth: 1,
                pointRadius: 2,
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching Bitcoin price history:", error);
      }
    };

    fetchData();
  }, [interval]);

  return (
    <div className="p-4 w-full">
      <Line data={chartData} />
    </div>
  );
};

export default PriceChart;
