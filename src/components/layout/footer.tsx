import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4 py-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Starter Template. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}