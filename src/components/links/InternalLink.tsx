/**
 * A wrapper around Next's `Link` component designed to be used
 * for internal links. Enforces consistent styling and behavior.
 */

import Link from "next/link";

interface InternalLinkProps {
  children: any;
  href: string;
}

function InternalLink(props: InternalLinkProps) {
  return (
    <Link className="hover:underline" href={props.href}>
      {props.children}
    </Link>
  );
}

export default InternalLink;
