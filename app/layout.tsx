import RootStyleRegistry from "./RootStyleRegistry";
import { ThemeProvider, DefaultTheme } from "styled-components";
// These styles apply to every route in the application
import "./global.css";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html>
      <head>
        <title>Meta Ventures</title>
        <meta name="description" content="Meta ventures OÜ and beyond." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </head>
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
