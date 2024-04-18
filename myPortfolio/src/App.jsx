import { useState } from 'react'
import './App.css'
import './css/reset.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Привет!</h1>
      <button>клик</button>
    </div>
  )
}

export default App
