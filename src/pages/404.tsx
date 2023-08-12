import { InternalLink } from "@/components";

function Custom404() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <InternalLink href="/" label="Home" />
    </div>
  );
}

export default Custom404;
