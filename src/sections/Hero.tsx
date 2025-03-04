import Image from "next/image";
import { FC } from "react";

export const Hero: FC = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-black to-emerald-700 rounded-md relative">
      <div className="h-full max-w-7xl mx-auto w-full items-center justify-center flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:h-1/2 w-full h-1/2  lg:p-12 lg:items-start items-center  justify-center flex flex-col lg:gap-6 gap-4 lg:mt-0 -mt-12">
          <h1 className="lg:text-6xl text-5xl font-bold font-secondary text-white tracking-tight">
            Ovensandwich.
          </h1>
          <p className="text-start max-w-xs lg:max-w-md text-neutral-300 font-primary tracking-tight lg:text-base text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="lg:w-1/2 lg:h-1/2 bg-black/20 rounded-2xl relative">
          <Image
            src="/assets/icons/hamburger-icon.png"
            alt="Ovensandwich Hamburger Icon"
            height={64}
            width={64}
            className="animate-float"
          />
        </div>
      </div>
    </div>
  );
};
