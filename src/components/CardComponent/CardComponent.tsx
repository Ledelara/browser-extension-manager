import { Button } from "../StyledComponents/Button/Button";
import { Card } from "../StyledComponents/Card/Card";
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
            <h2 className="card-component__name">{name}</h2>
            <p className="card-component__description">{description}</p>
          </div>
        </div>

        <div className="card-component__status-container">
          <Button className="card-component__button" onClick={() => alert("Button clicked!")} active={false}>
            Remove
          </Button>
          <label className="switch">
            <input type="checkbox" checked={isActive} readOnly />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </Card>
  )
}