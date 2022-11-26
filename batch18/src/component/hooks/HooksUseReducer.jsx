import react, { useReducer } from "react";

const HooksUseReducer = () => {
  const initialState = 0;

  const reducer = (state = initialState, action) => {
    switch (action) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      case "Reset":
        return 0;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>{count}</h2>
      <button
        onClick={() => {
          dispatch("Increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("Decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("Reset");
        }}
      >
        Reset
      </button>
    </>
  );
};

export default HooksUseReducer;
