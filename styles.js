import { createGlobalStyle } from "styled-components";
import { Roboto_Condensed } from "next/font/google";

const robotoCon = Roboto_Condensed({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --font-family: ${robotoCon.style.fontFamily},sans-serif;
    --background: #232323;
    --on-surface: #edede9;
    --is-liked:rgba(70, 70, 70, 0.56);
    --hover-button: #fca311;
    --liked: #a4161a;
  }
      
  body {
    margin: 0;
    font-family: var(--font-family);
    background-color: var(--background);
    color: var(--on-surface);
    padding: 1.5rem;
  }
`;
