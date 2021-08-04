import React, { useState } from "react";

export const Blueberry = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decrease</button>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
    </>
  );
};
