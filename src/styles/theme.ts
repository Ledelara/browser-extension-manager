export const lightTheme = {
  bodyBg: "var(--neutral-0)",
  textColor: "var(--neutral-600)",
  paragraphColor: "var(--neutral-900)",
  gradient: "var(--light-gradient)",
  headerBg: "var(--neutral-0)",
  toggleBg: "var(--neutral-100)",
};

export const darkTheme = {
  bodyBg: "var(--neutral-800)",
  textColor: "var(--neutral-300)",
  paragraphColor: "var(--neutral-100)",
  gradient: "var(--dark-gradient)",
  headerBg: "var(--neutral-700)",
  toggleBg: "var(--neutral-600)",
};

export type ThemeType = typeof lightTheme;
