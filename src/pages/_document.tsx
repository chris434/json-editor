import { Html, Head, Main, NextScript } from "next/document";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider theme={theme}>
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
