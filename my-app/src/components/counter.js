import React, { useState } from 'react';

function Counter({title}) {
    const [num, setNum] = useState(0);

    const onIncrease = () => {
        console.log('+1');
        setNum(num + 1);
    }
    const onDecrease = () => {
        console.log('-1');
        setNum(num - 1);
    }
    return(
        <div>
            <h1>{title}</h1>
            <h1>{num}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;