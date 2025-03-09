import { TransitionConfig } from "../types";

const transitions: { [key: string]: TransitionConfig } = {
  none: {},
  default: { duration: 1, ease: "easeInOut" },
  smooth: { duration: 1, ease: "easeInOut" },
  slowSmooth: { duration: 1.5, ease: "easeInOut" },
};

export default transitions;
