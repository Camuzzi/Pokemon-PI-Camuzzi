import "./about.styles.css";

import charImg from "../../assets/character.png";
import instLogo from "../../assets/instagramLogo.png";
import gitLogo from "../../assets/githubLogo.png";

const About = () => {
    return (
      <div className="about-container">
        <div className="about-card">
          
          <h2 className="about-name">Agustin Camuzzi</h2>
          <img
            className="about-image"
            src={charImg} 
            alt="characterImg"
          />
          <div className="about-styles">
            <h3 className="style-label">Types: </h3>
            <h4 className="style-name">Fighting </h4>
            <h4 className="style-name">Programmer</h4>
          </div>
        </div>
        <div className="about-info">
          
          <h2>About Me</h2>
          <p>
            Hello, welcome to my pokemon SPA!!
          </p>
          <p>
            First of all my name is Agustin Miguel Camuzzi, I am from San Luis, Argentina. I am 25 years old, I currently work in a frozen and processed food company, doing all the administrative tasks. I also practice kickboxing and MMA, which is my biggest passion in my life, one day I want to become one of the best fighters in the world!!
          </p>
          <p>
            This SPA was made based on the POKEAPI, I really enjoyed the process and learned many things, I hope you liked my page. Thank you and come soon!
          </p>
          
          <div className="social-links">
            <h3>Social Media</h3>
            <a
              href="https://www.instagram.com/aguscamuzzi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icon"
                src={instLogo} 
                alt="Instagram"
              />
            </a>
            <a
              href="https://github.com/Camuzzi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icon"
                src={gitLogo} 
                alt="GitHub"
              />
            </a>
          </div>
        </div>
      </div>
    );
  };
  


export default About;