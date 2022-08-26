import React, { useState, useEffect, KeyboardEvent } from "react";
import "./ToggleUnitTemp.css";
export default function ToggleUnitTemp() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter' || e.key === " ")
      toggleState();
  }

  return (
    <label 
      className="toggle-unit-temp toggle-wrapper"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      htmlFor="toggle-unit-temp">
      <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
        <input
          id="toggle-unit-temp"
          name="toggle"
          type="checkbox"
          onChange={toggleState}
        />
        <div className="toggle-selector">
          <div className="wrapper-icons">
          </div>
        </div>
      </div>
    </label>
  );
}
