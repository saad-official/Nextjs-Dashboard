import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangle,
  BadgeCheckIcon,
  ListChecksIcon,
  PieChart,
  PieChartIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cm from "@/public/cmp.jpg";
import david from "@/public/david.jpeg";
import shely from "@/public/sheely.jpeg";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import TeamDistributionChart from "./team-distribution-chart";

const teamLeaders = [
  {
    firstName: "Colin",
    lastName: "Murray",
    avatar: cm,
  },
  {
    firstName: "Vanir",
    lastName: "Pollay",
  },
  {
    firstName: "David",
    lastName: "refeay",
    avatar: david,
  },
  {
    firstName: "insaf",
    lastName: "Khanzada",
  },
  {
    firstName: "Waseem",
    lastName: "ismail",
  },

  {
    firstName: "yasmin",
    lastName: "chebib",
  },

  {
    firstName: "yasir",
    lastName: "pathan",
  },
  {
    firstName: "Shely",
    lastName: "leo",
    avatar: shely,
  },
  {
    firstName: "ishan",
    lastName: "sharma",
  },
];

const TeamStats = () => {
  const totalEmployee = 100;
  const employeePresent = 80;
  const percentageOfPresentEmployee = (employeePresent / totalEmployee) * 100;

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <UsersIcon />
                <div className="text-5xl font-bold">8</div>
              </div>

              <Button asChild size="xs">
                <Link href="/dashboard/teams">View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between">
              <span>Team Leads</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((teamLeader) => (
              <TooltipProvider
                key={`${teamLeader.firstName}${teamLeader.lastName}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!teamLeader.avatar && (
                        <Image src={teamLeader?.avatar} alt={"user-img"} />
                      )}
                      <AvatarFallback>
                        {teamLeader.firstName[0]}
                        {teamLeader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamLeader.firstName}
                    {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
          <CardFooter>
            {percentageOfPresentEmployee > 75 ? (
              <span className="text-green-700 text-xs flex gap-1 items-center">
                <BadgeCheckIcon />
                {percentageOfPresentEmployee}% of the Employee are present
              </span>
            ) : (
              <span className="text-red-700 text-xs flex gap-1 items-center">
                <AlertTriangle />
                Only {percentageOfPresentEmployee}% of the Employee are present
              </span>
            )}
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between">
              <span>Team distribution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>

      <Card className="my-4">
        <CardHeader>
          <CardTitle className="tetx-lg flex items-center gap-2 ">
            <ListChecksIcon />
            <span>Support ticker resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full pl-0"></CardContent>
      </Card>
    </>
  );
};

export default TeamStats;
