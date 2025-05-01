import { useState } from "react";
import ExtensionFilter from "./components/ExtensionFilter/ExtensionFilter";
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
    </div>
  );
}
