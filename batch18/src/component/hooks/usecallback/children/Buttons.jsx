import React, { memo } from "react";
import { Button } from "@mui/material";
const Buttons = (props) => {
  console.log(props, "Button");
  return (
    <div>
      <Button color="primary" variant="contained" onClick={props.handleClick}>
        {props.children}
      </Button>
    </div>
  );
};

export default memo(Buttons);
