import React, { useState } from "react";

function UpdatingStateOfObject() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(event) {
    // setCar({year: 2025})  // This will nullify the other properties of the car object
    // setCar({...car, year:event.target.value})  // this will change the only year property but for good practice we need to use updater function

    setCar((prevCar) => ({ ...prevCar, year: event.target.value }));
  }
  function handleMakeChange(event) {
    setCar((prevCar) => ({ ...prevCar, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((prevCar) => ({ ...prevCar, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Your Favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}

export default UpdatingStateOfObject;
