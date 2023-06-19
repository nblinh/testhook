import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  console.log("begin component", count);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("inside useEffect");
  }, [count]);

  useEffect(() => {
    console.log("seconde use effect");
  }, []);

  useEffect(() => {
    console.log("third use effect");
  });

  return (
    <div>
      {console.log("rending")}
      <button onClick={increment}>Increment</button>
      {count}
    </div>
  );
};

export { UseEffect };
