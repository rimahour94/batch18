import React, { memo } from "react";

const Title = (props) => {
  console.log(props, "Title");
  return (
    <div>
      <h2 style={{ color: "red" }}>{props.title}</h2>
    </div>
  );
};

export default memo(Title);
