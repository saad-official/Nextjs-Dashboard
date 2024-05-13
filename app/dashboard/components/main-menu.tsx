import React from "react";
import MenuTitle from "./menu-title";
import MenuItems from "./menu-items";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import { cn } from "@/lib/utils";

const MainMenu = ({ className }: { className?: string }) => {
  return (
    <div className={cn("bg-muted overflow-auto p-4 flex flex-col", className)}>
      <div className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </div>
      <div className="py-4 flex-grow">
        <MenuItems href="/dashboard">My Dashboard</MenuItems>

        <MenuItems href="/dashboard/teams">Teams</MenuItems>

        <MenuItems href="/dashboard/employees">Employees</MenuItems>

        <MenuItems href="/dashboard/setting">Setting</MenuItems>

        <MenuItems href="/dashboard/account">Account</MenuItems>
      </div>

      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            Ip
          </AvatarFallback>
        </Avatar>

        <Link className="hover:underline" href="/">
          Logout
        </Link>

        <LightDarkToggle className="ml-auto" />
      </div>
    </div>
  );
};

export default MainMenu;
