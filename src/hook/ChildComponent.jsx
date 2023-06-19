import React, { memo } from "react";

const ChildComponent = ({ fetchText, increment, count }) => {
  fetchText();

  return (
    <div>
      {console.log("rending child component")}
      <button onClick={() => increment()}>Increment Count</button>
      {count}
    </div>
  );
};

export default memo(ChildComponent);
