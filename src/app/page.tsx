import DoughnutChart from "@/components/DoughnutChart";
import { DEFAULT_COLORS, DEFAULT_LABELS } from "@/lib/constants";
import { chartData } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-black">
      <header className="text-2xl font-bold text-white">PROJECTS HEALTH</header>
      <main className="flex justify-center gap-8">
        {chartData.map((data, index) => (
          <DoughnutChart
            key={index}
            title={data.title}
            ProjectAmount={data.ProjectAmount}
            ProjectedCost={data.ProjectedCost}
            UsedBudget={data.UsedBudget}
          />
        ))}
      </main>
      <footer className="mt-8 text-white">
        <div className="flex justify-center gap-4">
          {DEFAULT_LABELS.map((label, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundColor: DEFAULT_COLORS[index],
                }}
              ></div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
