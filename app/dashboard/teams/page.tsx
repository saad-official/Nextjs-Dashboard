import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { setTimeout } from "timers/promises";
import { columns } from "./columns";

const TeamPage = async () => {
  await setTimeout(5000);

  const employees = [
    {
      id: 1,
      firstName: "collin",
      lastName: "murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "",
    },
    {
      id: 1,
      firstName: "collin",
      lastName: "murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/cmp.jpg",
    },
    {
      id: 1,
      firstName: "collin",
      lastName: "murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/cmp.jpg",
    },
    {
      id: 1,
      firstName: "collin",
      lastName: "murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/sheely.jpeg",
    },

    {
      id: 1,
      firstName: "collin",
      lastName: "murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/david.jpeg",
    },

    {
      id: 1,
      firstName: "collin",
      lastName: "murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "",
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Teams</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable data={employees} columns={columns} />
      </CardContent>
    </Card>
  );
};

export default TeamPage;
