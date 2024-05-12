"use client";
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    office: 30,
    wfh: 70,
  },
  {
    name: "Feb",
    office: 90,
    wfh: 120,
  },
  {
    name: "Mar",
    office: 100,
    wfh: 30,
  },
  {
    name: "Apr",
    office: 50,
    wfh: 120,
  },
  {
    name: "May",
    office: 80,
    wfh: 20,
  },
  {
    name: "Jun",
    office: 48,
    wfh: 135,
  },
  {
    name: "Jul",
    office: 120,
    wfh: 40,
  },
  {
    name: "Aug",
    office: 130,
    wfh: 30,
  },
  {
    name: "Sep",
    office: 97,
    wfh: 42,
  },
  {
    name: "Oct",
    office: 78,
    wfh: 80,
  },
  {
    name: "Nov",
    office: 32,
    wfh: 140,
  },
  {
    name: "Dec",
    office: 110,
    wfh: 20,
  },
];

const WorkLocationTrends = () => {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarChart
        data={data}
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
      >
        <XAxis dataKey={"name"} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip
          separator=": "
          formatter={(value, name) => {
            if (name === "wfh") {
              return [value, "work from home"];
            } else if (name === "office") {
              return [value, "work from office"];
            }
          }}
          labelClassName="font-bold"
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <Legend
          iconType="circle"
          formatter={(value) => {
            if (value === "wfh") {
              return <div className="text-sm">Work from Home</div>;
            } else if (value === "office")
              return <div className="text-sm">Work from Office</div>;
          }}
        />
        <Bar dataKey="office" stackId="1" fill="#ec4899" />
        <Bar dataKey="wfh" stackId="1" fill="#6b7280" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WorkLocationTrends;
