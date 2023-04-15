import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "../layouts/mainLayout";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "../providers/themeProvider";
import { JsonProvider } from "../providers/jsonProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CssBaseline />
      <MainLayout>
        <JsonProvider>
          <Component {...pageProps} />
        </JsonProvider>
      </MainLayout>
    </ThemeProvider>
  );
}
