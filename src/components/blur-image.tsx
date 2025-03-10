import Image, { ImageProps } from "next/image";
import { useState } from "react";

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      className={`transition duration-300 ${
        isLoading ? "blur-sm" : "blur-0"
      } ${className}`}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Ovensandwich Menu Fotoğrafı"}
      {...rest}
    />
  );
};
