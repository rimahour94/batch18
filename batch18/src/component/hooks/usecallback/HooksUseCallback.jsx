import React, { useState, useCallback, useMemo } from "react";
import Buttons from "./children/Buttons";
import Count from "./children/Count";
import Title from "./children/Title";
function HooksUseCallback() {
  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  const isElgigible = useMemo(() => {
    let i = 0;
    while (i <= 2000000000) i++;
    return age >= 18;
  }, [age]);

  return (
    <>
      <Title title={"Age & salary "} />
      <Count count={age} />
      {isElgigible ? (
        <span> eligible for vote</span>
      ) : (
        <span>not eligible for vote</span>
      )}
      <Buttons handleClick={incrementAge}>Increment Age </Buttons>
      <Count count={salary} />
      <Buttons handleClick={incrementSalary}>Increment Salary </Buttons>
    </>
  );
}

export default HooksUseCallback;
