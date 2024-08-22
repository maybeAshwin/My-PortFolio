import React from 'react';
import './Profile.css';
import downloadlogo from '../../Assets/download.png';
import linkedin from '../../Assets/linkedin.png';
import github from '../../Assets/github.png';
import leetcode from '../../Assets/leetcode.png';
import html from '../../Assets/html.png';
import css from '../../Assets/css.png';
import react from '../../Assets/react.png';
import flutter from '../../Assets/flutter.png';
import dart from '../../Assets/dart.png';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile-text'>
        <h3>Software Developer</h3>
        <h1>Ashwin Joseph</h1>
        <div className="profile-info">
          <p>
            Self-motivated and enthusiastic B.Tech student with a passion for coding. <br />
            I have skills in Mobile app development and Web development. <br />
            Proficient in using Flutter, Dart, HTML, JavaScript, CSS, and React <br />
            to develop effective applications according to client requirements.
          </p>
        </div>
        <ul className='profile-'>
          <li>
            <a href="/resume.pdf" download>
              <button className='Download'>
                Download resume <img className='download-img' src={downloadlogo} alt="Download" />
              </button>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ashwinjoseph-" target="_blank" rel="noopener noreferrer">
              <button className='linkedin'>
                <img src={linkedin} alt="LinkedIn" />
              </button>
            </a>
          </li>
          <li>
            <a href="https://github.com/maybeAshwin" target="_blank" rel="noopener noreferrer">
              <button className='github'>
                <img src={github} alt="GitHub" />
              </button>
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/ashwinjoseph-/" target='_blank' rel="noopener noreferrer">
              <button className='leetcode'>
                <img src={leetcode} alt="LeetCode" />
              </button>
            </a>
          </li>
        </ul>
      </div>
      <div className="skills">
        <h1 className='skill-h1'>Skills</h1>
        <ul className='skills-ul'>
          <li><img src={html} alt="HTML" /></li>
          <li><img src={css} alt="CSS" /></li>
          <li><img src={flutter} alt="Flutter" /></li>
          <li><img src={react} alt="React" /></li>
          <li><img src={dart} alt="Dart" /></li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
