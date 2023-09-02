import Head from "next/head";

import { ExternalLink } from "@/components";

function Home() {
  return (
    <>
      <Head>
        <title>Michael Sandor</title>
        {/* prettier-ignore */}
        <meta name="description" content="The official website of Michael Sandor, fullstack engineer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">hello!</h1>
        <p>
          My name is Michael Sandor and I am an engineer at{" "}
          <ExternalLink href="https://www.fieldwire.com/">
            Fieldwire
          </ExternalLink>
          . I am also working on{" "}
          <ExternalLink href="https://www.tech-resume.com/">
            tech-resume.com
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink href="https://www.rentdiscountcalculator.com/">
            rentdiscountcalculator.com
          </ExternalLink>
          .
        </p>
      </div>
    </>
  );
}

export default Home;
