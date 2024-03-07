import React from "react";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    // setCounter(counter + 1);


    // Takes the current state to calculate the next state
    // React puts your updater function in a queue(waiting in line)
    // During the next render, it will call them in the same order.
    setCounter(prevCounter => prevCounter+3);
    // setCounter(prevCounter => prevCount+1);
    // setCounter(prevCounter => prevCount+1);
  };

  const resetCount = () => {
    setCounter(prevCounter => prevCounter = 0);
  };

  const decrementCounter = () => {
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
  };

  return (
    <div className="container">
      <h1 className="counter">{counter}</h1>
      <button className="button" onClick={incrementCounter}>
        Increment
      </button>
      <button className="button" onClick={resetCount}>
        Reset
      </button>
      <button className="button" onClick={decrementCounter}>
        Decrement
      </button>
    </div>
  );
}
