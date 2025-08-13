import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header.jsx'
import Item from './components/Item/Item.jsx'
import AnimationComponent from './components/AnimationComponent.jsx'
import Footer from './components/Footer/Footer.jsx'
import { DIGITAL_PORTFOLIO } from "./portfolio-data.js";
import { ONLINE_PRESENCE } from "./presence-data.js";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <AnimationComponent itemsList={DIGITAL_PORTFOLIO} />
      <Footer />
    </>
  )
}

export default App
