import React from 'react'
import './Profile.css'
import downloadlogo from '../../Assets/download.png'
import linkedin from '../../Assets/linkedin.png'
import github from '../../Assets/github.png'
import leetcode from '../../Assets/leetcode.png'
import html from '../../Assets/html.png'
import css from '../../Assets/css.png'
import react from '../../Assets/react.png'
import flutter from '../../Assets/flutter.png'

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile-text'>
        <h3>Software Developer</h3>
        <h1>Ashwin Joseph</h1>
        <div className="profile-info">
        <p>Self motivated and enthusiastic B.Tech
          student with a passion in coding. <br />I have skills
          in Mobile app development and Web
          development. <br /> Proficient in using Flutter ,Dart,
          HTML, JavaScript, CSS and React <br /> to develop
          effective applications according to client
          requirements.</p>

          </div>
          <ul className='profile-'>

            <li><button className='Download'>Download resume <img className='download-img' src={downloadlogo} alt=""/> </button></li>
            
            <li> <button className='linkedin'><img src={linkedin}/> </button></li>
            <li> <button className='github'>  <img src={github}/>   </button></li>
            <li> <button className='leetcode'><img src={leetcode}/> </button></li>
            
          </ul>


      </div>
      <div className="skills">
        <h1 className='skill-h1'>Skills</h1>
        <ul className='skills-ul'>
          <li><img src={html}/></li>
          <li><img src={css}/></li>
          <li><img src={flutter}/></li>
          <li><img src={react}/></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Profile
