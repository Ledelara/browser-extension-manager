import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.bodyBg};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`

export { Card };