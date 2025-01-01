import React from "react";
import { Bar } from "react-chartjs-2";

export default function NewsChart({ news }) {
  const data = {
    labels: [...new Set(news.map((item) => item.author))],
    datasets: [
      {
        label: "Articles by Author",
        data: news.reduce((acc, item) => {
          acc[item.author] = (acc[item.author] || 0) + 1;
          return acc;
        }, {}),
        backgroundColor: "#4285F4",
      },
    ],
  };

  return (
    <div>
      <h2>News Analytics</h2>
      <Bar data={data} />
    </div>
  );
}
