import React, { useEffect, useState } from "react";
import { getData } from "./resource";

const UseCallback = () => {
  console.log("begin component");
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchText() {
      let data = await getData(count);

      if (data) setData(data);
    }

    fetchText();
  }, [count]);
  return (
    <div>
      {console.log("rending")}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {data}
    </div>
  );
};

export { UseCallback };
