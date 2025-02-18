import React from "react";

import "../assets/styles/AboutMe.scss";

function AboutMe() {
  return (
    <div className="aboutMe-container bg-origin-border" id="aboutMe">
      <h2 className="aboutH2">
        <i className="fa-solid fa-rocket"></i>
        De l’ambulance au code : un parcours guidé par l’humain et la précision
      </h2>
      <div className="aboutContent">
        <p className="aboutPara">
          Avant d’écrire du code, j’ai passé plusieurs années à prendre soin des
          gens, d’abord en tant que conseiller client B2B/B2C, puis comme
          ambulancier. Ces expériences m’ont appris une chose essentielle :{" "}
          <strong>chaque détail compte.</strong> Aujourd’hui, je mets cette
          rigueur et cette empathie au service du web.
        </p>
{/* 
        <span>
          En tant que développeur front-end, je ne me contente pas d’écrire du
          code :
        </span>

        <span>
          {" "}
          ✔️ Je conçois des interfaces fluides et engageantes, en plaçant
          toujours l’utilisateur au cœur du projet.
        </span>

        <span>
          {" "}
          ✔️ Je rends le web plus accessible, car un site bien conçu doit être
          utilisable par tous.
        </span>

        <span>
          {" "}
          ✔️ Je soigne chaque détail graphique, avec un œil affûté pour l’UX/UI,
          hérité de ma passion pour le design et mon expertise sur Photoshop et
          Krita.
        </span>

        <span> 💡 Pourquoi travailler avec moi ?</span>

        <span>
          Une double casquette : un développeur qui comprend aussi l’esthétique
          et l’expérience utilisateur.
        </span>

        <span> Une curiosité insatiable et une capacité à apprendre vite.</span>

        <span>
          Un esprit d’analyse affûté, forgé par des années à résoudre des
          problèmes humains et techniques.{" "}
        </span>

        <span>Un engagement fort pour la qualité et l’optimisation.</span>
        <span>
          {" "}
          🎯 Stack technique : HTML, CSS, SASS (Pixel-perfect & Responsive)
        </span>
        <span>
          {" "}
          JavaScript, React (Composants réutilisables & performance){" "}
        </span>
        <span> Git, GitHub, npm (Collaboration et workflow optimisé) </span>
        <span> ccessibilité (WCAG), SEO & animations CSS avancées </span>
        <span>
          {" "}
          📩 Envie d’échanger ? Contactez-moi pour discuter de votre projet !
        </span> */}
      </div>
      <div className="listContainer">
        <div className="aboutCard">
          <h2>
            <i className="fa-solid fa-lightbulb"></i> En tant que développeur
            front-end, je ne me contente pas d’écrire du code :
          </h2>
          <ul className="skills">
            <li>
              <i className="fa-solid fa-laptop-code"></i> Je conçois des
              interfaces fluides et engageantes, en plaçant toujours
              l’utilisateur au cœur du projet.
            </li>
            <li>
              <i className="fa-solid fa-universal-access"></i> Je rends le web
              plus accessible, car un site bien conçu doit être utilisable par
              tous.
            </li>
            <li>
              <i className="fa-solid fa-palette"></i> Je soigne chaque détail
              graphique, avec un œil affûté pour l’UX/UI, hérité de ma passion
              pour le design et mon expertise sur Photoshop et Krita.
            </li>
          </ul>
        </div>
        <div className="aboutCard">
          <h2>
            <i className="fa-solid fa-handshake"></i> Pourquoi travailler avec
            moi ?
          </h2>
          <ul className="skills">
            <li>
              <i className="fa-solid fa-user-group"></i> Une double casquette :
              un développeur qui comprend aussi l’esthétique et l’expérience
              utilisateur.
            </li>
            <li>
              <i className="fa-solid fa-universal-access"></i> Un engagement
              fort pour la qualité et l’optimisation.
            </li>
            <li>
              <i className="fa-solid fa-crosshairs"></i> Un esprit d’analyse
              affûté, forgé par des années à résoudre des problèmes humains et
              techniques.
            </li>
            <li>
              <i className="fa-solid fa-magnifying-glass"></i> Une curiosité
              insatiable et une capacité à apprendre vite.
            </li>
          </ul>
        </div>

        {/* <h2>
          <i className="fa-solid fa-screwdriver-wrench"></i> Stack technique
        </h2>
        <ul className="stack">
          <li>
            <i className="fa-brands fa-html5"></i> HTML{" "}
            <i className="fa-brands fa-css3-alt"></i> CSS{" "}
            <i className="fa-brands fa-sass"></i> SASS
          </li>
          <li>
            <i className="fa-brands fa-js"></i> JavaScript{" "}
            <i className="fa-brands fa-react"></i> React
          </li>
          <li>
            <i className="fa-brands fa-git-alt"></i> Git{" "}
            <i className="fa-brands fa-github"></i> GitHub{" "}
            <i className="fa-brands fa-npm"></i> npm
          </li>
          <li>
            <i className="fa-solid fa-universal-access"></i> Accessibilité
            (WCAG)
          </li>
          <li>
            <i className="fa-solid fa-chart-line"></i> SEO & animations avancées
          </li>
        </ul>

        <p className="contact">
          <i className="fa-solid fa-envelope"></i>{" "}
          <strong>Envie d’échanger ?</strong> Contactez-moi !
        </p> */}
      </div>
    </div>
  );
}

export default AboutMe;
