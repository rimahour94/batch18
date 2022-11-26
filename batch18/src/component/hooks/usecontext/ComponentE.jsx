import React, { useContext } from "react";
import { InstituteName, Course } from "./HooksUseContext";

const ComponentE = () => {
  const instuteName = useContext(InstituteName);
  const courseName = useContext(Course);
  return (
    <div>
      <h2> ComponentE </h2>
      <h3>{instuteName}</h3>
      <h3>{courseName?.name}</h3>
      {/* <h3>Institute Name {}</h3> */}
      {/* <InstituteName.Consumer>
        {(data) => {
          return (
            <Course.Consumer>
              {(course) => {
                console.log(course);
                return (
                  <>
                    <span>Institute Name::{data}</span>
                    <span>Subject Name::{course?.name}</span>
                  </>
                );
              }}
            </Course.Consumer>
          );
        }}
      </InstituteName.Consumer> */}
    </div>
  );
};

export default ComponentE;
