import { FC } from "react";
import dynamic from "next/dynamic";
import testimonialLib from "@/lib/testimonialLib";
import getTextSize from "@/utils/getTextSize";
import { AnimationQueueAnimationProps } from "@/components/motion-provider/types";
import MotionQueue from "@/components/motion-provider/motion-queue";
import Marquee from "@/components/Marquee";
import Testimonial from "@/components/Testimonial";
import { useLanguage } from "@/context/LanguageContext";

const Testimonials: FC = () => {
  const { t } = useLanguage();
  const title = t("testimonialsTitle").split(/\s+/);

  return (
  <section className="md:my-24 my-12 max-w-7xl  flex flex-col mx-auto w-full font-primary tracking-tight ">
    <h2 className="lg:text-start text-center font-semibold  lg:justify-self-start font-secondary text-4xl md:text-5xl lg:pb-12 px-8 lg:px-0 flex flex-wrap justify-center lg:justify-start gap-2">
      <MotionQueue
        elementType={"span"}
        animations={
          Array.from({ length: title.length }).fill({
            mode: ["filterBlurIn", "fadeRight"],
            duration: 1,
          }) as AnimationQueueAnimationProps[]
        }
        isDynamicallyQueued
        children={title}
        className="text-center lg:text-start"
        delayLogic="linear"
        duration={0.5}
      />
    </h2>

    <Marquee className="bg-muted [--duration:20s]">
      {testimonialLib.map((testimonial, index) => {
        const translatedTestimonial = {
          ...testimonial,
          title: t(`testimonial${index + 1}` as any) || testimonial.title,
          job: t(`job${index + 1}` as any) || testimonial.job,
        };
        const textSizeClass = getTextSize(translatedTestimonial.title.length);
        return (
          <Testimonial
            key={translatedTestimonial.name}
            {...translatedTestimonial}
            textSize={textSizeClass}
          />
        );
      })}
    </Marquee>
  </section>
  );
};

export default Testimonials;
