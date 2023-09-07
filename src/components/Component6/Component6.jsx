/* import React, { useState } from "react";
import "./Component6.css";
export default function Component6() {
  const [open, setOpen] = useState(false);
  const [leftValue, setLeftValue] = useState(0);
  const [rightValue, setRightValue] = useState(0);
  const handleOpen = () => {
    setOpen(!open);
  };
  const leftIncDec = () => {
    if (leftValue === 0) {
      setLeftValue(leftValue + 1);
      setRightValue(rightValue - 1);
    }
    if (rightValue === 0) {
      return;
    }
    setLeftValue(leftValue + 1);
    setRightValue(rightValue - 1);
  };
  const rightIncDec = () => {
    if (rightValue > 90) {
      return;
    }
    if (rightValue === 0) {
      setRightValue(rightValue + 1);
      setLeftValue(leftValue - 1);
    } else {
      setRightValue(rightValue + 1);
      setLeftValue(leftValue - 1);
    }
  };
  return (
    <div>
      <div className={`${!open ? "component_four" : "component_full_six"}`}>
        <div onClick={handleOpen} className="heading">
          <p className="title">Component Title 6</p>
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
                  // defaultValue={startValue}
                  // onChange={handleStartInputChange}
                />
              </li>
              <li>
                <button className="angle_btn_design" onClick={leftIncDec}>
                  <i className="fas fa-angle-left left-arrow-design"></i>
                </button>
              </li>
              <li>
                {" "}
                <button className="angle_btn_design" onClick={rightIncDec}>
                  <i className="fas fa-angle-right left-arrow-design"></i>
                </button>
              </li>
              <li>
                <input
                  type="text"
                  className="text_input"
                  // defaultValue={endValue}
                  // onChange={handleEndInputChange}
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
  const [count, setCount] = useState(1);

  const handleOpen = () => {
    setOpen(!open);
  };

  const updateValues = (value) => {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      setLeftValue(value);
      setRightValue((100 - parsedValue).toString());
      setCount(parsedValue);
    } else {
      setLeftValue("");
      setRightValue("");
      setCount(1);
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
          <p className="title">Component Title 6</p>
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
                <button className="angle_btn_design" onClick={leftIncDec}>
                  <i className="fas fa-angle-left left-arrow-design"></i>
                </button>
              </li>
              <li>
                <button className="angle_btn_design" onClick={rightIncDec}>
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
              <li style={{ marginRight: "4px" }}>
                % Lorem Ip
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
