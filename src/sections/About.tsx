import galleryLib from "@/lib/galleryLib";
import shuffle from "@/utils/shuffle";
import { motion as m } from "motion/react";
import { useEffect, useRef, useState } from "react";

const About = () => (
  <section className="w-full px-8 py-12 grid grid-cols-1  md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
    <div>
      <span className="block mb-4 text-xs md:text-sm text-accent1 font-primary">
        Her gün 10.00'dan 22.00'da
      </span>
      <h3 className="text-4xl md:text-6xl font-semibold font-secondary bg-gradient-to-r text-clip from-secondary to-primary  tracking-tight">
        Sizler için buradayız.
      </h3>
      <p className="text-base md:text-lg text-stone-400 font-primary my-4 md:my-6">
        Lorem ipsum olor sit amet consectetur, adipisicing elit. Nam nobis in
        error repellat voluptatibus ad.
      </p>
    </div>
    <ShuffleGrid />
  </section>
);

const generateSquares = () => {
  return shuffle(galleryLib).map((val) => (
    <m.div
      key={val.id}
      layout
      transition={{
        duration: 1.5,
        type: "spring",
      }}
      className="w-full h-full bg-cover"
      style={{
        backgroundImage: `url(${val.src})`,
      }}
    />
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };
  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((val) => val)}
    </div>
  );
};

export default About;
