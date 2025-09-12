import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import JobAppPage from './components/JobAppPage/JobAppToolPage.jsx'
import Header from './components/Header/Header.jsx'
import AnimationComponent from './components/AnimationComponent.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { DIGITAL_PORTFOLIO } from "./portfolio-data.js";
import './App.css'


function App() {
  return (
    <Router>
      <Header />
      <AnimationComponent itemsList={DIGITAL_PORTFOLIO} />
      <NavBar />
      <Routes>
        <Route path="/job-app-tool" element={<JobAppPage />} />
      </Routes>
      
      <Footer />
    </Router>
  )
}

export default App
