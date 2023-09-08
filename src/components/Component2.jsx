import React, { useState } from "react";
const Component2 = () => {
  const [show, setShow] = useState(false);

  const [options, setOptions] = useState([
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
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
            Component Title 2{" "}
            {newArray.length > 0 && <span>({newArray.length})</span>}
          </p>
          <i className={`${show && "rotate"} fa-solid fa-chevron-down`}></i>
        </div>
        {show && (
          <div>
            <div className="row">
              <div className="col-6">
                <div className="all">
                  <h6 className="center_section_text">Section 1</h6>
                  {options.slice(0, 5).map((option, index) => (
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
                          padding: activeOptions[index] ? "5px 8px" : "5px 8px",
                          color: activeOptions[index] ? "#5E6E78" : "#5E6E78",
                        }}
                      >
                        {option}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-6">
                <div className="all">
                  <h6 className="center_section_text">Section 2</h6>{" "}
                  {options.slice(5, 10).map((option, index) => (
                    <div
                      onClick={() => handleClick2(1, index)}
                      key={index}
                      className="option"
                    >
                      <div className="checkbox">
                        {" "}
                        <div
                          className={`option ${
                            activeOptions[index + 5] // Add 5 to account for the second section
                              ? "bg-warning w-100 h-100 rounded-1"
                              : "inner_box"
                          }`}
                        ></div>
                      </div>
                      <p
                        className="p_option"
                        style={{
                          background: activeOptions[index + 5]
                            ? "rgba(94, 110, 120, 0.20)"
                            : "rgba(94, 110, 120, 0.10)",
                          padding: activeOptions[index + 5]
                            ? "5px 8px"
                            : "5px 8px",
                          color: activeOptions[index + 5]
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

export default Component2;
