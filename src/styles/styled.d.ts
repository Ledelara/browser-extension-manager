import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bodyBg: string;
    textColor: string;
    paragraphColor: string;
    gradient: string;
    headerBg: string;
    toggleBg: string;
    switchBg: string;
    switchThumb: string;
    switchCheckedBg: string;
    cardBorder: string;
    buttonBg: string;
    buttonText: string;
    buttonBorder: string;
    buttonHover: string;
    buttonActiveBg: string;
    buttonActiveText: string;
    buttonActiveBorder: string;
  }
}
