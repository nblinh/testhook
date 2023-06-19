import React, { useRef, useState } from "react";
/**
 * The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.
 */
const UseRef = ({}) => {
  console.log("begin component");
  const count = useRef(0);
  const [update, setUpdate] = useState(0);

  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <div>
      {console.log("rendering")}
      <button
        onClick={() => {
          console.log("click", count.current);
          count.current = count.current + 1;
        }}
      >
        Increment
      </button>
      <button onClick={() => setUpdate(count.current)}>show current</button>
      <h1>Render Count: {update}</h1>
      <br></br>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export { UseRef };
