import Image from "next/image";

export const VerifiedMark = () => {
  return (
    <div className="flex items-center justify-center h-5 w-5">
      <Image src={"/verified.png"} alt="verified" height={24} width={24} />
    </div>
  );
};
