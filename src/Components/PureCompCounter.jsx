import React from 'react';
import { useState } from 'react';

const PureCompCounter = () => {
    const [counter, setCounter] = useState(0);

  return (
    <>
        <div className="container">
            <p className='p1'>PURE COMPONENT</p>
            <p className='p2'>Click to Increase the counter!!!</p>
            <button className='btn' onClick={()=>setCounter((counter)=>counter + 1)}>Increment</button>

            <p className='cntrvalue'>The value of Counter is : {counter}</p>

            <div className="def">
                <ul>
                    <li>
                    A React component is considered pure if it renders the same output for the same state and props.
                    </li>
                </ul>
            </div>

        </div>
    </>
  )
}

export default PureCompCounter