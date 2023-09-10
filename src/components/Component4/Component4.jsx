
import React, { useEffect, useState } from "react";
import "./Component4.css";

export default function Component4() {
  const [open, setOpen] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [startValue, setStartValue] = useState(10);
  const [endValue, setEndValue] = useState(15);
  const [selectedOptions, setSelectedOptions] = useState(["Option 1"]);
  const [options, setOptions] = useState(["Option 2"]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOptionsOpen = () => {
    setOptionsOpen(!optionsOpen);
  };

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      if (option !== "Option 1") {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
      }
    } else {
      if (selectedOptions.length < 2) {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
  };

  useEffect(() => {
    if (selectedOptions.length === 0) {
      document.title = "Component Title 4";
    } else {
      document.title = `Component Title 4 (${selectedOptions.length})`;
    }
  }, [selectedOptions]);

  return (
    <>
      <div className={`${!open ? "component_four" : "component_full_four"}`}>
        <div onClick={handleOpen} className="heading">
          <p className="title">
            Component Title 4
            {open && (
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
            <ul className="ul_design">
              <li>From </li>
              <li>
                <input
                  type="text"
                  className="text_input"
                  defaultValue={startValue}
                />
              </li>
              <li>to</li>
              <li>
                <input
                  type="text"
                  className="text_input"
                  defaultValue={endValue}
                />
              </li>
              <li style={{ marginRight: "4px" }}>lorem</li>
              <li>
                <div onClick={handleOptionsOpen} className="options">
                  {optionsOpen ? (
                    <>
                      Option 1
                      {optionsOpen ? (
                        <i className="m-2 fas fa-angle-down rotate"></i>
                      ) : (
                        <i className="m-2 fas fa-angle-down"></i>
                      )}
                      {options.map((option) => (
                        <option
                          key={option}
                          className={selectedOptions.includes(option) ? "selected" : ""}
                          onClick={() => handleOptionSelect(option)}
                        >
                          {option}
                        </option>
                      ))}
                    </>
                  ) : (
                    <p>
                      Option 1
                      {optionsOpen ? (
                        <i className="m-2 fas fa-angle-down rotate"></i>
                      ) : (
                        <i className="m-2 fas fa-angle-down"></i>
                      )}
                    </p>
                  )}
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
