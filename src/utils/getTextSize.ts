const getTextSize = (length: number, isMobile?: boolean): string => {
  if (isMobile) {
    if (length < 20) return "text-4xl";
    if (length < 40) return "text-3xl";
    if (length < 60) return "text-2xl";
    return "text-xl";
  } else {
    if (length < 20) return "text-5xl";
    if (length < 40) return "text-4xl";
    if (length < 60) return "text-3xl";
    return "text-2xl";
  }
};

export default getTextSize;
