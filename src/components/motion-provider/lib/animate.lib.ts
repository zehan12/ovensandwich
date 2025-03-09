import { AnimationLibraryProps } from "../types";

const animations: AnimationLibraryProps = {
  default: {
    initial: {},
    animate: {},
  },

  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },

  fadeRight: {
    initial: { opacity: 0, x: 30 },
    animate: {
      opacity: 1,
      x: 0,
    },
  },

  filterBlurIn: {
    initial: { filter: "blur(10px)" },
    animate: {
      filter: "blur(0px)",
    },
  },
};

export default animations;
