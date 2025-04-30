import { ThemeProvider } from "styled-components";
import { theme } from "./components/StyledComponents/globalStyle";
import "./App.css";
import { Button } from "./components/StyledComponents/Button/Button";
import HeaderComponent from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <HeaderComponent />
      </header>
      <div>
        <h1>Browser Extension Manager</h1>
        <Button primary>Botão principal</Button>
        <Button>Botão secundário</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
