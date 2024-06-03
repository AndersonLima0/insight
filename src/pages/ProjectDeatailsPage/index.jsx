import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = {
    id: projectId,
    title: `Projeto ${projectId}`,
    description: `Descrição do projeto ${projectId}`,
  };

  const goBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <div className="project-details">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default ProjectDetailsPage;
