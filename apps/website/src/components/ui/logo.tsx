import React from "react";
import { cn } from "@/utils/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("text-white font-bold text-2xl", className)}>
      aloshy.🅰🅸
    </div>
  );
} 