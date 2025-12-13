"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ConfigProvider, theme as antdTheme } from "antd";
import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <AntdThemeSync>{children}</AntdThemeSync>
    </NextThemesProvider>
  );
}

function AntdThemeSync({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // map token values depending on theme
  const antdTokens = useMemo(() => {
    const isDark = resolvedTheme === "dark";

    if (isDark) {
      return {
        // layout & container backgrounds for AntD
        colorBgLayout: "#141414",
        colorBgContainer: "#141414",
        colorBgBase: "#0f0f0f",
        colorText: "#E6E6E6",
        colorTextHeading: "#FFFFFF",
        // keep your primary
        colorPrimary: "#00A67E",
        borderRadius: 6,
      };
    }

    // light theme tokens
    return {
      colorBgLayout: "#ffffff",
      colorBgContainer: "#ffffff",
      colorBgBase: "#f5f5f5",
      colorText: "#111827",
      colorTextHeading: "#111827",
      colorPrimary: "#00A67E",
      borderRadius: 6,
    };
  }, [resolvedTheme]);

  if (!mounted) return null; // avoid hydration mismatch

  return (
    <ConfigProvider
      theme={{
        algorithm:
          resolvedTheme === "dark"
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
        token: antdTokens,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
