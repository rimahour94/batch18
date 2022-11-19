import { useState } from "react";
function HooksUseState() {
  const [count, setCount] = useState(0);
  const [arr, setarray] = useState([
    { name: "ABCD", id: "123", city: "Noida" },
    { name: "BCDE", id: "234", city: "Delhi" },
    { name: "CDEF", id: "345", city: "Pune" },
    { name: "DEFG", id: "456", city: "Mumbai" },
  ]);
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

      <ul>
        {arr.map((user) => (
          <div key={user.id}>
            <li>
              <span> {user.name}</span>
              <span>{user.city}</span>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default HooksUseState;
