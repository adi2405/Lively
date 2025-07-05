import Link from "next/link";
import { User } from "@prisma/client";
import { formatDistanceToNow } from "date-fns";

import { Skeleton } from "@/components/ui/skeleton";
import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail";
import { VerifiedMark } from "@/components/verified-mark";

interface ResultCardProps {
  data: {
    id: string;
    name: string;
    thumbnailUrl: string | null;
    isLive: boolean;
    updatedAt: Date;
    user: User;
  };
}

export const ResultCard = ({ data }: ResultCardProps) => {
  return (
    <Link href={`/${data.user.username}`}>
      <div className="h-full w-full space-y-2 sm:space-y-4">
        <Thumbnail
          src={data.thumbnailUrl}
          fallback={data.user.imageUrl}
          isLive={data.isLive}
          username={data.user.username}
        />
        <div className="flex items-center gap-x-3">
          <div className="flex flex-col text-sm overflow-hidden">
            <div className="flex items-center gap-x-2">
              <p className="truncate font-bold text-lg cursor-pointer hover:text-purple-500">
                {data.user.username}
              </p>
              <VerifiedMark />
            </div>
            <p className="text-sm text-muted-foreground">{data.name}</p>
            <p className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(data.updatedAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ResultCardSkeleton = () => {
  return (
    <div className="h-full w-full space-y-4">
      <ThumbnailSkeleton />
      <div className="flex gap-x-3">
        <div className="flex flex-col gap-y-1 w-full">
          <Skeleton className="h-4 w-3/4 sm:w-32" />
          <Skeleton className="h-3 w-1/2 sm:w-24" />
          <Skeleton className="h-3 w-1/4 sm:w-12" />
        </div>
      </div>
    </div>
  );
};
