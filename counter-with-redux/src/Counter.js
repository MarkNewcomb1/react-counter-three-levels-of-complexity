import React from 'react';


const Counter = (props) => {
    return (
        <div>
        <p><button onClick={() => props.incrementCount()}>Increment</button></p>
        <p><button onClick={() => props.decrementCount()}>Decrement</button></p>
        <p><button onClick={() => props.reset()}>Reset</button></p>
        <p>Count: {props.count}</p>
        </div>
    );
}

export default Counter;