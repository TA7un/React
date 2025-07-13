import { useState, useEffect } from 'react';

function App() {
  const [counterVisible, setCounterVisible] = useState(true);
  const [count, setCount] = useState(0); // 🟢 Lifted state

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterVisible(c => !c);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {counterVisible && <Counter count={count} setCount={setCount} />}
    </div>
  );
}

function Counter({ count, setCount }) {
  console.log("onMount");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
      console.log("Inside interval");
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("onUnmount");
    };
  }, []);

  return <h1>{count}</h1>;
}

export default App;
