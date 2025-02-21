import KasaImg from "../assets/images/kasa.png";
import OhmyFood from "../assets/images/OhMyFood.png";
import LinktreeImg from "../assets/images/LinkTree.png"
import PortFolioImg from "../assets/images/portfolio.png"
import "../assets/styles/Project.scss";
import ProjectsData from "../data/projects.json";
import ProjectCard from "./ProjectCard";



function Project() {
    
   
  return (
    <div className="projects-container" id="projects">
      <h1>Projets personnels</h1>
      <div className="projects-grid">
   
        
        <ProjectCard
          key={ProjectsData[0].title}
          title={ProjectsData[0].title}
          description={ProjectsData[0].description}
          challenge={ProjectsData[0].challenge}
          imgUrl={PortFolioImg}
          linkUrl={ProjectsData[0].linkUrl}
        />
        <ProjectCard
          key={ProjectsData[1].title}
          title={ProjectsData[1].title}
          description={ProjectsData[1].description}
          challenge={ProjectsData[1].challenge}
          imgUrl={KasaImg}
          linkUrl={ProjectsData[1].linkUrl}
        />
        <ProjectCard
          key={ProjectsData[2].title}
          title={ProjectsData[2].title}
          description={ProjectsData[2].description}
          challenge={ProjectsData[2].challenge}
          imgUrl={OhmyFood}
          linkUrl={ProjectsData[2].linkUrl}
        />
        <ProjectCard
          key={ProjectsData[3].title}
          title={ProjectsData[3].title}
          description={ProjectsData[3].description}
          challenge={ProjectsData[3].challenge}
          imgUrl={OhmyFood}
          linkUrl={ProjectsData[3].linkUrl}
        />
        <ProjectCard
          key={ProjectsData[4].title}
          title={ProjectsData[4].title}
          description={ProjectsData[4].description}
          challenge={ProjectsData[4].challenge}
          imgUrl={LinktreeImg}
          linkUrl={ProjectsData[4].linkUrl}
        />
     

      </div>
    </div>
  );
}

export default Project;
