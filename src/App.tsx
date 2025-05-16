import { ThemeProvider } from "styled-components";
import HeaderComponent from "./components/Header/Header";
import ContainerComponent from "./components/Container/Container";
import ExtensionList from "./components/ExtensionList/ExtensionList";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import "./App.css";
import { GlobalStyle } from "./components/StyledComponents/globalStyle";

function App() {

  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as 'light' | 'dark' | null;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setThemeName(savedTheme);
    }
  }, [])

  return (
    <ThemeProvider theme={themeName === 'light' ? lightTheme : darkTheme}>  
      <GlobalStyle />
      <header>
        <HeaderComponent 
          themeName={themeName}
          setThemeName={setThemeName}
        />
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
