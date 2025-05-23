import styled from "styled-components";

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.toggleBg};
  cursor: pointer;
  border: none;
`

export { ThemeToggle };