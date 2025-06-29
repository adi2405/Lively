"use client";

import { toast } from "sonner";
import { useTransition } from "react";

import { Switch } from "@/components/ui/switch";
import { updateStream } from "@/actions/stream";
import { Skeleton } from "@/components/ui/skeleton";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
  label: string;
  value: boolean;
  field: FieldTypes;
}

export const ToggleCard = ({
  label,
  value = false,
  field,
}: ToggleCardProps) => {
  const [isPending, startTransition] = useTransition();

  const onChange = () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() => toast.success("Chat settings updated!"))
        .catch(() => toast.error("Something went wrong!"));
    });
  };

  return (
    <div className="rounded-xl bg-background px-4 py-5 sm:p-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="font-semibold text-sm sm:text-base text-foreground break-words">
          {label}
        </p>
        <div className="space-y-2 sm:space-y-0">
          <Switch
            disabled={isPending}
            onCheckedChange={onChange}
            checked={value}
            className="cursor-pointer"
          >
            {value ? "On" : "Off"}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export const ToggleCardSkeleton = () => {
  return <Skeleton className="rounded-xl p-6 sm:p-10 w-full" />;
};
