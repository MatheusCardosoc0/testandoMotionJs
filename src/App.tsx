import { useState } from 'react'
import reactLogo from './assets/react.svg'
import About from './components/About'
import Explore from './components/Explore'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'
import Hero from './components/Hero'
import Insights from './components/Insights'
import Navbar from './components/Navbar'
import WhatsNew from './components/WhatsNew'
import World from './components/World'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='overflow-x-hidden not-scroll'>
      <Navbar />
      <Hero />
      <div className='relative flex flex-col gap-12'>
        <About />
        <div className='gradient-03 z-0' />
        <Explore />
      </div>
      <div className='relative'>
        <GetStarted />
        <div className='gradient-04 z-0' />
        <WhatsNew />
      </div>
      <World />
      <div className='relative'>
        <Insights />
        <div className='gradient-04 z-0' />
        <Feedback />
      </div>
      <Footer />
    </main>
  )
}

export default App
