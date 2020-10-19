import React from 'react'

const Counter = React.memo((props) => {
    return (
        <div>
            <p><button onClick={() => props.incrementCount()}>Increment</button></p>
            <p><button disabled={props.count <= 0} onClick={() => props.decrementCount()}>Decrement</button></p>
            <p><button onClick={() => props.reset()}>Reset</button></p>
            <p>Count: {props.count}</p>
        </div>
    );
})

export default Counter