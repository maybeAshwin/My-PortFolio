import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Resume from './Components/Resume/Resume'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

const App = () => {
  return (
         
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><Profile /></>} />
          <Route path="/resume" element={<><Resume /></>} />
          <Route path="/about" element={<><About /></>} />
          <Route path="/contact" element ={<><Contact/></>} />
        </Routes>
    </Router> 

  )
}

export default App

