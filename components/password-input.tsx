"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { EyeIcon, EyeOff } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          {...props}
          ref={ref}
          className={cn("pr-10", className)}
        />

        <span className="absolute right-1 top-[7px] cursor-pointer select-none">
          {showPassword ? (
            <EyeIcon onClick={() => setShowPassword(false)} />
          ) : (
            <EyeOff onClick={() => setShowPassword(true)} />
          )}
        </span>
      </div>
    );
  }
);
PasswordInput.displayName = "passwordInput";

export { PasswordInput };
