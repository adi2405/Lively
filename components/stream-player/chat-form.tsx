"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

interface ChatFormProps {
  onSubmit: () => void;
  value: string;
  onChange: (value: string) => void;
  isHidden: boolean;
  isChatFollowersOnly: boolean;
  isDelayed: boolean;
  isFollowing: boolean;
}

export const ChatForm = ({
  onSubmit,
  value,
  onChange,
  isHidden,
  isChatFollowersOnly,
  isDelayed,
  isFollowing,
}: ChatFormProps) => {
  return (
    <form
      onSubmit={() => {}}
      className="flex flex-col items-center gap-y-4 p-3"
    >
      <div className="w-full">
        <Input
          onChange={() => {}}
          value={value}
          disabled={false}
          placeholder="Send a message"
          className={cn("border-white/10")}
        />
      </div>
      <div className="ml-auto">
        <Button
          type="submit"
          variant={"primary"}
          disabled={false}
          className="cursor-pointer"
        >
          Chat
        </Button>
      </div>
    </form>
  );
};
