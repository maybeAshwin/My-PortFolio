import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'
import Project from './Components/Projects/Projects'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

const App = () => {
  return (
         
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><Profile /></>} />
          <Route path="/resume" element={<><Resume /></>} />
          <Route path="/project" element ={<><Project/></>} />
          <Route path="/contact" element ={<><Contact/></>} />
        </Routes>
    </Router> 

  )
}

export default App

