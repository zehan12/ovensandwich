import { useEffect, useRef, useState } from "react";
import { motion as m, AnimatePresence, useInView } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { SquareDataProps } from "@/interfaces";
import galleryLib from "@/lib/galleryLib";
import shuffle from "@/utils/shuffle";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { INSTAGRAM_URL } from "@/lib/utils";
import MotionContainer from "@/components/motion-provider/motion-container";
import MotionQueue from "@/components/motion-provider/motion-queue";
import { AnimationQueueAnimationProps } from "@/components/motion-provider/types";

const desc = "Her gün sabah 9.00'dan akşam 21.00'a".split(/\s+/);
const About = () => {
  const ref = useRef<HTMLHeadingElement | null>(null);

  return (
    <section
      className="w-full px-8 py-12 grid grid-cols-1  md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto"
      id="about"
    >
      <div>
        <p className="flex flex-wrap mb-4 gap-1 text-xs md:text-sm text-accent font-primary">
          <MotionQueue
            elementType={"span"}
            animations={
              Array.from({ length: desc.length }).fill({
                mode: ["filterBlurIn", "fadeRight"],
                duration: 1,
              }) as AnimationQueueAnimationProps[]
            }
            isDynamicallyQueued
            children={desc}
            delayLogic="chaotic"
            duration={0.25}
          />
        </p>
        <MotionContainer
          elementType={"h3"}
          mode={["fadeIn", "filterBlurIn"]}
          className="text-5xl md:text-6xl font-semibold font-secondary bg-gradient-to-r text-transparent bg-clip-text from-secondary  to-brand tracking-tight"
          delay={0.5}
          duration={1}
          transition="smooth"
          children="Sizler için buradayız."
        />
        <p className="text-sm md:text-base text-stone-400 font-primary my-4 md:my-6 tracking-tighter">
          Yenilikçi tatların buluştuğu noktamıza sizleri bekliyor, 100%
          memnuniyet garantiliyoruz. burada her lokma geleceğin lezzetlerini
          yaşatıyor. Taptaze sandviçler, sıcacık tostlar, unutulmaz tatlılar ve
          ferahlatıcı içeceklerle donatılmış menümüz, damaklarınızı şımartacak
          eşsiz bir deneyim sunuyor.
        </p>
        <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="brand" aria-label="Instagram Redirection Button">
            <span>Instagram Sayfamız</span>
            <ArrowRight className="size-4" />
          </Button>
        </Link>
        <div ref={ref} />
      </div>
      <ShuffleGrid ref={ref} />
    </section>
  );
};

const genSq = (): SquareDataProps[] => shuffle([...galleryLib]);

const ShuffleGrid = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    amount: 0.2,
  });

  const [squares, setSquares] = useState(genSq());
  const [selected, setSelected] = useState<SquareDataProps | null>(null);

  const handleClick = () => setSelected(null);

  useOutsideClick(containerRef, handleClick);

  useEffect(() => {
    if (!selected && inView) {
      intervalRef.current = setInterval(() => {
        setSquares(genSq());
      }, 2500);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [selected, inView]);

  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-3 grid-rows-4 h-[450px] gap-1">
        {squares.map((item) => (
          <m.div
            key={item.id}
            layout
            transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
            onClick={() => setSelected(item)}
            layoutId={`square-${item.id}`}
            className="w-full h-full bg-cover cursor-pointer hover:scale-110"
            style={{ backgroundImage: `url(${item.src})` }}
          />
        ))}
      </div>
      {selected && (
        <AnimatePresence>
          <m.div
            className="fixed inset-0 bg-black/50 backdrop-blur-lg flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <m.div
              layoutId={`square-${selected.id}`}
              className="lg:w-1/2 w-full h-72 lg:h-96 bg-contain rounded-xl bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${selected.src})` }}
            />
          </m.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default About;
