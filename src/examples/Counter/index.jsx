import { useState } from "react";
import './Counter.css';

function Counter() {
  // let count = 15;
  // count = 20;
  const [count, setCount] = useState(0);
  function decrament() {
    const value = count - 1;
    if (value < 0) {
        alert('Najamnjša dovoljena vrednost je 0!');
    } else {
        setCount(value);
    }
  }

  return (
    <div
      className="counter-container"
      style={{
        display: 'flex',
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
      }}
    >
        <button onClick={() => setCount(count + 1)}>Povečaj</button>
        <button onClick={decrament}>Odštej</button>
        <div>Count is: {count}</div>
    </div>
  );
}

export default Counter;
