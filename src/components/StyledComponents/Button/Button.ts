import styled from "styled-components";

interface ButtonProps {
  primary?: boolean;
  active?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ active, theme }) =>
    active ? theme.buttonActiveBg : theme.buttonBg};

  color: ${({ active, theme }) =>
    active ? theme.buttonActiveText : theme.buttonText};

  border: 1px solid
    ${({ active, theme }) =>
      active ? theme.buttonActiveBorder : theme.buttonBorder};

  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.buttonActiveBg : theme.buttonHover};
  }
`;

export { Button };
