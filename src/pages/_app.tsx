import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "../layouts/mainLayout";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "../providers/themeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CssBaseline />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
