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
  }
}
