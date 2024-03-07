import React from "react";
import PropTypes from "prop-types";

function ListRendering2(props) {
  const itemsList = props.items;

  const listItems = itemsList.map((item) => (
    <li key={item.id}>
      {item.name} : &nbsp; {item.calorie}
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{props.category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
ListRendering2.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calorie: PropTypes.number,
    })
  ),
};
ListRendering2.defaultProps = {
  category: "Category",
  items: [],
};

export default ListRendering2;
