import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'

const App = () => {
  return (
         <Router>
      <Routes>
      <Route path="/" element={<><Navbar /></>} />
      <Route path="/Profile" element={<><Profile /></>} />
      </Routes>
    </Router> 

  )
}

export default App

