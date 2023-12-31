import React, { useState } from "react";
// import "./Component2.css";
const Component8 = () => {
  const [show, setShow] = useState(false);

  const [options, setOptions] = useState([
    "Option 1",
    "Option 2",
  ]);
  const [activeOptions, setActiveOptions] = useState(options.map(() => false));
  const [newArray, setNewArray] = useState([]);

  const handleClick2 = (sectionIndex, optionIndex) => {
    const index = sectionIndex * 5 + optionIndex;
    const selectedOption = options[index];
    const updatedActiveOptions = [...activeOptions];
    updatedActiveOptions[index] = !updatedActiveOptions[index];

    if (!updatedActiveOptions[index]) {
      const updatedNewArray = newArray.filter(
        (option) => option !== selectedOption
      );
      setNewArray(updatedNewArray);
    } else {
      setNewArray([...newArray, selectedOption]);
    }

    setActiveOptions(updatedActiveOptions);
  };
  return (
    <>
      <div className="component">
        <div onClick={() => setShow(!show)} className="title">
          <p>
            Component Title 8
            <span className="ml_3">
              {newArray.length > 0 && <span>({newArray.length})</span>}
            </span>
          </p>
          <i className={`${show && "rotate"} fa-solid fa-chevron-down`}></i>
        </div>
        {show && (
          <div>
            <div className="row">
              <div className="col-6">
                <div className="all">
                  {options.slice(0, 6).map((option, index) => (
                    <div
                      onClick={() => handleClick2(0, index)}
                      key={index}
                      className="option"
                    >
                      <div className="checkbox">
                        {" "}
                        <div
                          className={`option ${
                            activeOptions[index]
                              ? "bg-warning w-100 h-100 rounded-1"
                              : "inner_box"
                          }`}
                        ></div>
                      </div>
                      <p
                       className="p_option"
                        style={{
                          background: activeOptions[index]
                            ? "rgba(94, 110, 120, 0.20)"
                            : "rgba(94, 110, 120, 0.10)",
                          padding: activeOptions[index]
                            ? "5px 8px"
                            : "5px 8px",
                          color: activeOptions[index]
                            ? "#5E6E78"
                            : "#5E6E78",
                        }}
                      >
                        {option}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Component8;
