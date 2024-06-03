import React from "react";
import "./style.css";
import ProjectCard from "../../components/ProjectCard";

const HomePage = () => {
  const projects = [
    {
      id: 1,
      title: "Projeto Cultural A",
      description: "Descrição do projeto A",
    },
    { id: 2, title: "Inovação B", description: "Descrição do projeto B" },
    // Adicione mais projetos aqui
  ];

  return (
    <div className="homepage">
      <h2>Destaques</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
