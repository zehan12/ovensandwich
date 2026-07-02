import "@/styles/globals.css";
import { primaryFont, secondaryFont } from "@/config/fonts";
import Layout from "@/layout";
import type { AppProps } from "next/app";
import { LanguageProvider } from "@/context/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Layout className={`${primaryFont.variable} ${secondaryFont.variable} `}>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
