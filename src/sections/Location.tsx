import Button from "@/components/ui/button";
import { ADDRESS, DIRECTIONS_URL, GOOGLE_MAPS_URL } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Location = () => {
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
