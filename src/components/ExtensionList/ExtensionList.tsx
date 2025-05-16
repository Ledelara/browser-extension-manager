import { useState } from "react";
import ExtensionFilter from "./components/ExtensionFilter/ExtensionFilter";
import CardComponent from "../CardComponent/CardComponent";
import InitialExtensions from '../../data.json';
import "./ExtensionList.css";

export default function ExtensionList() {
  const [filter, setFilter] = useState("all");
  const [extensions, setExtensions] = useState(InitialExtensions);

  const handleActiveChange = (extensionId: number, isActive: boolean) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((ext) =>
        ext.id === extensionId ? { ...ext, isActive } : ext
      )
    );
  };

  const handleRemoveExtension = (extensionId: number) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((ext) => ext.id !== extensionId)
    );
  }

  return (
    <div className="extension-list">
      <ExtensionFilter 
        filter={filter} 
        onFilterChange={(newFilter) => {
          setFilter(newFilter)
          console.log(newFilter)
        }} 
      />
      <div className="extension-list__card-container">
        {extensions.map((extension) => {
          if (filter === "all" || (filter === "active" && extension.isActive) || (filter === "inactive" && !extension.isActive)) {
            return (
              <CardComponent 
                key={extension.id}
                name={extension.name}
                logo={extension.logo}
                description={extension.description}
                isActive={extension.isActive} 
                onClickSwitch={() => handleActiveChange(extension.id, !extension.isActive)}
                onClick={() => handleRemoveExtension(extension.id)} 
              />
            );
          }
          return null;
        })}
        {extensions.length === 0 && (
          <div className="extension-list__no-extensions">
            <p>No extensions available.</p>
          </div>
        )}
      </div>
    </div>
  );
}
