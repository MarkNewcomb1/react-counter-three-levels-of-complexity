import React from 'react';
import './App.css';
import Counter from './Counter';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from './store/actions';

const App = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const incrementCount = () => {
    dispatch({type: actionTypes.INCREMENT});
  }
  const decrementCount = () => {
    dispatch({type: actionTypes.DECREMENT});
  }
  const reset = () => {
    dispatch({type: actionTypes.RESET});
  }
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
