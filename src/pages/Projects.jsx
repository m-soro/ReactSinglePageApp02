import { ProjectData } from "/src/assets/myFiles/ProjectData.jsx";
import { Link } from "react-router-dom";
import { register } from "swiper/element/bundle";
register();

export default function Projects() {
  return (
    <div className="Projects">
      <h2>Projects</h2>

      <div className="ProjectContainer">
        {ProjectData.map((project) => (
          <article className="ProjectCard" key={project.id}>
            <header>
              <h4>{project.projectName}</h4>
            </header>
            <div className="container-fluid">
              <swiper-container
                slides-per-view="1"
                loop="true"
                css-mode="true"
                navigation="true"
                pagination="true"
              >
                {project.images.map((image, index) => (
                  <swiper-slide key={index}>
                    <img src={image} alt={project.projectName} />
                  </swiper-slide>
                ))}
              </swiper-container>
              <div className="ProjectDetails">
                <p>{project.summary}</p>
              </div>
            </div>
            <footer className="StackBox">
              <div className="RepoInfoDiv">
                <h6>{project.stack}</h6>
              </div>

              <button className="outline">
                <Link to={`/projects/${project.id}`}>more info</Link>
              </button>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
