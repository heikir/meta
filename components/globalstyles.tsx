import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
  font-family: "SF Pro", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Inter", "Arial", "sans-serif";
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
#root,
#__next {
  isolation: isolate;
}
a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyle;
