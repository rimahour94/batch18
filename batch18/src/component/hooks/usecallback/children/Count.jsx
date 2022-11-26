import React, { memo } from "react";

const Count = (props) => {
  console.log(props, "Count");
  return (
    <div>
      <h2 style={{ color: "green" }}>{props.count}</h2>
    </div>
  );
};

export default memo(Count);
