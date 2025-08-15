import { useState } from 'react'

import NavBar from './components/NavBar';
import Services from './components/Services';
import HeroSection from './components/HeroSection';
import Accordion from './components/Accordion';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <HeroSection />
      <Accordion />
      <Services />
     </>
  )
}

export default App
