import { useState } from "react";
import ExtensionFilter from "./components/ExtensionFilter/ExtensionFilter";
import CardComponent from "../CardComponent/CardComponent";
import Extensions from '../../data.json';
import "./ExtensionList.css";

export default function ExtensionList() {
  const [filter, setFilter] = useState("all");

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
        {Extensions.map((extension) => {
          if (filter === "all" || (filter === "active" && extension.isActive) || (filter === "inactive" && !extension.isActive)) {
            return (
              <CardComponent 
                key={extension.id}
                name={extension.name}
                logo={extension.logo}
                description={extension.description}
                isActive={extension.isActive}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
