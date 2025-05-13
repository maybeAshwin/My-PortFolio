import React, { useState } from 'react';
import './Projects.css';
import dementor from '../../Assets/dementor.png';
import secondProjectImage from '../../Assets/seed.png'; // Add your second image here

const ProjectCard = ({ image, link, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div 
      className="container card-reveal"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="divider image-wrapper">
        <img src={image} alt="Project" />
        <div className={`card-text ${isHovered ? 'show' : ''}`}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className='main'>
      <div className="area">
        <h1>My Projects</h1>
        <br />
        <br />

        <h2>De Mentor</h2>
        <ProjectCard

          image={dementor}
          link="https://de-mentor.vercel.app/"
          description="It’s a platform dedicated to helping individuals 
          overcome addictions to drugs, alcohol, screens, and pornography. 
          It provides resources, guidance, and community support to encourage
           healthier habits and personal growth."
        />

        <h2>Seed</h2>
        <ProjectCard
          image={secondProjectImage}
          link="https://github.com/abypious/Seed"
          description="Smart Agriculture System that is an integrated platform 
          to help farmers with real-time soil monitoring and crop suggestion based on IoT,
           artificial intelligence (AI), and machine learning (ML)."
        />
      </div>
    </div>
  );
};

export default Projects;
