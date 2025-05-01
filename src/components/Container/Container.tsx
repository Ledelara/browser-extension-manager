import { Container } from "../StyledComponents/Container/Container"

interface ContainerProps {
  children: React.ReactNode
}

export default function ContainerComponent({ children }: ContainerProps) {
  return (
    <Container>
      {children}
    </Container>
  )
}