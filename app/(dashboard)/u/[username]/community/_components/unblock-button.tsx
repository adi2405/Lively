"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { onUnblock } from "@/actions/block";
import { Button } from "@/components/ui/button";

interface UnblockButtonProps {
  userId: string;
}

export const UnblockButton = ({ userId }: UnblockButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((result) => toast.success(`${result.blocked.username} unblocked`))
        .catch(() => toast.error("Something went wrong!"));
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={onClick}
      variant={"link"}
      className="text-purple-500 w-full cursor-pointer"
    >
      Unblock
    </Button>
  );
};
