import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useInView } from "motion/react";
import Link from "next/link";
import { FC, useRef } from "react";

const Location: FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px 200px 0px" });

  const ADDRESS =
    "Tuna mah. 5522 sokak No 32 Bornova İzmir, İzmir, Turkey 35090";
  const GOOGLE_MAPS_URL = `https://www.google.com/maps?q=${encodeURIComponent(
    ADDRESS
  )}&output=embed`;
  const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    ADDRESS
  )}`;

  return (
    <section
      ref={ref}
      className="w-full px-8 items-center justify-center flex flex-col  max-w-7xl mx-auto pb-12"
      id="location"
    >
      <h2 className="text-5xl md:text-6xl font-secondary font-bold mb-4">
        Lokasyonumuz.
      </h2>
      <p className="md:text-lg text-sm mb-6 max-w-lg font-primary tracking-tighter text-stone-400 text-center">
        {ADDRESS} adresinde bulunuyoruz. Uğrayın ve bizi görün veya aşağıdan yol
        tarifi alın!
      </p>

      <div className="w-full max-w-4xl h-64 md:h-96 rounded-lg overflow-hidden shadow-lg my-6 items-center justify-center flex">
        {inView ? (
          <iframe
            src={GOOGLE_MAPS_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            title="Ovensandwich Google Maps Location"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <span className="loader z-50" />
        )}
      </div>
      <Link href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
        <Button
          variant="brand"
          className="lg:px-6 lg:py-4"
          aria-label="View Directions on Google Maps Button"
        >
          <span className="font-primary tracking-tight">
            Tek tuşta yol tarifi alın
          </span>
          <ArrowRight className="w-5 h-5" />
        </Button>
      </Link>
    </section>
  );
};

export default Location;
