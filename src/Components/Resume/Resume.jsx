import React from 'react'
import './Resume.css'
import profile_pic from '../../Assets/profile-pic.png'

const Resume = () => {
  return (
    <div  className='wrapper'>
       <div className="content">
       <h1>ASHWIN JOSEPH</h1>
       <div className="box">
        <div className="image">
            <img src={profile_pic} alt="profile_pic"  />
        </div>
       </div>
        <div className="leftside">
          
          <p>Self motivated and enthusiastic B.Tech
            student with a passion in coding .I have skills
            in Mobile app development and Web
            development. Proficient in using Flutter ,Dart,
            HTML, JavaScript, CSS and React to develop
            effective applications according to client
            requirements.</p>
            <br />
            <div className="divider"></div>
            <br />
            
            <h2>Skills</h2>
              <li>React</li>
              <li>Flutter</li>
              <li>Web Devlopment</li>
              <li>Dart</li>
            <br />
            <div className="divider"></div>
            <br />
            <h2>Education</h2>
            <div className="education">
              
                <li><h3>RIT KOTTAYAM</h3><br /><p>2022-2025 <br />B.Tech <br />Kottayam,Kerala</p></li>
                <li><h3>GPTC PALA</h3><br /><p>2019-2022 <br />DIploma In Computer<br />Engineering <br />Kottayam,Kerala</p></li>
                <li><h3>OLL HSS UZHAVOOR</h3><br /><p>2017-2019 <br />Higher Secondary <br />Kottayam,Kerala</p></li>
                <li><h3>GHSS EDAKKOLY</h3><br /><p>2007-2017 <br />High School <br />Kottayam,Kerala</p></li>
            </div>

            <h2>Social Links</h2>
              <li>img</li>


        </div>
        

        
       </div>
    </div>
  )
}

export default Resume