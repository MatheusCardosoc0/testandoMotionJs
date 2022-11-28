import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-zinc-900 overflow-hidden h-screen">
      <Navbar />
    </div>
  )
}

export default App
