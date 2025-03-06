import { Hero } from "@/sections/Hero";
import { Menu } from "@/sections/Menu";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/sections/About"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="items-center justify-center flex flex-col w-full min-h-screen h-auto">
      <Hero />
      <Menu />
      <About />
    </div>
  );
}
