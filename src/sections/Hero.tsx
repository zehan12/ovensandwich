import { FloatIcons } from "@/components/float-icons";
import Button from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import floatIconsLib from "@/lib/floatIconsLib";
import Image from "next/image";
import { FC } from "react";

export const Hero: FC = () => {
  const isMobile = useMobile();

  return (
    <div className="w-full h-screen bg-gradient-to-br from-black to-emerald-700 rounded-md relative">
      <div className="h-full max-w-7xl mx-auto w-full items-center justify-center flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:h-1/2 w-full h-1/2 lg:p-12 lg:items-start items-center justify-center flex flex-col lg:gap-6 gap-4 lg:mt-0 -mt-12 z-50">
          <h1 className="lg:text-6xl text-5xl font-bold font-secondary text-white tracking-tight">
            Ovensandwich.
          </h1>
          <p className="lg:text-start text-center max-w-xs lg:max-w-md text-neutral-300 font-primary tracking-tight lg:text-base text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button variant="secondary">Lorem ipsum</Button>
          {isMobile && (
            <FloatIcons
              isMobile={isMobile}
              data={floatIconsLib}
              wrapperStyle="absolute w-full h-screen h-60 z-10 overflow-hidden"
            />
          )}
        </div>
        <FloatIcons
          isMobile={isMobile}
          data={floatIconsLib}
          wrapperStyle="overflow-hidden z-0 lg:w-1/2 lg:h-1/2 lg:block hidden relative"
        />
      </div>
    </div>
  );
};
