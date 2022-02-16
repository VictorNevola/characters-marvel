import "../styles/globals.ts";
import { ThemeProvider as HandlerTheme } from "next-themes";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot> 
      <HandlerTheme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HandlerTheme>
    </RecoilRoot>
  );
}

export default MyApp;
