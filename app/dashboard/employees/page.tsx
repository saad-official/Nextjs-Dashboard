import React from "react";
import { setTimeout } from "timers/promises";

const EmployeesPage = async () => {
  await setTimeout(5000);

  const employees = [
    {
      id: 1,
      firstName: "collin",
      lastName: "murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/images/cm.jpg",
    },
    {
      id: 1,
      firstName: "collin",
      lastName: "murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/images/cm.jpg",
    },
    {
      id: 1,
      firstName: "collin",
      lastName: "murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/images/cm.jpg",
    },
    {
      id: 1,
      firstName: "collin",
      lastName: "murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/images/cm.jpg",
    },

    {
      id: 1,
      firstName: "collin",
      lastName: "murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/images/cm.jpg",
    },

    {
      id: 1,
      firstName: "collin",
      lastName: "murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/images/cm.jpg",
    },
  ];
  return <div>EmployeesPage</div>;
};

export default EmployeesPage;
