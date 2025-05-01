import { useState } from "react";
import { Header } from "../StyledComponents/Header/Header";
import './Header.css';
import { ThemeToggle } from "../StyledComponents/ThemeToggle/ThemeToggle";

export default function HeaderComponent() {

  const [theme, setTheme] = useState<string>("light");

  return (
    <Header>
      <img 
        src="/assets/images/logo.svg" 
        alt="Logo" 
        style={{ 
          width: "150px", 
          height: "50px",
        }} 
      />
      {
        <ThemeToggle onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? (
            <img src="/assets/images/icon-moon.svg" alt="Dark Mode" />
          ) : (
            <img src="/assets/images/icon-sun.svg" alt="Light Mode" />
          )}

        </ThemeToggle>
      }
    </Header>
  )
}