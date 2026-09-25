import Link from "next/link";
import { FileQuestion } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center gap-4 py-24 text-center">
      <div className="rounded-full bg-muted p-4">
        <FileQuestion className="h-8 w-8 text-muted-foreground" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
      </div>

      <Button asChild className="mt-2">
        <Link href="/">Back to home</Link>
      </Button>
    </Container>
  );
}