import { Input } from "@/components/ui/input";

import { CopyButton } from "./copy-button";

interface UrlCardProps {
  value: string | null;
}

export const UrlCard = ({ value }: UrlCardProps) => {
  return (
    <div className="rounded-xl bg-background p-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-x-10">
        <p className="font-semibold shrink-0">Server URL</p>
        <div className="flex-1 w-full">
          <div className="flex flex-row flex-nowrap items-stretch gap-2 w-full">
            <Input
              value={value || ""}
              disabled
              placeholder="Server URL"
              className="flex-1 min-w-0"
            />
            <CopyButton value={value || ""} />
          </div>
        </div>
      </div>
    </div>
  );
};
