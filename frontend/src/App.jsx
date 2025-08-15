import { useState } from 'react'

import NavBar from './components/NavBar';
/*
import Footer from './components/Footer';
import Main from './components/Main';
import HerSection from './components/HerSection';
*/
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
    </>
  )
}

export default App
