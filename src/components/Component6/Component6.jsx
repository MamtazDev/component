import React, { useState } from "react";
import "./Component6.css";
export default function Component6() {
  const [open, setOpen] = useState(false);
  const [leftValue, setLeftValue] = useState(90);
  const [rightValue, setRightValue] = useState(10);
  const handleOpen = () => {
    setOpen(!open);
  };
  const leftIncDec = () => {
      if (leftValue === 0) {
        setLeftValue(leftValue + 10);
        setRightValue(rightValue - 10);
    }
    if (rightValue === 0) {
      return;
    }
    setLeftValue(leftValue + 10);
    setRightValue(rightValue - 10);
  };
  const rightIncDec = () => {
    if ((rightValue > 90)) {
      return;
    }
    if (rightValue === 0) {
      setRightValue(rightValue + 10);
      setLeftValue(leftValue - 10);
    }
   else{
    setRightValue(rightValue + 10);
    setLeftValue(leftValue - 10);
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
          <ul className="ul_design">
            <li>Lorem Ip </li>
            <li>
              <input
                type="text"
                className="text_input "
                style={{ marginLeft: "5px" }}
                value={leftValue}
              />
            </li>
            <li>
              <button
                className="angle_btn_design"
                onClick={leftIncDec}
              >
                <i className="fas fa-angle-left left-arrow-design"></i>
              </button>
              <button className="angle_btn_design" onClick={rightIncDec}>
                <i className="fas fa-angle-right left-arrow-design"></i>
              </button>
            </li>
            <li>
              <input type="text" className="text_input" value={rightValue} />
            </li>
            <li> % Lorem Ip</li>
          </ul>
        )}
      </div>
    </div>
  );
}
