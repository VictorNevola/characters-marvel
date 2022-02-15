import { FC } from "react";
import { ThemeProvider as HandlerTheme, useTheme } from "next-themes";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/styles/globals";
import light from "@/styles/themes/light";
import dark from "@/styles/themes/dark";

const Layout: FC = ({ children }) => {
  const { systemTheme, theme } = useTheme();
  const themeSelected = theme || systemTheme;
  const currentTheme = themeSelected === "dark" ? dark : light;

  return (
    <HandlerTheme>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </HandlerTheme>
  );
};

export default Layout;
