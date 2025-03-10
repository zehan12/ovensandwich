import { FloatItems } from "@/interfaces";
import Image from "next/image";
import { FC, useState } from "react";

const FloatIcons: FC<FloatItems> = ({ data = [], wrapperStyle, isMobile }) => {
  const [isLoading, setLoading] = useState<boolean>(true);

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
            loading="lazy"
            decoding="async"
            key={idx}
            src={item.src}
            onLoad={() => setLoading(false)}
            alt={item.alt}
            height={height}
            width={width}
            blurDataURL={typeof item.src === "string" ? item.src : undefined}
            className={`animate-float absolute ${isLoading && "blur-sm"} `}
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

export default FloatIcons;
