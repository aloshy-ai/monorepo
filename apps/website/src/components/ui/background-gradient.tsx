import React from "react";
import { cn } from "@/utils/cn";

export function BackgroundGradient({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500",
          "bg-gradient-to-r from-violet-600/50 via-primary/50 to-orange-600/50 animate-gradient-x",
          className
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
} 