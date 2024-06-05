import React from "react";
import "./style.css";
import ProjectCard from "../../components/ProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Projeto C",
      description: "Descrição do projeto C",
      image: "https://via.placeholder.com/300",
      technologies: ["React"],
      socialImpact: "Inclusão de comunidades carentes na era digital.",
      additionalAttribute:
        "Esta é uma informação adicional que só será mostrada na página de detalhes do projeto.",
    },
    {
      id: 2,
      title: "Projeto D",
      description: "Descrição do projeto D",
      image: "https://via.placeholder.com/300",
      technologies: ["React"],
      socialImpact: "Inclusão da tecnologia nas escolas",
      additionalAttribute:
        "Esta é uma informação adicional que só será mostrada na página de detalhes do projeto.",
    },
  ];

  return (
    <div className="projects-page">
      <h2>Todos os Projetos</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
