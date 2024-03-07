import React, { useState } from "react";

function ListOfCarObjects() {
  const [cars, setCars] = useState([]);

  const [year, setCarYear] = useState(new Date().getFullYear());
  const [make, setCarMake] = useState("");
  const [model, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: year,
      make: make,
      model: model,
    };
    console.log(newCar);
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear())
    setCarMake("")
    setCarModel("")
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }
  function handleRemoveCar(index){
    setCars(cars.filter((_, i) => i != index));
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>
        ))}
      </ul>

      <input type="number" value={year} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={make}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />
      <br />
      <input
        type="text"
        value={model}
        onChange={handleModelChange}
        placeholder="Enter car Model"
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default ListOfCarObjects;
