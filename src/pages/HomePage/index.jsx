import React from "react";
import "./style.css";
import ProjectCard from "../../components/ProjectCard";

const HomePage = () => {
  const projects = [
    {
      id: 1,
      title: "Cultura Digital: Ceará Conectado",
      description:
        "Plataforma digital inovadora para promover e preservar a cultura cearense.",
      image: "https://via.placeholder.com/300",
      technologies: ["React", "Node.js", "AI", "AR"],
      socialImpact:
        "Capacitação de comunidades desfavorecidas e preservação cultural através da tecnologia.",
    },
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
