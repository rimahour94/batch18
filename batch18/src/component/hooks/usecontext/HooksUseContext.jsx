import React from "react";
import ComponentA from "./ComponentA";
import ComponentE from "./ComponentE";

export const InstituteName = React.createContext();
export const Course = React.createContext();
function HooksUseContext() {
  let subject = {
    name: "REACTJS",
  };
  return (
    <>
      <ComponentA />
      <InstituteName.Provider value={"TRISECT INSTITUTE"}>
        <Course.Provider value={subject}>
          <ComponentE />
        </Course.Provider>
      </InstituteName.Provider>
    </>
  );
}

export default HooksUseContext;
