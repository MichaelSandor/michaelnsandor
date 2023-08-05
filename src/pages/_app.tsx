import { Layout } from "@/components";

import "@/styles/globals.css";

import Script from "next/script";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-2NW1Y5GY0F" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-2NW1Y5GY0F');
        `}
      </Script>
    </main>
  );
}
