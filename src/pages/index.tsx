import { Hero } from "@/sections/Hero";
import Location from "@/sections/Location";
import Menu from "@/sections/Menu";
import Testimonials from "@/sections/Testimonials";
import dynamic from "next/dynamic";
import Head from "next/head";

const About = dynamic(() => import("@/sections/About"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Ovensandwich</title>
        <meta
          name="description"
          content="Çamdibinin en iyi büfesi Ovensandwich restorant, lezzetli tostlar, tatlılar, sandviçler ve içeceklerle donatılmış menümüz ile hizmetinizdeyiz."
          key="description"
        />
        <meta name="icon" content="/favicon.ico" />
      </Head>
      <div className="items-center justify-center flex flex-col w-full min-h-screen h-auto">
        <Hero />
        <Menu />
        <About />
        <Testimonials />
        <Location />
      </div>
    </>
  );
}
