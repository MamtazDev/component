import React, { useEffect, useState } from "react";
export default function Component1() {
  const [show, setShow] = useState(false);
  const initialOptions = [
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
  ];
  const [originalOptions, setOriginalOptions] = useState(initialOptions);
  const [allOptions, setAllOptions] = useState(originalOptions);
  const [pickedOptions, setPickedOptions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [optionViews, setOptionViews] = useState(
    initialOptions.reduce((acc, option) => {
      acc[option] = 1; // Initialize views for each option to 1
      return acc;
    }, {})
  );

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
  const handleViewsIncrement = (option) => {
    const updatedOptionViews = { ...optionViews };
    updatedOptionViews[option] += 1;
    setOptionViews(updatedOptionViews);
  };

  const handleViewsDecrement = (option) => {
    const updatedOptionViews = { ...optionViews };
    if (updatedOptionViews[option] > 1) {
      updatedOptionViews[option] -= 1;
      setOptionViews(updatedOptionViews);
    }
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
          <div className="scroll_bar">
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
                  <p>
                    {option} + {optionViews[option]}M
                  </p>
                </div>
              ))}
            </div>
            <div className="all">
              <h6>All</h6>
              <div className="all_options_scroll">
                {allOptions.map((option, index) => (
                  <div className="" key={index}>
                    <div key={index} onClick={() => handleClick(index)} className="option">
                      <div className="checkbox">
                        <div className="inner_box"></div>
                      </div>
                      <div className="op">
                        <div onClick={() => handleClick(index)}>{option}</div>{" "}
                        <div className="ppppp">+ {optionViews[option]} M</div>
                        <div>
                          <div className="i_d_btn">
                            <button
                              onMouseOver={() => handleViewsIncrement(option)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                              >
                                <path
                                  d="M5.3902 0.162908L9.84025 4.70779C9.94325 4.8129 10 4.95323 10 5.10285C10 5.25247 9.94325 5.39279 9.84025 5.49791L9.51261 5.83261C9.29911 6.0504 8.95212 6.0504 8.73895 5.83261C6.68799 3.73798 3.31201 3.74221 1.26105 5.83684C1.15804 5.94196 1.02072 6 0.874302 6C0.727717 6 0.590401 5.94196 0.487312 5.83684L0.159754 5.50214C0.0567474 5.39694 0 5.2567 0 5.10708C0 4.95746 0.0567474 4.81714 0.159754 4.71202L4.61386 0.162908C4.7172 0.0575416 4.85516 -0.00033066 5.00183 1.22505e-06C5.14906 -0.000330648 5.28695 0.0575417 5.3902 0.162908Z"
                                  fill="#5E6E78"
                                  fill-opacity="0.8"
                                />
                              </svg>
                            </button>{" "}
                            <div onMouseOver={() => handleViewsDecrement(option)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                              >
                                <path
                                  d="M4.6098 5.83709L0.159755 1.29221C0.0567475 1.1871 -2.90466e-08 1.04677 -2.48947e-08 0.897152C-2.07429e-08 0.74753 0.0567475 0.607207 0.159755 0.50209L0.487394 0.167391C0.700889 -0.0503998 1.04788 -0.0503998 1.26105 0.167391C3.31201 2.26202 6.68799 2.25779 8.73895 0.163157C8.84196 0.0580394 8.97928 6.18285e-07 9.1257 6.28367e-07C9.27228 6.38461e-07 9.4096 0.0580394 9.51269 0.163157L9.84025 0.497856C9.94325 0.603056 10 0.743296 10 0.892918C10 1.04254 9.94325 1.18286 9.84025 1.28798L5.38613 5.83709C5.2828 5.94246 5.14484 6.00033 4.99817 6C4.85094 6.00033 4.71305 5.94246 4.6098 5.83709Z"
                                  fill="#5E6E78"
                                  fill-opacity="0.3"
                                />
                              </svg>
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
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
