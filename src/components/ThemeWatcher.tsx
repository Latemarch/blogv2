"use client";

import { useTheme } from "next-themes";

export default function ThemeWatcher() {
  const { theme } = useTheme();
  return (
    <div>
      ThemeWatcher <p>{theme}</p>
    </div>
  );
}
