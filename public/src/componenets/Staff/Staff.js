import React, { useState, Fragment } from "react";

const Staff = ({ title, surname }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);

  const handleDivDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputKeyDown = (e) => {
    const key = e.keyCode;
    if (key === 13) {
      setValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) {
      setTempValue(value);
      setIsEditing(false);
    }
  };

  const handleInputOnChange = (e) => {
    setTempValue(e.target.value);
  };

  return (
    <div className="row">
      {isEditing ? (
        <div className="column seven wide">
          <div className="ui input fluid">
            <input
              onChange={handleInputOnChange}
              onKeyDown={handleInputKeyDown}
              autoFocus={true}
              value={tempValue}
            />
          </div>
        </div>
      ) : (
        <Fragment>
          <div
            className="column eight wide"
            onDoubleClick={handleDivDoubleClick}
          >
            <h2>{value}</h2>
          </div>
          <div className="column one wide">
            <button className="ui button circular icon green">
              <i className="white check icon"></i>
            </button>
          </div>
          <div className="column one wide">
            <button className="ui button circular icon red">
              <i className="white remove icon"></i>
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Staff;
