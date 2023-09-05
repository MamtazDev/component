import React, { useEffect, useState } from "react";
import "./Component4.css";
export default function Component4() {
  const [open, setOpen] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [startValue, setStartValue] = useState(10);
  const [endValue, setEndValue] = useState(15);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const newOptions = [];
    for (let i = startValue; i <= endValue; i++) {
      newOptions.push(`Option ${i}`);
    }
    setOptions(newOptions);
  }, [startValue, endValue]);

  const handleOpen = () => {
    setOpen(!open);
  };

  // input values
  const handleStartInputChange = (e) => {
    setStartValue(parseInt(e.target.value));
  };
  const handleEndInputChange = (e) => {
    setEndValue(parseInt(e.target.value));
  };
  const handleOptionsOpen = () => {
    setOptionsOpen(!optionsOpen);
  };

  return (
    <>
      <div className={`${!open ? "component_four" : "component_full_four"}`}>
        <div onClick={handleOpen} className="heading">
          <p className="title">Component Title 4</p>
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
                  onChange={handleStartInputChange}
                />
              </li>
              <li>to</li>
              <li>
                <input
                  type="text"
                  className="text_input"
                  defaultValue={endValue}
                  onChange={handleEndInputChange}
                />
              </li>
              <li>lorem</li>
              <li>
                <div onClick={handleOptionsOpen} className="options">
                  {optionsOpen ? (
                    <div>
                      {options.map((option) => (
                        <option> {option}  </option>
                      ))}
                    </div>
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
