"use client";

import { Switch } from "antd";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <Switch
      checked={isDark}
      onChange={(checked) => setTheme(checked ? "dark" : "light")}
      checkedChildren={<> Dark</>}
      unCheckedChildren={<> Light</>}
     
    />
  );
}