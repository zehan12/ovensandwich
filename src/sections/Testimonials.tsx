import { FC } from "react";
import Testimonial from "../components/Testimonial";
import dynamic from "next/dynamic";
import testimonialLib from "@/lib/testimonialLib";
import getTextSize from "@/utils/getTextSize";

const Marquee = dynamic(() => import("@/components/Marquee"), {
  ssr: false,
});

const Testimonials: FC = () => (
  <section className="md:my-24 my-12 max-w-7xl  flex flex-col mx-auto w-full font-primary tracking-tight ">
    <h2 className="text-start self-start font-semibold  justify-self-start font-secondary text-4xl md:text-5xl lg:pb-12 px-8 lg:px-0">
      Müşterilerimizin Yorumları.
    </h2>
    <Marquee className="bg-muted [--duration:20s]">
      {testimonialLib.map((testimonial, idx) => {
        const textSizeClass = getTextSize(testimonial.title.length);
        return (
          <Testimonial key={idx} {...testimonial} textSize={textSizeClass} />
        );
      })}
    </Marquee>
  </section>
);

export default Testimonials;
