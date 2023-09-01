import React, { useState } from 'react';

const Component1 = () => {
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

  const [newArray, setNewArray] = useState([]);

  const handleClick = (index) => {
    const selectedOption = options[index];
    // Remove the selected option from options array
    const updatedOptions = options.filter((_, i) => i !== index);
    // Add the selected option to newArray
    setOptions(updatedOptions);
    setNewArray([...newArray, selectedOption]);
  };

    return (
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
    );
};

export default Component1;