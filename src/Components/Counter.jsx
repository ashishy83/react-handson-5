import React, { useState } from "react";
import HOCCounter from "./HOCCounter";

const PureCompCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container-2">
        <p className="p1"> HOC Counter</p>
        <p className="p2S">Click the button to Increase the counter</p>
        <button
          className="btn"
          onClick={() => setCounter((counter) => counter + 1)}
        >
          Increment
        </button>
        <p className="cntrvalue">The Counter value is: {counter}</p>

        <ul>
          <li>
            A higher-order component is a function that takes a component and
            returns a new component.
          </li>
          <br />
          <li>
            In HOC Example,created a counter component and added the
            functionality in counter component and returned it in another new
            component.Thus we can reuse the component logic.
          </li>
        </ul>
      </div>
    </>
  );
};

export default HOCCounter(PureCompCounter);
