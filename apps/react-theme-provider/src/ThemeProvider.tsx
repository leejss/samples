// Theme state and logic
// ThemeProvider => make accessible state to all sub components
// - How to change theme theme ?
// - How to make web remember last setting theme ?
// - How to make thememing architecture ? => use class and css variables
// Script that handle changing the document class to match the theme.
import { Fragment, PropsWithChildren, ReactNode, createContext, useCallback, useContext, useState } from "react";

type ColorTheme = "light" | "dark";

type TheemContextType = {
  theme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<TheemContextType | null>(null);
const KEY = "theme";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const context = useContext(ThemeContext);
  // Ignore the already existing context provider
  if (context) return <Fragment>{children}</Fragment>;
  return <Theme>{children}</Theme>;
};

const Theme = ({ children }: ThemeProviderProps) => {
  const [themeState, setThemeState] = useState(getPersistedTheme);

  const setTheme = useCallback((theme: ColorTheme) => {
    setThemeState(theme);
    window.localStorage.setItem(KEY, theme);

    const doc = document.documentElement;
    doc.classList.remove("light", "dark");
    doc.classList.add(theme);
  }, []);

  const toggle = useCallback(() => {
    const doc = document.documentElement;
    if (themeState === "light") {
      setTheme("dark");
      window.localStorage.setItem(KEY, "dark");
      doc.classList.remove("light");
      doc.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem(KEY, "light");
      doc.classList.remove("dark");
      doc.classList.add("light");
    }
  }, [setTheme, themeState]);

  return (
    <ThemeContext.Provider
      value={{
        theme: themeState,
        setTheme,
        toggleTheme: toggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const isServer = () => typeof window === "undefined";
const getPersistedTheme = (): ColorTheme => {
  if (isServer()) {
    return "light";
  }
  const value = window.localStorage.getItem(KEY);
  if (!value) {
    const systemTheme = getSystemTheme();
    window.localStorage.setItem(KEY, systemTheme);
    return systemTheme;
  }
  return value as ColorTheme;
};
const getSystemTheme = (): ColorTheme => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return isDark ? "dark" : "light";
};
