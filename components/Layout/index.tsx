import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/styles/globals";
import light from "@/styles/themes/light";
import dark from "@/styles/themes/dark";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout: FC = ({ children }) => {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const themeSelected = theme || systemTheme;
  const currentTheme = themeSelected === "dark" ? dark : light;

  useEffect(() => setMounted(true), []);

  if(!mounted) return null;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
