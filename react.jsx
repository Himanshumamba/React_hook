import React, { useState, useEffect } from 'react';

function Counter() {
  // useState hook to keep track of the count
  const [count, setCount] = useState(0);

  // useEffect hook to update the document title whenever count changes
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only run this effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
