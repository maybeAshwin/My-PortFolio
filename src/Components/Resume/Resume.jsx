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
            student with a passion in coding . <br />I have skills
            in Mobile app development and Web
            development. Proficient in using Flutter ,Dart,
            HTML, JavaScript, CSS and React to develop
            effective applications according to client
            requirements.
            </p>
        </div>
        <div className="divider"></div>
        <div className="rightside">
            <p>What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled it to make a type specimen book. It h
            as survived not only five centuries, but also the leap into electronic typesetting, remaining e
            ssentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lo
            rem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including ve
            rsions of Lorem Ipsum.</p>
        </div>
       </div>
    </div>
  )
}

export default Resume
