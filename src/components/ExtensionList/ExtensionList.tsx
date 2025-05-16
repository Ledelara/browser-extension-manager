import { useState } from "react";
import ExtensionFilter from "./components/ExtensionFilter/ExtensionFilter";
import CardComponent from "../CardComponent/CardComponent";
import InitialExtensions from '../../data.json';
import "./ExtensionList.css";

export default function ExtensionList() {
  const [filter, setFilter] = useState("all");
  const [extensions, setExtensions] = useState(InitialExtensions);

  const hhandleActiveChange = (extensionId: number, isActive: boolean) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((ext) =>
        ext.id === extensionId ? { ...ext, isActive } : ext
      )
    );
  };

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
                onClick={() => hhandleActiveChange(extension.id, !extension.isActive)}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
