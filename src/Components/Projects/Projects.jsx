import React from 'react'
import './Projects.css'
import dementor from '../../Assets/dementor.png'

const Projects = () => {
  return (
    <div className='main'>
      <div className="area">
        <h1>My Projects</h1>
        <h2><a href="https://de-mentor.vercel.app/">De-Mentor</a></h2> 
        <div className="container">
          <div className='divider'>
            <a href="https://de-mentor.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={dementor} alt="DeMentor" />
            </a>
          </div>
          <div className='divider'>
            
            <p>
            <span class=" highlight">its</span> a platform dedicated to helping individuals overcome addictions to drugs, alcohol, screens, and pornography. 
            It provides resources, guidance, and community support to encourage healthier habits and personal growth. 
            Through expert advice and practical strategies, 
            the website empowers users to regain control of their lives and build a healthier future.
            </p>
          </div>
        </div>
        
        <p></p>
      </div>
    </div>
  )
}

export default Projects
