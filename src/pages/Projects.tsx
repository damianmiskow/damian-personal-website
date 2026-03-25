import { Header } from "../components/Header";
import "./Projects.css";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "AWS Calculator",
      description: "abc",
      image: "awscalc-ss.png",
      link: "https://project-awscalc.damianmiskow.com/",
    },
  ];
  return (
    <div className="projects-page">
      <Header />

      <div className="projects-page-title">Projects</div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="project-image">
              <img src={project.image} />
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
