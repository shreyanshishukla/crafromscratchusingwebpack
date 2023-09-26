import React, { useState } from "react";
import "../App.css";
export default () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <div>Counter {counter}</div>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter((counter) => counter - 1)}>
        Decrement
      </button>
    </div>
  );
};
