import Divider from "@/components/divider";
import { FloatIcons } from "@/components/float-icons";
import Button from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import floatIconsLib from "@/lib/floatIconsLib";
import { MapPinCheckInside } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const Hero: FC = () => {
  const isMobile = useMobile();
  const ADDRESS =
    "Tuna mah. 5522 sokak No 32 Bornova İzmir, İzmir, Turkey 35090";
  const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    ADDRESS
  )}`;

  return (
    <div className="w-full h-screen bg-gradient-to-br from-black to-emerald-700 rounded-md relative">
      <div className="h-full max-w-7xl mx-auto w-full items-center justify-center flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:h-1/2 w-full h-1/2 lg:p-12 lg:items-start items-center justify-center flex flex-col lg:gap-6 gap-4 lg:mt-0 -mt-12 z-50">
          <h1 className="lg:text-6xl text-5xl font-bold font-secondary text-white tracking-tight">
            Ovensandwich.
          </h1>
          <p className="lg:text-start text-center max-w-xs lg:max-w-md text-neutral-300 font-primary tracking-tight lg:text-base text-sm">
            Çamdibinin en iyi büfesi Ovensandwich restorant, lezzetli tostlar,
            tatlılar, sandviçler ve içeceklerle donatılmış menümüz ile
            hizmetinizdeyiz!
          </p>
          <Link
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="z-50"
          >
            <Button variant="secondary" className="w-full h-full">
              <span>Haritalarda Görüntüleyin</span>
              <MapPinCheckInside className="w-5 h-5 " />
            </Button>
          </Link>
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
      <Divider />
    </div>
  );
};
