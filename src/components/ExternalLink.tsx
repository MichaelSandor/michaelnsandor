/**
 * A wrapper around Next's `Link` component designed to be used
 * for external links. Enforces consistent styling and behavior.
 */

import Link from "next/link";

interface ExternalLinkProps {
  href: string;
  label: string;
}

function ExternalLink(props: ExternalLinkProps) {
  return (
    <Link
      className="hover:underline"
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.label}
    </Link>
  );
}

export default ExternalLink;
