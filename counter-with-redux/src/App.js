import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import { connect } from 'react-redux';
import * as actionTypes from "./store/actions";
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

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCount: () => dispatch({ type: actionTypes.INCREMENT }),
    decrementCount: () => dispatch({ type: actionTypes.DECREMENT }),
    reset: () => dispatch({ type: actionTypes.RESET })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
