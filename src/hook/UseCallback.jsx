import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";
import { getData } from "./resource";

/*
useCallback is a React Hook that lets you cache a function definition between re-renders.

normally when a component is re render, all the child component will be re render.
some time, the function we pass to the child is heavy to execute, so we  want to the child component
skip rerender if the props are the same as the last render. We use call back to cache the function
and use memo to remember the child component
*/
const UseCallback = () => {
  console.log("begin component");
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);

  const fetchText = useCallback(async () => {
    console.log("inside fetchText");
    return await getData(count);
  }, [count]);

  const increment = useCallback(() => {
    setCount((count) => count + 1); //when use updater, we don't need add account to array dependencies
  }, []);

  return (
    <div>
      {console.log("rending")}
      <ChildComponent
        fetchText={fetchText}
        increment={increment}
        count={count}
      />
      <br />
      <button onClick={() => setAnotherCount(anotherCount + 1)}>
        Increment AnotherCount
      </button>
      {anotherCount}
    </div>
  );
};

export { UseCallback };
