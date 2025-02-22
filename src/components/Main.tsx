import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Main.scss";
import MOI from "../assets/images/MOI.png";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={MOI} alt="Avatar" />
          <div className="social_icons">
            <a
              href="https://github.com/MisterPoy"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/grégory-poupaux-270622328"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:gregory.poupaux@hotmail.fr"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
          </div>
          <div className="mobile_social_icons">
            <a
              href="https://github.com/MisterPoy"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/grégory-poupaux-270622328"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:gregory.poupaux@hotmail.fr"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-content">
            <h1>Grégory Poupaux</h1>
            <h2>Développeur Front-End,</h2>
            <p> spécialisé en UX/UI et accessibilité</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
