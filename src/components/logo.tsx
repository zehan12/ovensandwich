import Image from "next/image";
import { FC } from "react";

export const Logo: FC<{ className?: string }> = ({ className }) => {
  return (
    <Image
      src="/favicon.ico"
      height={50}
      width={50}
      alt="Ovensandwich logo"
      className={`rounded-full animate-bounce ${className}`}
    />
  );
};
