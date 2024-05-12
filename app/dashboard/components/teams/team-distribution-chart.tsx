"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const TeamDistributionChart = () => {
  const data = [
    {
      name: "Delta",
      value: 55,
      color: "#84cc16",
    },
    {
      name: "Alpha",
      value: 34,
      color: "#3b82f6",
    },
    {
      name: "Canary",
      value: 11,
      color: "#f97316",
    },
  ];
  return (
    <ResponsiveContainer width={"100%"} height={150}>
      <PieChart>
        <Pie data={data} dataKey="value">
          {data.map((dataItem) => (
            <Cell key={dataItem.color} fill={dataItem.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TeamDistributionChart;
