import { useState } from "react";
import { Header } from "../StyledComponents/Header/Header";
import './Header.css';

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
        <div className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? (
            <img src="/assets/images/icon-moon.svg" alt="Dark Mode" />
          ) : (
            <img src="/assets/images/icon-sun.svg" alt="Light Mode" />
          )}
        </div>
      }
    </Header>
  )
}