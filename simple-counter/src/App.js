import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';

const App = () => {
  const [count, setCounter] = useState(0);
  const incrementCount = () => {
    return setCounter(count + 1);
  }
  const decrementCount = () => {
    return setCounter(count > 0 ? count - 1 : 0);
  }
  const reset = () => {
    return setCounter(0);
  }
  return (
    <div className="App">
      <header className="App-header">
        Simple Counter
      </header>
      <Counter 
      count={count} 
      incrementCount={incrementCount}
      decrementCount={decrementCount}
      reset={reset}
      />
    </div>
  );
}

export default App;
