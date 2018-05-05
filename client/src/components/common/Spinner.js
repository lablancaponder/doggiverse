import React from "react";
import spinner from "./purplespinner.gif";

export default () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "50px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};
