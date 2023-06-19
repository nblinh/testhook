import React, { useEffect, useState } from "react";

const Blink = ({ children }) => {
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    setInterval(() => setVisibility((visibility) => !visibility), 1000);
  }, []);
  return (
    <div>
      <span
        style={
          visibility ? { visibility: "visible" } : { visibility: "hidden" }
        }
      >
        {children}
      </span>
    </div>
  );
};

export { Blink };
