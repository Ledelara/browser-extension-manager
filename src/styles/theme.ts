export const lightTheme = {
  bodyBg: "var(--neutral-0)",
  textColor: "var(--neutral-600)",
  paragraphColor: "var(--neutral-900)",
  gradient: "var(--light-gradient)",
  headerBg: "var(--neutral-0)",
  toggleBg: "var(--neutral-100)",
  cardBorder: "var(--neutral-300)",

  // lightTheme
  switchBg: "var(--neutral-300)",
  switchThumb: "var(--neutral-100)",         // Bolinha
  switchCheckedBg: "var(--red-700)",         // Fundo quando ligado


  buttonBg: "var(--neutral-0)",
  buttonText: "var(--neutral-900)",
  buttonBorder: "var(--neutral-300)",
  buttonHover: "var(--neutral-300)",
  buttonActiveBg: "var(--red-700)",
  buttonActiveText: "var(--neutral-0)",
  buttonActiveBorder: "var(--red-700)",
};

export const darkTheme = {
  bodyBg: "var(--neutral-800)",
  textColor: "var(--neutral-300)",
  paragraphColor: "var(--neutral-100)",
  gradient: "var(--dark-gradient)",
  headerBg: "var(--neutral-700)",
  toggleBg: "var(--neutral-600)",
  cardBorder: "var(--neutral-600)",

  switchBg: "var(--neutral-700)",            // Fundo do switch (desligado)
  switchThumb: "var(--neutral-100)",         // Bolinha
  switchCheckedBg: "var(--red-700)",         // Fundo quando ligado


  buttonBg: "var(--neutral-700)",
  buttonText: "var(--neutral-0)",
  buttonBorder: "var(--neutral-600)",
  buttonHover: "var(--neutral-600)",
  buttonActiveBg: "var(--red-700)",
  buttonActiveText: "var(--neutral-0)",
  buttonActiveBorder: "var(--red-700)",
};


export type ThemeType = typeof lightTheme;
