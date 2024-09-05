import { useState } from 'react'
// import Header from './Components/Header'
import './App.css'
import Routes from './Routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/> */}
      <Routes/>
    </>
  )
}

export default App
