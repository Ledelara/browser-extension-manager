import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* ===== CSS RESET (simplificado) ===== */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    background: ${({ theme }) => theme.gradient} no-repeat center center fixed;
    color: ${({ theme }) => theme.textColor};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /* ===== CSS Variables ===== */
  :root {
    /* Neutral */
    --neutral-900: hsl(227, 75%, 14%);
    --neutral-800: hsl(226, 25%, 17%);
    --neutral-700: hsl(225, 23%, 24%);
    --neutral-600: hsl(226, 11%, 37%);
    --neutral-300: hsl(0, 0%, 78%);
    --neutral-200: hsl(217, 61%, 90%);
    --neutral-100: hsl(0, 0%, 93%);
    --neutral-0: hsl(200, 60%, 99%);

    /* Red */
    --red-400: hsl(3, 86%, 64%);
    --red-500: hsl(3, 71%, 56%);
    --red-700: hsl(3, 77%, 44%);

    /* Gradients */
    --light-gradient: linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%);
    --dark-gradient: linear-gradient(180deg, #040918 0%, #091540 100%);
  }

  /* ===== Utility example (opcional) ===== */
  img,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

const theme = {
  colors: {
    neutral900: "hsl(227, 75%, 14%)",
    neutral100: "hsl(0, 0%, 93%)",
    red500: "hsl(3, 71%, 56%)",
    red400: "hsl(3, 86%, 64%)",
    lightGradient: "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)",
    darkGradient: "linear-gradient(180deg, #040918 0%, #091540 100%)",
  },
};

export { GlobalStyle, theme };
