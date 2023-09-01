import React, { useState } from "react";

const App = () => {
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

  const handleClick = (index) => {
    const selectedOption = options[index];
    // Remove the selected option from options array
    const updatedOptions = options.filter((_, i) => i !== index);
    // Add the selected option to newArray
    setOptions(updatedOptions);
    setNewArray([...newArray, selectedOption]);
  };
  const handleClick2 = (sectionIndex, optionIndex) => {
    // Calculate the actual index within the original options array
    const index = sectionIndex * 5 + optionIndex;

    const selectedOption = options[index];
    const updatedActiveOptions = [...activeOptions];
    updatedActiveOptions[index] = true;

    setNewArray([...newArray, selectedOption]);
    setActiveOptions(updatedActiveOptions);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="component">
            <div onClick={() => setShow(!show)} className="title">
              <p>
                Component Title 1{" "}
                {newArray.length > 0 && <span>({newArray.length})</span>}
              </p>
              <i className={`${show && "rotate"} fa-solid fa-chevron-down`}></i>
            </div>
            {show && (
              <div>
                <div className="picked">
                  <h6>Picked</h6>
                  {newArray.map((option, index) => (
                    <div key={index} className="option">
                      <div className="checkbox">
                        <div className="inner_box"></div>
                      </div>
                      <p>{option}</p>
                    </div>
                  ))}
                </div>
                <div className="all">
                  <h6>All</h6>
                  {options.map((option, index) => (
                    <div
                      onClick={() => handleClick(index)}
                      key={index}
                      className="option"
                    >
                      <div className="checkbox">
                        {" "}
                        <div className="inner_box"></div>
                      </div>
                      <p>{option}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="component">
            <div onClick={() => setShow(!show)} className="title">
              <p>
                Component Title 1{" "}
                {newArray.length > 0 && <span>({newArray.length})</span>}
              </p>
              <i className={`${show && "rotate"} fa-solid fa-chevron-down`}></i>
            </div>
            {show && (
              <div>
                <div className="row">
                  <div className="col-6">
                    <div className="all">
                      <h6>Section 1</h6>
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
                          <p>{option}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="all">
                      <h6>Section 2</h6>{" "}
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
                          <p>{option}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
