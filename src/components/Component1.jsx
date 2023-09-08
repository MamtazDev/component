/* import React, { useEffect, useState } from "react";
import decrement from "../assets/incre.png";
import increment from "../assets/decre.png";

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
  const [views, setViews] = useState(1);
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

  const handleViewsIncrement = () => {
    setViews(views + 1);
  };
  const handleViewsDecrement = () => {
    if (views == 0) {
      return;
    }
    setViews(views - 1);
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
                  <p>{option} + {views}M</p>
                </div>
              ))}
            </div>
            <div className="all">
              <h6>All</h6>
              <div className="all_options_scroll">
                {allOptions.map((option, index) => (
                  <div className="">
                    <div
                      
                      key={index}
                      className="option"
                    >
                      <div className="checkbox">
                        <div className="inner_box"></div>
                      </div>
                      <div className="op">
                      <div onClick={() => handleClick(index)}>
                          {option}{" "}
                        </div>{" "}
                        <div className="ppppp">+ {views} M</div>
                        <div className="i_d_btn">
                          <button onClick={handleViewsIncrement}>
                            <img
                              className="img-fluid p-0 m-0"
                              src={increment}
                              alt=""
                            />
                          </button>{" "}
                          <button onClick={handleViewsDecrement}>
                            <img
                              className="img-fluid p-0 m-0"
                              src={decrement}
                              alt=""
                            />
                          </button>
                        </div>{" "}
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
 */

import React, { useEffect, useState } from "react";
import decrement from "../assets/incre.png";
import increment from "../assets/decre.png";

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

  // Create an object to store the views for each option
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
                    <div key={index} className="option">
                      <div className="checkbox">
                        <div className="inner_box"></div>
                      </div>
                      <div className="op">
                        <div onClick={() => handleClick(index)}>{option}</div>{" "}
                        <div className="ppppp">+ {optionViews[option]} M</div>
                        <div className="i_d_btn">
                          <button onClick={() => handleViewsIncrement(option)}>
                            <img
                              className="img-fluid p-0 m-0"
                              src={increment}
                              alt=""
                            />
                          </button>{" "}
                          <button onClick={() => handleViewsDecrement(option)}>
                            <img
                              className="img-fluid p-0 m-0"
                              src={decrement}
                              alt=""
                            />
                          </button>
                        </div>{" "}
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
