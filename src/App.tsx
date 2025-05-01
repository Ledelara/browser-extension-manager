import { ThemeProvider } from "styled-components";
import { theme } from "./components/StyledComponents/globalStyle";
import "./App.css";
import { Button } from "./components/StyledComponents/Button/Button";
import HeaderComponent from "./components/Header/Header";
import ContainerComponent from "./components/Container/Container";
import { Paragraph } from "./components/StyledComponents/Paragraph/Paragraph";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <HeaderComponent />
      </header>
      <body>
        <ContainerComponent>
          <Paragraph>Texto de exemplo</Paragraph>
          <Button primary>Botão principal</Button>
          <Button>Botão secundário</Button>
        </ContainerComponent>
      </body>
    </ThemeProvider>
  );
}

export default App;
