import React from 'react';
import { useState } from 'react';
import './App.css';

function Counter(){

    const[count, setCount]=useState(0);
    
    return(
        <div>
            <h2>Count : {count}</h2>
            <div>
                <button className='button' onClick={() =>setCount(count +1)}>Increment</button>
                <button  className='buttons' onClick={() =>setCount(count -1)}>Decrement</button>
            </div>
        </div>
    )

}

export default Counter;