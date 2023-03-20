/**
 * A minimal layout that renders a navbar, and applies some styling, across all pages.
 */

import { ExternalLink } from ".";

interface LayoutProps {
  children: any;
}

function Layout(props: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col p-8">
      <nav className="flex items-center justify-end gap-4">
        <ExternalLink href="https://github.com/MichaelSandor" label="GitHub" />
        {/* prettier-ignore */}
        <ExternalLink href="https://www.linkedin.com/in/sandormichael/" label="LinkedIn" />
      </nav>
      {props.children}
    </div>
  );
}

export default Layout;
