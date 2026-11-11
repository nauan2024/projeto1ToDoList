import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Login from "../src/Pages/Login/index.jsx"
import Dashboard from "../src/Pages/DashBoard/index.jsx"
import "./index.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
          </Routes>

        </BrowserRouter>

      
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App;
