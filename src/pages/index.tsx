import About from "@/sections/About";
import { Hero } from "@/sections/Hero";
import { Menu } from "@/sections/Menu";

export default function Home() {
  return (
    <div className="items-center justify-center flex flex-col w-full min-h-screen h-auto">
      <Hero />
      <Menu />
      <About />
    </div>
  );
}
