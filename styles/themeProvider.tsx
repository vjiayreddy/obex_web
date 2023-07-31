import { useTheme } from "next-themes";
import { GlobalStyles } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme, globalStyles } from "./theme/muiTheme";
import { FC, useEffect, useState } from "react";

const MuiThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  useEffect(() => {
    resolvedTheme === "dark"
      ? setCurrentTheme(darkTheme)
      : setCurrentTheme(lightTheme);
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
