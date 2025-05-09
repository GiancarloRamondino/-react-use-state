import { useState } from 'react'
import Headers from './components/Headers.jsx'
import Main from './components/Main.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers />
      <Main /> 
    </>
  )
}

export default App
