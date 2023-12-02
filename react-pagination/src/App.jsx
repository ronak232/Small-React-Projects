import { useState } from 'react'
import FetchData from './components/FetchData'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <FetchData/>
      </main>
    </>
  )
}

export default App
