import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Board from './Components/Board.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Board></Board>
    </div>
  )
}

export default App
