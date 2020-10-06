import React, { useCallback } from 'react';
import './App.css';
import Counter from './Counter';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from './store/actions';

const App = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const incrementCount = useCallback(() =>
    dispatch({ type: actionTypes.INCREMENT }),
    [dispatch]
  )
  const decrementCount = useCallback(() =>
    dispatch({ type: actionTypes.DECREMENT }),
    [dispatch]
  )
  const reset = useCallback(() =>
    dispatch({ type: actionTypes.RESET }),
    [dispatch]
  )
  return (
    <div className="App">
      <header className="App-header">
        Counter With Redux
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
