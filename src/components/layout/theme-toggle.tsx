"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

 useEffect(() => {
  // Intentional: this is the standard next-themes hydration guard —
  // we can't know the real theme until after mount, so exactly one
  // extra render here is expected and unavoidable.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setMounted(true);
}, []);
  if (!mounted) {
    return <Button variant="ghost" size="icon" disabled aria-hidden />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}