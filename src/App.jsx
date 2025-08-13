import Header from './components/Header/Header.jsx'
import AnimationComponent from './components/AnimationComponent.jsx'
import Footer from './components/Footer/Footer.jsx'
import { DIGITAL_PORTFOLIO } from "./portfolio-data.js";
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
