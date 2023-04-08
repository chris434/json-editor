import { useState, useContext, createContext, ReactNode } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { useLocalStorage } from "../hooks/useLocalStorage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

type themeProviderProps = {
  children: ReactNode;
};

const Provider = createContext(() => {});
export function ThemeProvider({ children }: themeProviderProps) {
  const [themeMode, setThemeMode] = useLocalStorage("theme", { mode: "light" });

  const toggleTheme = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  };

  return (
    <Provider.Provider value={toggleTheme}>
      <MuiThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
        {children}
      </MuiThemeProvider>
    </Provider.Provider>
  );
}

export function useToggleTheme() {
  const toggleTheme = useContext(Provider);

  return { toggleTheme };
}
