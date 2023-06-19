import React, { useMemo, useState } from "react";
import { expensiveCalculation } from "./resource";

const UseMemo = ({}) => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);
  const memoizedValue = useMemo(() => {
    console.log("inside use memo");
    return expensiveCalculation(count);
  }, [count]);
  return (
    <div>
      <button onClick={() => setAnotherCount((count) => count + 1)}>
        increment
      </button>{" "}
      {memoizedValue}
      {anotherCount}
    </div>
  );
};

export { UseMemo };
