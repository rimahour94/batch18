import { useState } from "react";
function HooksUseState() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prev) => {
      console.log(prev);
      return prev - 1;
    });
  };

  return (
    <>
      <h2>USE STATE Hooks</h2>
      <h3>{count}</h3>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default HooksUseState;
