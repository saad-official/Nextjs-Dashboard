"use client";
import { DrawerContext } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

type Props = {
  children: React.ReactNode;
  href: string;
};

const MenuItems = ({ children, href }: Props) => {
  const pathname = usePathname();
  const { onClose } = useContext(DrawerContext);
  const isActive = pathname === href;

  return (
    <Link
      className={cn(
        "block hover:bg-white dark:hover:bg-zinc-700 rounded-md p-2 text-muted-foreground hover:text-foreground",
        isActive &&
          "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-foreground dark:text-primary-foreground text-primary-foreground"
      )}
      href={href}
      onClick={onClose}
    >
      {children}
    </Link>
  );
};

export default MenuItems;
