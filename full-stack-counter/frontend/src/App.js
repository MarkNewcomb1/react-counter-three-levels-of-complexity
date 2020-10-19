import React, { useCallback, useEffect } from 'react';
import './App.css';
import Counter from './Counter';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from './constants/actions';
import { counterActions, incrementAction, decrementAction } from './actions/counterActions'

const App = () => {
  const dispatch = useDispatch();
  const counterList = useSelector(state => state.counterList)
  const { loading, error, count } = counterList
  useEffect(() => {
    dispatch(counterActions())
  }, [dispatch])

  const incrementCount = useCallback(() =>
    dispatch(incrementAction()),
    [dispatch]
  )
  const decrementCount = useCallback(() =>
    dispatch(decrementAction()),
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
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
      <h3>{error}</h3>
      ) :
      <Counter
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        reset={reset}
      />
    }
    </div>
  );
}

export default App;
