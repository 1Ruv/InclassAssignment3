// Counter.js
import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <div class="counter">
        <p>Count: {count}</p>
        <div className="buttons">
          <button class="add" onClick={increment}>
            +
          </button>
          <button class="minus" onClick={decrement}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
