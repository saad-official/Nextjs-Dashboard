"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SupportTicketResolve = () => {
  const data = [
    {
      name: "Jan",
      delta: 40,
      alpha: 34,
      canary: 24,
    },
    {
      name: "Feb",
      delta: 20,
      alpha: 54,
      canary: 14,
    },
    {
      name: "Mar",
      delta: 56,
      alpha: 34,
      canary: 44,
    },
    {
      name: "Apr",
      delta: 20,
      alpha: 24,
      canary: 4,
    },
    {
      name: "May",
      delta: 32,
      alpha: 34,
      canary: 44,
    },
    {
      name: "Jun",
      delta: 80,
      alpha: 2,
      canary: 4,
    },
    {
      name: "Jul",
      delta: 4,
      alpha: 23,
      canary: 12,
    },
    {
      name: "Aug",
      delta: 45,
      alpha: 14,
      canary: 17,
    },
    {
      name: "Sep",
      delta: 21,
      alpha: 21,
      canary: 25,
    },
    {
      name: "Oct",
      delta: 28,
      alpha: 65,
      canary: 5,
    },
    {
      name: "Nov",
      delta: 32,
      alpha: 12,
      canary: 65,
    },
    {
      name: "Dec",
      delta: 14,
      alpha: 8,
      canary: 16,
    },
  ];

  return (
    <ResponsiveContainer height={350} width="100%">
      <LineChart data={data}>
        <Tooltip
          labelClassName="font-bold"
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <XAxis fontSize={12} dataKey="name" stroke="#888888" />
        <YAxis fontSize={12} stroke="#888888" />
        <CartesianGrid strokeDasharray="3" />
        <Line type="monotone" dataKey="delta" stroke="#84cc16" />
        <Line type="monotone" dataKey="alpha" stroke="#3b82f6" />
        <Line type="monotone" dataKey="canary" stroke="#f97316" />
        <Legend
          formatter={(value) => <span className="capitalize">{value}</span>}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SupportTicketResolve;
