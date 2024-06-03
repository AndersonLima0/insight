import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Link to={`/projects/${project.id}`}>Saiba mais</Link>
    </div>
  );
};

export default ProjectCard;
