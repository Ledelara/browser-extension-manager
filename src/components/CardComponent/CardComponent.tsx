import { Button } from "../StyledComponents/Button/Button";
import { Card } from "../StyledComponents/Card/Card";
import { Paragraph } from "../StyledComponents/Paragraph/Paragraph";
import { StyledSwitch, SwitchInput, SwitchSlider, SwitchWrapper } from "../StyledComponents/Switch/Switch";
import { Text } from "../StyledComponents/Text/Text";
import "./CardComponent.css";

interface CardComponentProps {
  name: string;
  logo: string;
  description: string;
  isActive: boolean;
}

export default function CardComponent({ name, logo, description, isActive }: CardComponentProps) {
  return (
    <Card>
      <div className="card-component">
        <div className="card-component__extension-header">
          <img src={logo} alt={`${name} logo`} className="card-component__logo" />
          <div className="card-component__text-container">
            <Paragraph className="card-component__name">{name}</Paragraph>
            <Text className="card-component__description">{description}</Text>
          </div>
        </div>

        <div className="card-component__status-container">
          <Button className="card-component__button" onClick={() => alert("Button clicked!")} active={false}>
            Remove
          </Button>
          <StyledSwitch checked={isActive}>
            <SwitchWrapper>
              <SwitchInput type="checkbox" checked={isActive} readOnly />
              <SwitchSlider />
            </SwitchWrapper>
          </StyledSwitch>
        </div>
      </div>
    </Card>
  )
}