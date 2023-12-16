import { React, useState } from 'react'

const ShowGame = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Game Master</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} type='button'>
        Increase Count
      </button>
    </div>
  )
}

export default ShowGame
