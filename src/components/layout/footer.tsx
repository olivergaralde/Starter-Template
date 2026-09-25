import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>

        <nav className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}