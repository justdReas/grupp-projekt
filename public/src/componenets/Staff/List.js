import React from "react";
import Staff from "./Staff";

const List = ({ list }) => {
  const renderedList = list.map((item) => (
    <Staff title={item.title} surname={item.surname} key={item.title} />
  ));
  return <div className="ui grid center aligned">{renderedList}</div>;
};

export default List;
