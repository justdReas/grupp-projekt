import React, { useState } from "react";

const Form = ({ addStaff }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addStaff({ title: inputValue });
  };
  return (
    <form className="ui form" onSubmit={handleFormSubmit}>
      <div className="ui grid center aligned">
        <div className="row">
          <div className="column eight wide">
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter a name..."
            />
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter a surname..."
            />
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter an email address..."
            />
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter a name..."
            />
          </div>
          <div className="column one wide">
            <button
              type="submit"
              className="ui animated button green circular"
              tabindex="0"
            >
              <div className="visible content">Create</div>
              <div className="hidden content">
                <i className="white plus icon"></i>
              </div>
            </button>
          </div>
          <div className="one column row"></div>
          <div className="column one wide">
            <button type="submit" className="ui animated button red circular">
              <div className="visible content">Cancel</div>
              <div className="hidden content">
                <i className="white minus icon"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
