/* import React, { useState } from "react";
import "./Component6.css";

export default function Component6() {
  const [open, setOpen] = useState(false);
  const [leftValue, setLeftValue] = useState("");
  const [rightValue, setRightValue] = useState("");
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Component Title 6"); // Initial title

  const handleOpen = () => {
    setOpen(!open);
  };

  const updateValues = (value) => {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      setLeftValue(value);
      setRightValue((100 - parsedValue).toString());
      setCount(parsedValue);
      setTitle(`Component Title 6 (1)`); // Always set the title to (1) when there's an input value
    } else {
      setLeftValue("");
      setRightValue("");
      setCount(1);
      setTitle("Component Title 6"); // Reset the title when the input is cleared
    }
  };
  

  const leftIncDec = () => {
    setCount(count + 1);
    updateValues(count + 1);
  };

  const rightIncDec = () => {
    setCount(count + 1);
    updateValues(count + 1);
  };

  return (
    <div>
      <div className={`${!open ? "component_four" : "component_full_six"}`}>
        <div onClick={handleOpen} className="heading">
          <p className="title">{title}</p>
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
              <li>Lorem Ip </li>
              <li>
                <input
                  type="text"
                  className="text_input"
                  value={leftValue}
                  onChange={(e) => updateValues(e.target.value)}
                />
              </li>
              <li>
                <button className="angle_btn_design" onClick={rightIncDec}>
                  <i className="fas fa-angle-left left-arrow-design"></i>
                </button>
              </li>
              <li>
                <button className="angle_btn_design" onClick={leftIncDec}>
                  <i className="fas fa-angle-right left-arrow-design"></i>
                </button>
              </li>
              <li>
                <input
                  type="text"
                  className="text_input"
                  value={rightValue}
                  onChange={(e) => updateValues(100 - parseInt(e.target.value))}
                />
              </li>
              <li style={{ marginRight: "4px" }}>% Lorem Ip</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
 */

import React, { useState } from "react";
import "./Component6.css";

export default function Component6() {
  const [open, setOpen] = useState(false);
  const [leftValue, setLeftValue] = useState("");
  const [rightValue, setRightValue] = useState("");
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Component Title 6"); // Initial title

  const handleOpen = () => {
    setOpen(!open);
  };

  const updateValues = (value) => {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      setLeftValue(value);
      setRightValue((100 - parsedValue).toString());
      setCount(parsedValue);
      setTitle(`Component Title 6 (1)`); // Always set the title to (1) when there's an input value
    } else {
      setLeftValue("");
      setRightValue("");
      setCount(1);
      setTitle("Component Title 6"); // Reset the title when the input is cleared
    }
  };

  const leftIncDec = () => {
    handleIncrement(-1);
  };

  const rightIncDec = () => {
    handleIncrement(1);
  };

  const handleIncrement = (incrementValue) => {
    let newCount = count + incrementValue;
    if (newCount < 0) {
      newCount = 0;
    } else if (newCount > 100) {
      newCount = 100;
    }
    updateValues(newCount.toString());
  };

  return (
    <div>
      <div className={`${!open ? "component_four" : "component_full_six"}`}>
        <div onClick={handleOpen} className="heading">
          <p className="title">{title}</p>
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
              <li>Lorem Ip </li>
              <li>
                <input
                  type="text"
                  className="text_input"
                  value={leftValue}
                  onChange={(e) => updateValues(e.target.value)}
                />
              </li>
              <li>
                <button className="angle_btn_design" onMouseOver={leftIncDec}>
                  <i className="fas fa-angle-left left-arrow-design"></i>
                </button>
              </li>
              <li>
                <button className="angle_btn_design" onMouseOver={rightIncDec}>
                  <i className="fas fa-angle-right left-arrow-design"></i>
                </button>
              </li>
              <li>
                <input
                  type="text"
                  className="text_input"
                  value={rightValue}
                  onChange={(e) => updateValues(100 - parseInt(e.target.value))}
                />
              </li>
              <li style={{ marginRight: "4px" }}>% Lorem Ip</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
