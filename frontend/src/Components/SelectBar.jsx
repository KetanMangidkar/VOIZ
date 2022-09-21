import React from "react";
import Select from "react-select";

function SelectBar({ options, onChange, multiSelect }) {
  return (
    <div>
      <h1>Select multiple items</h1>
      <Select
        options={options}
        onChange={onChange}
        isMulti={multiSelect}
        
      ></Select>
    </div>
  );
}

export default SelectBar;
