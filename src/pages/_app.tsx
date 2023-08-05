import { Layout } from "@/components";

import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Layout>
        <GoogleAnalytics gaMeasurementId="G-2NW1Y5GY0F" trackPageViews />
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
