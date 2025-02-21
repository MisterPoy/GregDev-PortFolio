
// ProjectCard.tsx
import React from "react";
import KasaImg from "../assets/images/kasa.png";
import {ProjectData} from '../data/ProjectData';
import '../assets/styles/Project.scss';


/* interface ProjectCardProps extends ProjectData {} */

function ProjectCard({title, description, challenge, imgUrl, linkUrl}: ProjectData) {
    return(
        <div className="project">
          <a href={linkUrl} target="_blank" rel="noreferrer">
                <h2 className="project-card_title">{title}</h2>
            </a>
            <a href={linkUrl} target="_blank" rel="noreferrer">
                <img src={imgUrl} className="zoom" alt={title} width="100%"/>
            </a>
            
            <h3>{description}</h3>
            <p><i className="fa-solid fa-list-check"></i>{challenge}</p>
        </div>
    );
}

export default ProjectCard;
