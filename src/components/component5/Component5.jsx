import React, { useState } from "react";
import "./Component5.css";
export default function Component5() {
  const [open, setOpen] = useState(false);
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
  ]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [newOptions, setNewOptions] = useState([]);
  const handleFilter = (value) => {
    const newArray = options.filter((i) => i !== value);
    setOptions(newArray);
    setNewOptions((current) => [...current, value]);
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchText.toLowerCase())
    );
    setOptions(filteredOptions);
  };
  return (
    <>
      <div className={`${!open ? "component_four" : "component_full_five"}`}>
        <div onClick={handleOpen} className="heading">
          <p className="title">
            Component Title 5{" "}
            {newOptions.length > 0 && <span>({newOptions.length})</span>}
          </p>
          <p>
            {open ? (
              <i className="fas fa-angle-down rotate"></i>
            ) : (
              <i className="fas fa-angle-down"></i>
            )}
          </p>
        </div>
        {open && (
          <div className="option_design">
            {/* picked */}
            <input
                  type="text"
                  className="search_input"
                  onChange={handleSearch}
                />
            <div className="picked">
              <small
                style={{ textAlign: "left", marginBottom: "4px" }}
                className="picked_heading"
              >
                Picked
              </small>
              {newOptions.map((option, index) => (
                <div key={index} className="all_checkbox">
                  <div className="checkbox">
                    <div className="inner_box"></div>
                  </div>
                  <span className="option_text_design">{option}</span>
                </div>
              ))}
            </div>
            {/*  all element */}
            <div className="search_container all_options">
              <small className="all_heading">All</small>
              <div>
               
                {options.map((option) => (
                  <div
                    className="all_checkbox all_options_hover"
                    onClick={() => handleFilter(option)}
                  >
                    <div className="checkbox">
                      <div className="inner_box"></div>
                    </div>
                    <p className="option_text_design ">{option}</p>
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
