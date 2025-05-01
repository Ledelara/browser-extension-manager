import { ThemeProvider } from "styled-components";
import { theme } from "./components/StyledComponents/globalStyle";
import HeaderComponent from "./components/Header/Header";
import ContainerComponent from "./components/Container/Container";
import ExtensionList from "./components/ExtensionList/ExtensionList";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <HeaderComponent />
      </header>
      <body>
        <ContainerComponent>
          <ExtensionList />
        </ContainerComponent>
      </body>
    </ThemeProvider>
  );
}

export default App;
