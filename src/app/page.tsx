import { ExternalLink } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Hello! 👋</h1>
      <p>
        My name is Michael Sandor and I am an engineer at{" "}
        <ExternalLink href="https://www.fieldwire.com/">Fieldwire</ExternalLink>
        .
      </p>
      <p>
        I also enjoy tinkering outside of work. Here are some of the projects I
        am currently working on:
      </p>
      <ul className="list-square list-inside">
        <li>
          <ExternalLink href="https://www.rentdiscountcalculator.com/">
            rentdiscountcalculator.com
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.tech-resume.com/">
            tech-resume.com
          </ExternalLink>
        </li>
      </ul>
    </div>
  );
}
