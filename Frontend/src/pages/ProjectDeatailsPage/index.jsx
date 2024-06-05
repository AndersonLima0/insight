import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

const ProjectDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { project } = location.state || {};

  const goBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <div className="project-details-container">
      <div className="project-details">
        <img
          src={project.image}
          alt={project.title}
          className="project-details-image"
        />
        <div className="project-details-content">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="project-details-technologies">
            <strong>Tecnologias:</strong>{" "}
            {project.technologies?.map((tech, index) => (
              <span key={index} className="technology">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-details-impact">
            <strong>Impacto Social:</strong> {project.socialImpact}
          </div>
          <div className="project-details-info">
            <strong>Problemática:</strong> {project.additionalAttribute}
          </div>

          <button onClick={goBack} className="back-button">
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
