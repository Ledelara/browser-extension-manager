import styled from "styled-components";

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${props => props.primary ? 'var(--red-500)' : 'var(--neutral-100)'};
  color: ${props => props.primary ? 'white' : 'var(--neutral-900)'};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--red-400)' : 'var(--neutral-200)'};
  }
`;

export { Button };
