import React, { Component } from "react";

class OptionSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: [],
      totalAmount: 0,
    };
  }

  handleOptionClick = (option) => {
    const { selectedOptions, totalAmount } = this.state;

    if (selectedOptions.includes(option)) {
      // If the option is already selected, remove it from selectedOptions
      const newSelectedOptions = selectedOptions.filter(
        (item) => item !== option
      );

      this.setState((prevState) => ({
        selectedOptions: newSelectedOptions,
        totalAmount: prevState.totalAmount - 1, // Decrease the total amount
      }));
    } else {
      // If the option is not selected, add it to selectedOptions
      const newSelectedOptions = [...selectedOptions, option];

      this.setState((prevState) => ({
        selectedOptions: newSelectedOptions,
        totalAmount: prevState.totalAmount + 1, // Increase the total amount
      }));
    }
  };

  render() {
    const { selectedOptions } = this.state;

    return (
      <div>
        <div className="amount">Total Amount: {this.state.totalAmount}</div>
        <div className="store">
          {selectedOptions.map((option, index) => (
            <label key={index}>
              <input type="checkbox" defaultChecked />
              {option}
            </label>
          ))}
        </div>
        <div className="element">
          <h5>All</h5>
          {[
            "option 1",
            "option 2",
            "option 3",
            "option 4",
            "option 5",
            "option 6",
            "option 7",
            "option 8",
            "option 9",
          ].map((option, index) => (
            <div key={index} onClick={() => this.handleOptionClick(option)}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  readOnly
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default OptionSelector;
