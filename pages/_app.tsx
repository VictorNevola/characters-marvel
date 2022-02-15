import "../styles/globals.ts";
import { ThemeProvider as HandlerTheme } from "next-themes";
import type { AppProps } from "next/app";

import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HandlerTheme> 
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HandlerTheme>
  );
}

export default MyApp;
