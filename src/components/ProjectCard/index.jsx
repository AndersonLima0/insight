import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-technologies">
          {project.technologies?.map((tech, index) => (
            <span key={index} className="technology">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-impact">
          <strong>Impacto Social:</strong> {project.socialImpact}
        </div>
        <div className="project-actions">
          <Link to={`/projects/${project.id}`} className="project-link">
            Saiba mais
          </Link>
          <button className="like-button">👍</button>
          <button className="share-button">🔗</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
