import { SquareDataProps } from "@/interfaces/index";

const shuffle = (array: SquareDataProps[]) => {
  let currIdx = array.length,
    randomIdx;
  while (currIdx !== 0) {
    randomIdx = Math.floor(Math.random() * currIdx);
    currIdx--;
    [array[currIdx], array[randomIdx]] = [array[randomIdx], array[currIdx]];
  }
  return array;
};

export default shuffle;
