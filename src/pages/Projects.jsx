import { ProjectData } from "/src/assets/myFiles/ProjectData.jsx";
import { register } from "swiper/element/bundle";
register();

export default function Projects() {
  return (
    <div className="Projects">
      <h2>Projects</h2>

      <div className="ProjectContainer">
        {ProjectData.map((project) => (
          <article className="ProjectCard" key={project.id}>
            <header>{project.projectName}</header>
            <div className="ProjectBody">
              <swiper-container
                slides-per-view="1"
                loop="true"
                css-mode="true"
                navigation="true"
                pagination="true"
              >
                {project.body.images.map((image, index) => (
                  <swiper-slide key={index}>
                    <img src={image} alt={project.projectName} />
                  </swiper-slide>
                ))}
              </swiper-container>
              <div className="ProjectDetails">
                <p>{project.body.info}</p>
              </div>
            </div>
            <footer className="StackBox">
              <div className="RepoInfoDiv">{project.footer}</div>

              <button className="outline">
                <a href="#">Repo Link</a>{" "}
              </button>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
