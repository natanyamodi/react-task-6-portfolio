import './App.css';
import video from './images/vid.mp4';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import FireflyCursor from './Components/FireflyCursor';


function App() {
  return (
    <div className="App">
      <FireflyCursor />
      <video autoPlay muted loop className="bg-video">
        <source src={video} type="video/mp4" />
      </video>
      <nav>

      </nav>

      <div className="head">
        <p>Hello! I am Natanya Modi</p>
        <div className="bio">
          I am a MERN stack developer who loves art and travel. I'm passionate about creativity and frontend development, and I enjoy crafting visually appealing and user-friendly web applications.
        </div>
        <div className="social-icons">
  <a href="https://www.linkedin.com/in/natanya-modi-526414236/" target="_blank" rel="noopener noreferrer" className="icon-link">
    <FaLinkedin className="icon" />
  </a>
  <a href="https://github.com/natanyamodi" target="_blank" rel="noopener noreferrer" className="icon-link">
    <FaGithub className="icon" />
  </a>
  <a href="mailto:natanya.modi1@gmail.com" className="icon-link">
    <FaEnvelope className="icon" />
  </a>
  <a href="https://www.instagram.com/natanyamodi/" target="_blank" rel="noopener noreferrer" className="icon-link">
    <FaInstagram className="icon" />
  </a>
        </div>
      </div>

  
    </div>
  );
}

export default App;
