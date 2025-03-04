import { FloatItems } from "@/interfaces";
import Image from "next/image";
import { FC } from "react";

const FloatIcons: FC<FloatItems> = ({ data = [], wrapperStyle, isMobile }) => {
  if (!data.length) {
    console.warn("No data provided on FloatIcons");
    return null;
  }

  return (
    <div className={wrapperStyle}>
      {data.map((item, idx) => {
        const animationDelay = `${idx * 100}ms`;
        const height = isMobile ? item.height : item.height + 8;
        const width = isMobile ? item.width : item.width + 8;

        return (
          <Image
            key={idx}
            src={item.src}
            alt={item.alt}
            height={height}
            width={width}
            className="animate-float absolute"
            style={{
              top: `${item.top}%`,
              left: `${item.left}%`,
              animationDelay: animationDelay,
              animationDuration: isMobile ? "3s" : "5s",
            }}
          />
        );
      })}
    </div>
  );
};

export { FloatIcons };
