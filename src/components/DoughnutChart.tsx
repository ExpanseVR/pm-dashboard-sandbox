'use client';

import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { DEFAULT_COLORS, DEFAULT_LABELS } from "@/lib/constants";

const BudgetLine = 3;
const OverBudget = 37;

interface DoughnutChartProps {
  title: string;
  ProjectAmount: number;
  ProjectedCost: number;
  UsedBudget: number;
}

export default function DoughnutChart({ title, ProjectAmount, ProjectedCost, UsedBudget }: DoughnutChartProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  // Calculate the chart values
  const Total = 360 - BudgetLine - OverBudget; // Total available space after Budget and Over Budget

  const Spent = Math.round(((UsedBudget / ProjectAmount) * Total)); // Spent portion
  const Profit = Math.round(((ProjectAmount - ProjectedCost) / ProjectAmount) * Total); // Profit portion
  const RemainingBudget = Total - Spent - Profit; // Whatever remains

  const chartData = [Spent, RemainingBudget, BudgetLine, Profit, OverBudget];

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: DEFAULT_LABELS,
            datasets: [
              {
                label: "Budget Breakdown",
                data: chartData,
                backgroundColor: DEFAULT_COLORS,
                hoverOffset: 4,
              },
            ],
          },
          options: {
            cutout: "80%", // Slim doughnut effect
            plugins: {
              legend: {
                display: false, // Disable legend for individual charts
              },
            },
          },
        });
      }
    }
  }, [chartData]);

  return (
    <div className="chart-container">
      <h2 className="text-lg font-semibold mb-4 text-white">{title}</h2>
      <canvas ref={chartRef} width={400} height={400}></canvas>
    </div>
  );
}
