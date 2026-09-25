import { Container } from "@/components/layout/container";

export default function Home() {
  return (
    <Container>
      <section className="flex min-h-[60vh] items-center justify-center py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Starter Template
          </h1>

          <p className="mt-4 text-muted-foreground">
            Start building.
          </p>
        </div>
      </section>
    </Container>
  );
}