import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { setThemeToDocument, type ThemeVariant } from "~/utils/theme";

interface ThemeContextType {
  theme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeVariant;
}

export function ThemeProvider({
  children,
  initialTheme = "minimalist",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeVariant>(initialTheme);

  const setTheme = (newTheme: ThemeVariant) => {
    setThemeState(newTheme);
    setThemeToDocument(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
