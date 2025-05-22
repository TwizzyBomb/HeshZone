import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header.jsx'
import Item from './components/Item/Item.jsx'
import AnimationComponent from './components/AnimationComponent.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <AnimationComponent />
      <footer>
        <p>Copyright Yahia Adrian Brocke 5/21/2025</p>
        <p>Coontact: adrian.brocke@gmail.com</p>
      </footer>
    </>
  )
}

export default App
