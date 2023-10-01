import "./globals.css";

import { Metadata } from "next";
import { Inter } from "next/font/google";

import { ExternalLink } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Sandor",
  description: "The official website of Michael Sandor, fullstack engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-slate-950 p-16">
          <nav className="mb-16 flex items-center gap-4">
            <ExternalLink href="https://twitter.com/michaelnsandor/">
              Twitter
            </ExternalLink>
            <ExternalLink href="https://github.com/MichaelSandor/">
              GitHub
            </ExternalLink>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
