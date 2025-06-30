"use client";

import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { CopyButton } from "./copy-button";

interface KeyCardProps {
  value: string | null;
}

export const KeyCard = ({ value }: KeyCardProps) => {
  const [show, setShow] = useState(false);
  const Icon = show ? Eye : EyeClosed;

  return (
    <div className="rounded-xl bg-background p-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-x-10">
        <p className="font-semibold shrink-0">Stream Key</p>
        <div className="flex-1 w-full">
          <div className="flex flex-row flex-nowrap items-stretch gap-2 w-full">
            <div className="relative w-full">
              <Input
                value={value || ""}
                type={show ? "text" : "password"}
                disabled
                placeholder="Stream Key"
                className="flex-1 min-w-0"
              />
              <button
                type="button"
                onClick={() => setShow((prev) => !prev)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none cursor-pointer"
              >
                <Icon className="h-4 w-4" />
              </button>
            </div>
            <CopyButton value={value || ""} />
          </div>
        </div>
      </div>
    </div>
  );
};
