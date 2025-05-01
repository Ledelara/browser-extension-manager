import { Button } from "../../../StyledComponents/Button/Button";
import { Paragraph } from "../../../StyledComponents/Paragraph/Paragraph";
import "./ExtensionFilter.css";

interface ExtensionFilterProps {
  filter: string;
  onFilterChange: (newFilter: string) => void;
}

export default function ExtensionFilter({
  filter,
  onFilterChange,
}: ExtensionFilterProps) {

  return (
    <div className="extension-filter">
      <Paragraph>Extension List</Paragraph>
      <div className="extension-filter__button-container">
        <Button
          primary
          active={filter === "all"}
          onClick={() => onFilterChange("all")}
        >
          All
        </Button>
        <Button
          primary
          active={filter === "active"}
          onClick={() => onFilterChange("active")}
        >
          Active
        </Button>
        <Button
          primary
          active={filter === "inactive"}
          onClick={() => onFilterChange("inactive")}
        >
          Inactive
        </Button>
      </div>
    </div>
  );
}
