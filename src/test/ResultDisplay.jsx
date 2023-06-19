import React, { useState } from "react";

const ResultDisplay = ({ getNewResult }) => {
  const [result, setResult] = useState(null);

  const handleClick = () => {
    setResult(() => getNewResult());
  };
  return (
    <div>
      <button id="button" onClick={handleClick}>
        Click
      </button>
      {result && <span id="result">{result}</span>}
    </div>
  );
};

export { ResultDisplay };
