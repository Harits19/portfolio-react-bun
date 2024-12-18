import { createContext, ReactNode, useContext, useState } from "react";

type ThemeMode = "light" | "dark";

const ThemeContext = createContext({
  mode: "light" as ThemeMode,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMode: (value: ThemeMode) => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeState = () => {
  return useContext(ThemeContext);
};
