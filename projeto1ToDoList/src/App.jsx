import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Login from "../src/Pages/Login/index.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
      <Login/>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
