import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const Location: FC = () => {
  const ADDRESS =
    "Tuna mah. 5522 sokak No 32 Bornova İzmir, İzmir, Turkey 35090";
  const GOOGLE_MAPS_URL = `https://www.google.com/maps?q=${encodeURIComponent(
    ADDRESS
  )}&output=embed`;
  const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    ADDRESS
  )}`;

  return (
    <section className="w-full px-8  items-center justify-center flex flex-col  max-w-7xl mx-auto pb-12">
      <h2 className="text-5xl md:text-6xl font-secondary font-bold mb-4">
        Lokasyonumuz.
      </h2>
      <p className="md:text-lg text-sm mb-6 max-w-lg font-primary tracking-tighter text-stone-400 text-center">
        {ADDRESS} adresinde bulunuyoruz. Uğrayın ve bizi görün veya aşağıdan yol
        tarifi alın!
      </p>

      <div className="w-full max-w-4xl h-64 md:h-96 rounded-lg overflow-hidden shadow-lg my-6">
        <iframe
          src={GOOGLE_MAPS_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <Link href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
        <Button variant="brand" className="lg:px-6 lg:py-4">
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
