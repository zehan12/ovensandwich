import { FC } from "react";
import dynamic from "next/dynamic";
import testimonialLib from "@/lib/testimonialLib";
import getTextSize from "@/utils/getTextSize";
import Testimonial from "@/components/Testimonial";

const Marquee = dynamic(() => import("@/components/Marquee"), {
  ssr: false,
});

const Testimonials: FC = () => (
  <section className="md:my-24 my-12 max-w-7xl  flex flex-col mx-auto w-full font-primary tracking-tight ">
    <h2 className="lg:text-start text-center  font-semibold  lg:justify-self-start font-secondary text-4xl md:text-5xl lg:pb-12 px-8 lg:px-0">
      Müşterilerimizin Yorumları.
    </h2>
    <Marquee className="bg-muted [--duration:20s]">
      {testimonialLib.map((testimonial) => {
        const textSizeClass = getTextSize(testimonial.title.length);
        return (
          <Testimonial
            key={testimonial.name}
            {...testimonial}
            textSize={textSizeClass}
          />
        );
      })}
    </Marquee>
  </section>
);

export default Testimonials;
