import React, { useEffect, useState } from "react";
export default function Component1() {
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
  const [allOptions, setAllOptions] = useState(originalOptions);
  const [pickedOptions, setPickedOptions] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText === "") {
      const unpickedOptions = originalOptions.filter(
        (option) => !pickedOptions.includes(option)
      );
      setAllOptions(unpickedOptions);
    } else {
      const filteredOptions = originalOptions.filter(
        (option) =>
          !pickedOptions.includes(option) &&
          option.toLowerCase().includes(searchText.toLowerCase())
      );
      setAllOptions(filteredOptions);
    }
  }, [searchText, pickedOptions, originalOptions]);

  const handleClick = (index) => {
    const selectedOption = allOptions[index];
    const updatedOptions = allOptions.filter((_, i) => i !== index);
    setAllOptions(updatedOptions);
    if (!pickedOptions.includes(selectedOption)) {
      setPickedOptions([...pickedOptions, selectedOption]);
    }
  };

  const handleRemove = (index) => {
    const removedOption = pickedOptions[index];
    const updatedPickedOptions = pickedOptions.filter((_, i) => i !== index);
    setPickedOptions(updatedPickedOptions);
    if (!allOptions.includes(removedOption)) {
      const updatedOptions = [...allOptions, removedOption].sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)[0]);
        const numB = parseInt(b.match(/\d+/)[0]);
        return numA - numB;
      });

      setAllOptions(updatedOptions);
    }
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };
  return (
    <>
      <div className="component">
        <div onClick={() => setShow(!show)} className="title">
          <p>
            Component Title 1
            {pickedOptions.length > 0 && (
              <span className="ml_3">({pickedOptions.length})</span>
            )}
          </p>
          <i className={`${show && "rotate"} fa-solid fa-chevron-down`}></i>
        </div>
        {show && (
          <div>
            <input
              type="text"
              className="search_input"
              onChange={handleSearch}
              value={searchText}
            />
            <div className="picked">
              <h6>Picked</h6>
              {pickedOptions.map((option, index) => (
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
                {allOptions.map((option, index) => (
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
    </>
  );
}
