import { primaryFont, secondaryFont } from "@/config/fonts";
import Layout from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={`${primaryFont.variable} ${secondaryFont.variable} `}>
      <Component {...pageProps} />
    </Layout>
  );
}
