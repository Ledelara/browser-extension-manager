import styled from "styled-components";

const Text = styled.p`
  font-size: 14px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.textColor};
`

export { Text };