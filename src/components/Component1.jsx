import React, { useState } from "react";
const Component1 = () => {
  const [show, setShow] = useState(false);
  const [originalOptions, setOriginalOptions] = useState([
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
  const [options, setOptions] = useState(originalOptions);
  const [newArray, setNewArray] = useState([]);
  const handleClick = (index) => {
    const selectedOption = options[index];
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
    if (!newArray.includes(selectedOption)) {
      setNewArray([...newArray, selectedOption]);
    }
  };

  const handleRemove = (index) => {
    const removedOption = newArray[index];
    const updatedNewArray = newArray.filter((_, i) => i !== index);
    setNewArray(updatedNewArray);
    if (!options.includes(removedOption)) {
      const updatedOptions = [...options, removedOption].sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)[0]);
        const numB = parseInt(b.match(/\d+/)[0]);
        return numA - numB;
      });

      setOptions(updatedOptions);
    }
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const filteredOptions = originalOptions.filter((option) =>
      option.toLowerCase().includes(searchText.toLowerCase())
    );
    setOptions(searchText ? filteredOptions : originalOptions);
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
             <input
                  type="text"
                  className="search_input"
                  onChange={handleSearch}
                />
          <div className="picked">
            <h6>Picked</h6>
            {newArray.map((option, index) => (
              <div
                key={index}
                className="option"
                onClick={() => handleRemove(index)}
              >
                <div className="checkbox">
                  <div className="inner_box"></div>
                </div>
                <p>{option}</p>
              </div>
            ))}
          </div>
          <div className="all">
            <h6>All (Sorted)</h6>
            <div className="all_options_scroll">
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
        </div>
      )}
    </div>
  );
};

export default Component1;
/* import React, { useState } from "react";
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
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
    if (!newArray.includes(selectedOption)) {
      setNewArray([...newArray, selectedOption]);
    }
  };

  const handleRemove = (index) => {
    const removedOption = newArray[index];
    const updatedNewArray = newArray.filter((_, i) => i !== index);
    setNewArray(updatedNewArray);
    if (!options.includes(removedOption)) {
      const updatedOptions = [...options, removedOption].sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)[0]);
        const numB = parseInt(b.match(/\d+/)[0]);
        return numA - numB;
      });

      setOptions(updatedOptions);
    }
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const filteredOptions = originalOptions.filter((option) =>
      option.toLowerCase().includes(searchText.toLowerCase())
    );
    setOptions(searchText ? filteredOptions : originalOptions);
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
             <input
                  type="text"
                  className="search_input"
                  // onChange={handleSearch}
                />
          <div className="picked">
            <h6>Picked</h6>
            {newArray.map((option, index) => (
              <div
                key={index}
                className="option"
                onClick={() => handleRemove(index)}
              >
                <div className="checkbox">
                  <div className="inner_box"></div>
                </div>
                <p>{option}</p>
              </div>
            ))}
          </div>
          <div className="all">
            <h6>All (Sorted)</h6>
            <div className="all_options_scroll">
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
        </div>
      )}
    </div>
  );
};

export default Component1; */

/* import React, { useState } from "react";
const Component1 = () => {
  const [show, setShow] = useState(false);
  const [originalOptions, setOriginalOptions] = useState([
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
  const [options, setOptions] = useState(originalOptions);
  const [newArray, setNewArray] = useState([]);

  const handleClick = (index) => {
    const selectedOption = options[index];
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);

    // Check if the selected option is in newArray
    if (!newArray.includes(selectedOption)) {
      setNewArray([...newArray, selectedOption]); // Add the option to newArray
    }
  };

  const handleRemove = (index) => {
    const removedOption = newArray[index];
    const updatedNewArray = newArray.filter((_, i) => i !== index);
    setNewArray(updatedNewArray);
    if (!options.includes(removedOption)) {
      const updatedOptions = [...options, removedOption].sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)[0]);
        const numB = parseInt(b.match(/\d+/)[0]);
        return numA - numB;
      });

      setOptions(updatedOptions); 
    }
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const filteredOptions = originalOptions.filter((option) =>
      option.toLowerCase().includes(searchText.toLowerCase())
    );
    setOptions(searchText ? filteredOptions : originalOptions);
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
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        className="search-input"
      />
      {show && (
        <div>
          <div className="picked">
            <h6>Picked</h6>
            {newArray.map((option, index) => (
              <div key={index} className="option">
                <div className="checkbox">
                  <div className="inner_box" onClick={() => handleRemove(index)}></div>
                </div>
                <p>{option}</p>
              </div>
            ))}
          </div>
          <div className="all">
            <h6>All (Sorted)</h6>
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
 */