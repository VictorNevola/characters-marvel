import "../styles/globals.ts";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/styles/globals";
import light from "@/styles/themes/light";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
