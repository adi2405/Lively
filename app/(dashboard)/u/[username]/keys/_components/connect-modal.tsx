"use client";

import { useState, useTransition, useRef } from "react";
import { AlertTriangle } from "lucide-react";
import { toast } from "sonner";

import { createIngress } from "@/actions/ingress";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

enum IngressTypeEnum {
  RTMP_INPUT = 0,
  WHIP_INPUT = 1,
}

const RTMP = String(IngressTypeEnum.RTMP_INPUT);
const WHIP = String(IngressTypeEnum.WHIP_INPUT);

type IngressType = typeof RTMP | typeof WHIP;

export const ConnectModal = () => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [isPending, startTransition] = useTransition();
  const [ingressType, setIngressType] = useState<IngressType>(RTMP);

  const onSubmit = () => {
    startTransition(() => {
      createIngress(parseInt(ingressType))
        .then(() => {
          toast.success("Ingress Created!");
          closeRef?.current?.click();
        })
        .catch(() => toast.error("Something Went Wrong!"));
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"primary"} className="cursor-pointer">
          Generate Connection
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Connection</DialogTitle>
        </DialogHeader>
        <Select
          disabled={isPending}
          value={ingressType}
          onValueChange={(value) => setIngressType(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Ingress Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={RTMP}>RTMP</SelectItem>
            <SelectItem value={WHIP}>WHIP</SelectItem>
          </SelectContent>
        </Select>
        <Alert>
          <AlertTitle className="inline-flex items-center gap-x-2 text-yellow-300 mb-2 text-base">
            <AlertTriangle className="h-4 w-4 translate-y-[1px]" />
            Warning!
          </AlertTitle>
          <AlertDescription>
            This action will reset all active streams using the current
            connection!
          </AlertDescription>
        </Alert>
        <div className="flex justify-between">
          <DialogClose ref={closeRef} asChild>
            <Button variant={"ghost"} className="cursor-pointer">
              Cancel
            </Button>
          </DialogClose>
          <Button
            disabled={isPending}
            onClick={onSubmit}
            variant={"primary"}
            className="cursor-pointer"
          >
            Generate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
