import React from 'react'
import { useState } from 'react'

function HookCounter() {
    const Count=0
    const[count, setCount] = useState(Count)
    const incrementFive = () => {
        for(let i=0;i<5;i++)
        {
            setCount(count + 5 )
        }
    } 
    return (
    <div>
       Count: {count}
       <button onClick={() => setCount(Count)}>Reset</button>   
       <button onClick={() => setCount(count+1)}>Increment</button>
       <button onClick={() => setCount(count-1)}>Decrement</button>
       <button onClick={incrementFive}>Increment5</button>
    </div>
  )
}

export default HookCounter