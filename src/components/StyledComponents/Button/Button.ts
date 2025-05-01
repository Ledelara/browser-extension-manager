import styled from "styled-components";

interface ButtonProps {
  primary?: boolean;
  active?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ active }) =>
    active ? 'var(--red-700)' : 'var(--neutral-700)'};
  color: ${({ active }) => (active ? 'var(--neutral-900)' : 'var(--neutral-0)')};
  border:  ${({ active }) => (active ? '1px solid var(--red-700)' : '1px solid var(--neutral-600)')};
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ active }) =>
      active ? 'var(--red-600)' : 'var(--neutral-200)'};
  }
`;

export { Button };
