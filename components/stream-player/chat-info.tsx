import { useMemo } from "react";
import { Info } from "lucide-react";

import { Hint } from "../hint";

interface ChatInfoProps {
  isDelayed: boolean;
  isFollowesOnly: boolean;
}

export const ChatInfo = ({ isDelayed, isFollowesOnly }: ChatInfoProps) => {
  const hint = useMemo(() => {
    if (isFollowesOnly && !isDelayed) {
      return "Only followers can chat";
    }

    if (isDelayed && !isFollowesOnly) {
      return "Messages are delayed by 3 seconds";
    }

    if (isDelayed && isFollowesOnly) {
      return "Only followers can chat messages are delayed by 3 seconds";
    }

    return "";
  }, [isDelayed, isFollowesOnly]);

  const label = useMemo(() => {
    if (isFollowesOnly && !isDelayed) {
      return "Followers only";
    }

    if (isDelayed && !isFollowesOnly) {
      return "Slow mode";
    }

    if (isDelayed && isFollowesOnly) {
      return "Followers only and slow mode";
    }

    return "";
  }, [isDelayed, isFollowesOnly]);

  if (!isDelayed && !isFollowesOnly) {
    return null;
  }

  return (
    <div className="p-2 text-muted-foreground bg-white/5 border border-white/10 w-full rounded-t-md flex items-center gap-x-2">
      <Hint label={hint}>
        <Info className="h-4 w-4" />
      </Hint>
      <p className="text-sm">{label}</p>
    </div>
  );
};
