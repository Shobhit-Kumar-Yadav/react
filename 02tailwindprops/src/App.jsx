import { useState } from 'react'

import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card username="Learn React Js" btnText="Click me"/>
     <Card username="Shobhit Kumar Yadav" btnText="Visit me"/>

    </>
  )
}

export default App
