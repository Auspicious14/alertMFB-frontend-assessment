import { useRef } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "chart.js/auto";

export const ChartComponent = () => {
  const chartRef = useRef<Chart | null>(null);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Money In",
        data: [
          100000, 200000, 300000, 500000, 100000, 600000, 300000, 50000, 90000,
          200000, 500000, 100000,
        ],
        backgroundColor: "#2F80ED",
      },
    ],
  };

  return <Bar ref={chartRef as any} data={data} />;
};
