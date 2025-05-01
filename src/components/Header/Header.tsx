import { Header } from "../StyledComponents/Header/Header";
import { ThemeToggle } from "../StyledComponents/ThemeToggle/ThemeToggle";

interface HeaderProps {
  themeName: "light" | "dark";
  setThemeName: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

export default function HeaderComponent({ themeName, setThemeName }: HeaderProps) {

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
        <ThemeToggle onClick={() => setThemeName(themeName === "light" ? "dark" : "light")}>
          {themeName === "light" ? (
            <img src="/assets/images/icon-moon.svg" alt="Dark Mode" />
          ) : (
            <img src="/assets/images/icon-sun.svg" alt="Light Mode" />
          )}

        </ThemeToggle>
      }
    </Header>
  )
}