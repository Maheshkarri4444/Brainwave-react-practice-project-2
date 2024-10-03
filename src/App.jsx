import React from 'react'
import ButtonGradient from "./assets/svg/ButtonGradient"
import Button from './components/Button.jsx'
import { Header } from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Benifits from './components/Benifits.jsx'
import Collaboration from './components/Collaboration.jsx'
import Services from './components/Services.jsx'
import Roadmap from './components/Roadmap.jsx'
import Footer from './components/Footer.jsx'


const App = () => {
  return (
    
    <>    
    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden border-b-none'>
    <Header/>
    <Hero/>
    <Benifits/>
    <Collaboration/>
    <Services/>
    <Roadmap/>
    <Footer/>
    </div>
    <ButtonGradient/>
    </>
  )
}

export default App
