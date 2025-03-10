import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { MenuCardProps, CarouselProps } from "@/interfaces";
import menu from "@/lib/menu";
import MenuItem from "./menu-item";
import { CATEGORY_TRANSLATION } from "@/lib/utils";
import { BlurImage } from "./blur-image";
import { AnimationQueueAnimationProps } from "./motion-provider/types";
import MotionQueue from "./motion-provider/motion-queue";

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const MenuCarousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const inView = useInView(carouselRef, { once: false, amount: 0.5 });

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"></div>

          <div className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 20,
                }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 20,
                  transition: {
                    duration: 1,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: false,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            aria-label="scroll left"
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 cursor-pointer"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ArrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            aria-label="scroll right"
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 cursor-pointer"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ArrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: MenuCardProps;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  const filteredMenu = menu.filter((item) => item.group === card.category);

  const rightFadeInMode = ["filterBlurIn", "fadeRight"];
  const leftFadeInMode = ["filterBlurIn", "fadeLeft"];

  const animations = Array.from({ length: filteredMenu.length }).map(
    (_, index) => ({
      mode: index % 2 === 0 ? rightFadeInMode : leftFadeInMode,
      duration: 0.5,
      transition: "smooth",
    })
  ) as AnimationQueueAnimationProps[];

  return (
    <>
      <AnimatePresence mode="popLayout">
        {open && (
          <div className="fixed inset-0 h-screen z-[999] overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0 bg-center bg-contain"
              style={{
                backgroundImage: `url(/assets/menu-images/menu-bg.webp)`,
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-neutral-900/75 h-fit z-[60] md:my-16 mt-8 p-4 md:p-10 rounded-3xl relative"
            >
              <button
                aria-label="close"
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-white rounded-full flex items-center justify-center cursor-pointer"
                onClick={handleClose}
              >
                <X className="h-6 w-6 text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base text-white font-secondary tracking-tight capitalize"
              >
                {CATEGORY_TRANSLATION[card.category]}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold font-primary  mt-4 text-white"
              >
                {card.title}
              </motion.p>
              <div className="lg:pb-10 pt-10 pb-48">
                <MotionQueue
                  duration={0.5}
                  elementType="ul"
                  className="space-y-4"
                  animations={animations}
                  isDynamicallyQueued
                >
                  {filteredMenu.map((val, idx) => (
                    <MenuItem {...val} key={idx} />
                  ))}
                </MotionQueue>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        aria-label="open card modal"
        onClick={handleOpen}
        className="rounded-3xl cursor-pointer bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10 group"
      >
        <div className="absolute h-full group-hover:opacity-0 top-0 inset-x-0 bg-gradient-to-b from-black/80 transition-all duration-300 will-change-auto via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-secondary capitalize text-left"
          >
            {CATEGORY_TRANSLATION[card.category]}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left  mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};
