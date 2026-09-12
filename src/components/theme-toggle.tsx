"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react/ssr";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <SunIcon weight="bold" className="hidden size-5 dark:block" />
      <MoonIcon weight="bold" className="size-5 dark:hidden" />
    </Button>
  );
}
