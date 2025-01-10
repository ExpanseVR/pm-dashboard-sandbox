'use client';

import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function Home() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Spent", "Remaining Budget", "Budget", "Profit", "Budget"],
            datasets: [
              {
                label: "Budget",
                data: [240, 60, 3, 40, 17],
                backgroundColor: [
                  "rgb(75, 192, 75)", // Green
                  "rgb(221, 221, 221)", // Light Grey
                  "rgb(81, 81, 81)", // Dark Grey
                  "rgb(255, 205, 86)", // Yellow
                  "rgb(255, 99, 132)", // Red
                ],
                hoverOffset: 4,
              },
            ],
          },
          options: {
            cutout: "80%", // Slim doughnut effect
          },
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <header className="text-2xl font-bold">Parker Point Induction</header>
      <main className="flex flex-col items-center">
        <canvas ref={chartRef} width={400} height={400}></canvas>
      </main>
    </div>
  );
}
