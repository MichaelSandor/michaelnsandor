/**
 * A minimal layout that renders a navbar, and applies some styling, across all pages.
 */

import { ExternalLink, InternalLink } from ".";

type LayoutProps = {
  children: any;
};

function Layout(props: LayoutProps) {
  return (
    <div className="text-gray-950 min-h-screen p-16">
      <nav className="mb-16 flex items-center gap-4">
        <InternalLink href="/">home</InternalLink>
        <InternalLink href="/blog/">blog</InternalLink>
        <ExternalLink href="https://twitter.com/michaelnsandor/">
          twitter
        </ExternalLink>
        <ExternalLink href="https://github.com/MichaelSandor/">
          github
        </ExternalLink>
      </nav>
      {props.children}
    </div>
  );
}

export default Layout;
