import { useEffect } from "react";

import { useRouter } from "next/router";

import Script from "next/script";

import { Layout } from "@/components";

import "@/styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.ENV === "production") {
      (window as any).gtag("config", "G-2NW1Y5GY0F", {
        page_title: router.pathname,
        page_location: `https://michaelnsandor.com${router.pathname}`,
      });
    }
  }, [router.pathname]);

  return (
    <main>
      <>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2NW1Y5GY0F"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
      </>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
