import React from "react";

const WelcomeTitle = ({ user, primary }) => {
  console.log(primary);
  const getUser = user ? user : "";
  return (
    <div>
      {primary && <h1>Welcome {getUser}!</h1>}
      {!primary && <h2>Welcome {getUser}!</h2>}
    </div>
  );
};

export { WelcomeTitle };
