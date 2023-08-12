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
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Hello!</h1>
          <p className="text-lg">
            My name is Michael Sandor and I am an engineer at{" "}
            <ExternalLink href="https://www.fieldwire.com/" label="Fieldwire" />
            . I am also working on{" "}
            <ExternalLink
              href="https://www.tech-resume.com/"
              label="tech-resume.com"
            />{" "}
            and{" "}
            <ExternalLink
              href="https://www.rentdiscountcalculator.com/"
              label="rentdiscountcalculator.com"
            />
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
