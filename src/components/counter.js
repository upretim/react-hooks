import React, {useState} from 'react';

const Counter = ()=>{
    const [count, setCount] = useState(10); 
    const updateCounter = ()=>{
       // setCount(count+1)
        setCount(prevCount => prevCount+1)
    }

    return(
        <div>
           <button onClick={updateCounter}> {count}</button>
        </div>
    )
}
export default Counter;