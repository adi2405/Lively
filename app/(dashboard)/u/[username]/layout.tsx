import { redirect } from "next/navigation";

import { getSelfByUsername } from "@/lib/auth-service";

import { Navbar } from "./_components/navbar";

interface CreatorLayoutProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
};

const CreatorLayout = async ({
  params,
  children,
} : CreatorLayoutProps) => {
  const { username } = await params;
  const self = await getSelfByUsername(username);

  if (!self) {
    redirect("/");
  }

  return (
    <>
    <Navbar />
      <div className="flex h-full pt-20">{children}</div>
    </>
  );
};

export default CreatorLayout;