import { ANALYTICS_ID } from "@/lib/utils";
import { Hero } from "@/sections/Hero";
import Location from "@/sections/Location";
import Menu from "@/sections/Menu";
import Testimonials from "@/sections/Testimonials";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";

const About = dynamic(() => import("@/sections/About"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Ovensandwich</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Çamdibinin en iyi büfesi Ovensandwich restorant, lezzetli tostlar, tatlılar, sandviçler ve içeceklerle donatılmış menümüz ile hizmetinizdeyiz."
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Ovensandwich, Restaurant, Food, Tost, Tatlı, Sandviç, Çamdibinin Büfesi"
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="Ovensandwich" />
        <meta
          property="og:description"
          content="Çamdibinin en iyi büfesi Ovensandwich restorant, lezzetli tostlar, tatlılar, sandviçler ve içeceklerle donatılmış menümüz ile hizmetinizdeyiz."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ovensandwich.com" />
        <meta
          property="og:image"
          content="https://www.ovensandwich.com/favicon.ico"
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ANALYTICS_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
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
