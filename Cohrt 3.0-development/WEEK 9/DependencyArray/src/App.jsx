import { useState, useEffect } from "react"

export default function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count => count + 1)
  }

  return <div>
    <Counter count={count}></Counter>
    <button onClick={() => setCount(count => count + 1)}>Increment</button>
  </div>
}

function Counter() {


  useEffect(function () {
    console.log("on Mount");

    return function () {
      console.log("on Unmount");
    }
  }, []);

  return <div>
    Counter {props.count}
  </div>
}

