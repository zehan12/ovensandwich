import { LogoProps } from "@/interfaces";
import Image from "next/image";
import { FC } from "react";

export const Logo: FC<LogoProps> = ({
  className,
  isAnimated = false,
  height = 50,
  width = 50,
}) => {
  return (
    <Image
      src="/ovensandwich-logo.png"
      height={height}
      width={width}
      alt="Ovensandwich logo"
      className={`rounded-full ${isAnimated && "animate-bounce"} ${className}`}
    />
  );
};
