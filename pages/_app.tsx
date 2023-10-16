import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "@/styles/globals.css";

type AppPropsWithLayout = AppProps & {
  Component: {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
