import React, { useEffect, useState } from "react";
import "./Component4.css";
export default function Component4() {
  const [open, setOpen] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [startValue, setStartValue] = useState(10);
  const [endValue, setEndValue] = useState(15);
  const [selectedOption, setSelectedOption] = useState(null); // Use null to represent no selection
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState(["Option 1", "Option 2"]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOptionsOpen = () => {
    setOptionsOpen(!optionsOpen);
  };
  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      if (selectedOptions.length < 2) {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
    setSelectedOption(option);
  };
  return (
    <>
      <div className={`${!open ? "component_four" : "component_full_four"}`}>
        <div onClick={handleOpen} className="heading">
           <p className="title">
            component title 4
            {selectedOptions && (
              <span className="ml_3">
                {selectedOptions.length > 0 ? `(${selectedOptions.length})` : ""}
              </span>
            )}
          </p>
          <p>
            {open ? (
              <i className="fas fa-angle-down rotate"></i>
            ) : (
              <i className="fas fa-angle-down"></i>
            )}
          </p>
        </div>
        {open && (
          <div>
            <div className="ul_design">
              <div>From </div>
              <div>
                <input
                  type="text"
                  className="text_input"
                  defaultValue={startValue}
                />
              </div>
              <div>to</div>
              <div>
                <input
                  type="text"
                  className="text_input"
                  defaultValue={endValue}
                />
              </div>
              <div style={{ marginRight: "4px" }}>lorem</div>
              <div>
                <div onClick={handleOptionsOpen} className="options">
                  {selectedOption || "Options"}
                  {optionsOpen ? (
                    <i className="m-2 fas fa-angle-down rotate"></i>
                  ) : (
                    <i className="m-2 fas fa-angle-down"></i>
                  )}
                  {optionsOpen && (
                    <div >
                      {options.map((option) => (
                        <div
                          key={option}
                          className={selectedOption === option ? "selected" : ""}
                          onClick={() => handleOptionSelect(option)}
                          
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
