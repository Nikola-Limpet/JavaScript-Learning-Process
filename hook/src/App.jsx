import { useState } from 'react'

function App() {
  // useState return an array with two elements
  // The first element is the current state value
  // The second element is a function that allows you to update the state value
  const [count, setCount] = useState(9)
  // setCount is a function that allows you to update the state value
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>
        {count}
      </span>
      <button onClick={ () => setCount(count + 1)}>+</button>
    </div>
  )
}
export default App;