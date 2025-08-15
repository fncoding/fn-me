import { useState } from 'react'

import NavBar from './components/NavBar';
/*
import Footer from './components/Footer';
import Main from './components/Main';
*/
import HeroSection from './components/HeroSection';
import Accordion from './components/Accordion';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <HeroSection />
      <Accordion />
     </>
  )
}

export default App
