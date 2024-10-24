import React, {useState} from 'react'

const Counter = function () {
    const [Counter, setCounter] = useState(0);

    function incriment () {
        setCounter(Counter + 1)
      }
      
    function decriment () {
        setCounter(Counter - 1)
    }

  return (
    <div>
        <h1>{Counter}</h1>
        <button onClick={incriment}>incr</button>
        <button onClick={decriment}>decr</button>
    </div>
  )
}

export default Counter