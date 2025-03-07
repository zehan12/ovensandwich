import { FC } from "react";
import Testimonial from "../components/Testimonial";
import dynamic from "next/dynamic";

const Marquee = dynamic(() => import("@/components/Marquee"), {
  ssr: false,
});

const Testimonials: FC = () => {
  return (
    <section className="py-14 max-w-7xl items-center justify-center flex mx-auto w-full">
      <Marquee className="bg-muted [--duration:20s]">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Testimonial key={idx} />
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;
