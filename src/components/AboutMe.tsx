import React from "react";


import "../assets/styles/AboutMe.scss";

function AboutMe() {
  return (
    <div className="aboutMe-container bg-origin-border" id="aboutMe">
      <h2 className="aboutH2">
        De l’ambulance au code : un parcours guidé par l’humain et la précision
      </h2>
      <div className="aboutContent">
        <p className="aboutPara">
          Avant d’écrire du code, j’ai passé plusieurs années à prendre soin des
          gens, d’abord en tant qu’ambulancier, puis comme conseiller client
          B2B/B2C. Ces expériences m’ont appris une chose essentielle : chaque
          détail compte. Aujourd’hui, je mets cette rigueur et cette empathie au
          service du web.
        </p>
        <br /> En tant que développeur front-end, je ne me contente pas d’écrire
        du code :<br /> ✔️ Je conçois des interfaces fluides et engageantes, en
        plaçant toujours l’utilisateur au cœur du projet.
        <br /> ✔️ Je rends le web plus accessible, car un site bien conçu doit
        être utilisable par tous.
        <br /> ✔️ Je soigne chaque détail graphique, avec un œil affûté pour
        l’UX/UI, hérité de ma passion pour le design et mon expertise sur
        Photoshop et Krita.
        <br /> 💡 Pourquoi travailler avec moi ?<br /> Une double casquette : un
        développeur qui comprend aussi l’esthétique et l’expérience utilisateur.
        <br /> Une curiosité insatiable et une capacité à apprendre vite. <br />
        Un esprit d’analyse affûté, forgé par des années à résoudre des
        problèmes humains et techniques. <br />
        Un engagement fort pour la qualité et l’optimisation.
        <br /> 🎯 Stack technique : HTML, CSS, SASS (Pixel-perfect & Responsive)
        <br /> JavaScript, React (Composants réutilisables & performance) <br />
        Git, GitHub, npm (Collaboration et workflow optimisé)
        <br /> Accessibilité (WCAG), SEO & animations CSS avancées
        <br />
        📩 Envie d’échanger ? Contactez-moi pour discuter de votre projet !
      </div>
    </div>
  );
}

export default AboutMe;
