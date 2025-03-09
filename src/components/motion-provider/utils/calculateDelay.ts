import { calculateDelayProps } from "../types";

const state = {
  fibonacci: [0, 1],
  chaosValue: 0.5,
  accumulatedDelay: 0,
};

export const calculateDelay = ({
  baseDuration,
  index,
  delayLogic,
  customLogic,
}: calculateDelayProps): number => {
  switch (delayLogic) {
    case "linear":
      return index * baseDuration;

    case "chaotic": {
      const r = 3.99;
      state.chaosValue = r * state.chaosValue * (1 - state.chaosValue);
      return state.chaosValue * baseDuration * 10;
    }
    default:
      return index * baseDuration;
  }
};
