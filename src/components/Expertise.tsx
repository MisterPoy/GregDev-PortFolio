import React from "react";
import "@fortawesome/free-regular-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import ReactIcon from "../assets/images/React.png";
import NextSvgIcon from "../assets/images/NextIcon.svg";
import TypeScriptIcon from "../assets/images/typescript.png";
import GitHubIcon from "../assets/images/github.png";
import TailWindIcon from "../assets/images/TailWind.png";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Tailwind",
  "NextJs",
  "API RESTful",
  "Postman",
  "Swagger",
  "Photoshop",
  "Krita"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Compétences</h1>
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
              <img src={GitHubIcon} alt="NextJs icon" className="blabla" />
              <img src={TailWindIcon} alt="NextJs icon" className="blabla" />
            </div>
            <h2>Développeur Front-End, spécialisé en UX/UI et accessibilité</h2>
            <h3>
              Développement Front-End Moderne :
            </h3>
            <p>
              
              Création d'interfaces performantes et maintenables avec React,
              Next.js et TypeScript.
            </p>

            <h3>
              Design Graphique & Créatif :
            </h3>
            <p>
              
              Passion pour le dessin, la composition visuelle et l’illustration
              avec Photoshop, Krita et tablette graphique.
            </p>
            <h3>
              Accessibilité Web :
            </h3>
            <p> Conception de sites inclusifs respectant les normes WCAG.</p>
            <h3>
              Design Responsive & UI/UX :
            </h3>
            <p>
    
              Réalisation d’interfaces élégantes et adaptatives avec Tailwind
              CSS et SCSS.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
