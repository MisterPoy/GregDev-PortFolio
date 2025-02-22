import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from "@mui/icons-material/Email";
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/MisterPoy" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/grégory-poupaux-270622328" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a
              href="mailto:gregory.poupaux@hotmail.fr"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
      </div>
      <p>"Un portfolio conçu et réalisé par <a href="https://github.com/MisterPoy" target="_blank" rel="noreferrer">GregDev</a> - Basé sur un template de <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜"</p>
    </footer>
  );
}

export default Footer;