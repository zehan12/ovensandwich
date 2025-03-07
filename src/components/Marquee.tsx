import { MarqueeProps } from "@/interfaces";

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]
        ${!vertical ? "flex-row" : "flex-col"}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around [gap:var(--gap)]
                ${
                  !vertical
                    ? "animate-marquee flex-row"
                    : "animate-marquee-vertical flex-col"
                }
                ${pauseOnHover && "group-hover:[animation-play-state:paused]"}
                ${reverse && "[animation-direction:reverse]"}`}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
