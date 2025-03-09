import { useEffect, useState } from "react";

export const useScroll = (sectionID: string[], offset: number) => {
  const [activeID, setActiveID] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let curr = "";

      sectionID.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const { top } = el.getBoundingClientRect();

          if (top <= offset + 10) curr = id;
        }
      });
      setActiveID(curr);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionID, offset]);

  return activeID;
};
