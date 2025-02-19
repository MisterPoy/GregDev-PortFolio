import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import NextIcon from "../assets/images/nextjs-icon.png";
import ReactIcon from "../assets/images/React.png";
import NextSvgIcon from "../assets/images/NextIcon.svg";
import TypeScriptIcon from "../assets/images/typescript.png";
import GitHubIcon from "../assets/images/github.png";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Flask",
  "Python",
  "SQL",
  "PostgreSQL",
  "Postman",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise & Savoir-Faire</h1>
        <div className="skills-grid">
          <div className="skill">
            <div className="icon-container">
              <img className="react-icon" src={ReactIcon} alt="" />
              <img
                src={TypeScriptIcon}
                alt="NextJs icon"
                className="NextSvgIcon"
              />
              <img
                src={NextSvgIcon}
                alt="NextJs icon"
                className="NextSvgIcon"
              />
              <img
                src={GitHubIcon}
                alt="NextJs icon"
                className="NextSvgIcon"
              />
            </div>
            <h3>Développeur Front-End, spécialisé en UX/UI et accessibilité</h3>
            <p>
              Passionné par la création d’expériences utilisateur fluides et
              accessibles, je conçois des interfaces élégantes, intuitives et
              performantes. Fort d’un œil aiguisé pour le design et d’une
              maîtrise des technologies modernes, je veille à produire un code
              optimisé, scalable et respectueux des bonnes pratiques UX/UI.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}

          {/* <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
