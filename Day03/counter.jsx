import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Counter App</h2>
      <p className="text-lg">Count: {count}</p>
      <button className="bg-green-500 text-white px-4 py-2 m-2 rounded" onClick={increment}>Increment</button>
      <button className="bg-red-500 text-white px-4 py-2 m-2 rounded" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterApp;
