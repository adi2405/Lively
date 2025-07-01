"use client";

import { format } from "date-fns";
import { stringToColor } from "@/lib/utils";
import { ReceivedChatMessage } from "@livekit/components-react";

interface ChatMessageProps {
  data: ReceivedChatMessage;
}

import React from "react";

export const ChatMessage = ({ data }: ChatMessageProps) => {
  const color = stringToColor(data.from?.name || "");

  return (
    <div className="flex gap-2 p-2 rounded-md hover:bg-white/5">
      <p className="text-base text-white/40">
        {format(data.timestamp, "HH:mm")}
      </p>
      <div className="flex flex-wrap items-baseline gap-1 grow">
        <p className="text-base font-semibold whitespace-nowrap">
          <span className="truncate" style={{ color: color }}>
            {data.from?.name}
          </span>
        </p>
        <p className="text-base break-all">{data.message}</p>
      </div>
    </div>
  );
};
