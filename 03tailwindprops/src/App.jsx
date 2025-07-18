import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black  p-4 rounded-2xl mb-2'>Tailwind Test</h1>
      <Card username="Ayush Khopatkar" btnText="Click Me"/>
      <Card username="Piyush Dalvi" btnText="Visit Me
    "/>
    </>
  )
}

export default App
