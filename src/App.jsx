import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

const App = () => {
  return (
         <Router>
      <Routes>
      <Route path="/" element={<><Navbar /><Profile /></>} />
      </Routes>
    </Router> 

  )
}

export default App

