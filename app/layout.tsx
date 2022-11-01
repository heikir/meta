import RootStyleRegistry from "./RootStyleRegistry";
// These styles apply to every route in the application
import "./global.css";

export default function Layout({ children }: { children: React.ReactNode }) {
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
