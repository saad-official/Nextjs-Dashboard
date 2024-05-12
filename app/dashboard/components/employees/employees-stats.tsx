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
  LaptopIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundX,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cm from "@/public/cmp.jpg";
import WorkLocationTrends from "./work-location-trends";

const EmployeesStats = () => {
  const totalEmployee = 100;
  const employeePresent = 80;
  const percentageOfPresentEmployee = (employeePresent / totalEmployee) * 100;
  return (
    <>
    <div className="grid lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Total Employeess</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <div className="text-5xl font-bold">{totalEmployee}</div>
            </div>

            <Button asChild size="xs">
              <Link href="/">View All</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Employeess Present</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            {percentageOfPresentEmployee > 75 ? (
              <UserCheck2Icon />
            ) : (
              <UserRoundX />
            )}
            <div className="text-5xl font-bold">{employeePresent}</div>
          </div>
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

      <Card className="border-pink-700 flex flex-col">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Employee of the Month</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 items-center">
          <Avatar>
            <Image src={cm} alt="User Profile" />
            <AvatarFallback>Tom</AvatarFallback>
          </Avatar>
          <span className="text-2xl">Tom Matt!</span>
        </CardContent>
        <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto ">
          <PartyPopperIcon className="text-pink-500 " />
          <span>Congratulations, Tom Matt </span>
        </CardFooter>
      </Card>
    </div>

    <Card className="my-4">
      <CardHeader>
        <CardTitle className="tetx-lg flex items-center gap-2 ">
          <LaptopIcon />
          <span>Employee work location trends</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full pl-0">
        <WorkLocationTrends  />
      </CardContent>
    </Card>
    </>
  );
};

export default EmployeesStats;
