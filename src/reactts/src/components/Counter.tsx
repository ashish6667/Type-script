import { useState } from "react";


export function Counter(){
  const  [count, setCount] = useState <number>(0);

    return(
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Order One More</button>
        </div>
    )
}