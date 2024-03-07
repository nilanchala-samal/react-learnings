import React from "react";

function ListRendering() {
  const fruits = [
    { id: 1, name: "Orange", calorie: 95 },
    { id: 2, name: "Mango", calorie: 45 },
    { id: 3, name: "Pineapple", calorie: 105 },
    { id: 4, name: "Coconut", calorie: 67 },
    { id: 5, name: "Banana", calorie: 517 },
  ];

  // fruits.sort();
  // fruits.sort((a,b) => a.name.localeCompare(b.name)); // alphabetical order
  //

  // fruits.sort((a, b) => b.calorie - a.calorie); // sort according to calorie

  // const lowCalFruits = fruits.filter(fruit => fruit.calorie < 100);

  const highCalFruits = fruits.filter(f => f.calorie >= 100);

  const listItems = highCalFruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : &nbsp; <b>{fruit.calorie}</b>
    </li>
  ));

  return <ol>{listItems}</ol>;
}

export default ListRendering;
