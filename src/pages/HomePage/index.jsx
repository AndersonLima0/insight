import React from "react";
import "./style.css";
import ProjectCard from "../../components/ProjectCard";

const HomePage = () => {
  const projects = [
    {
      id: 1,
      title: "Projeto A",
      description:
        "Plataforma digital inovadora para promover e preservar a cultura cearense.",
      image: "https://via.placeholder.com/300",
      technologies: ["React"],
      socialImpact:
        "Capacitação de comunidades desfavorecidas e preservação cultural através da tecnologia.",
      additionalAttribute:
        "A falta de acesso à tecnologia e à educação em comunidades desfavorecidas, o que pode resultar na perda de identidade cultural e na exclusão digital dessas comunidades. Isso pode dificultar a preservação e a promoção da cultura local, além de limitar as oportunidades de desenvolvimento pessoal e econômico para os membros dessas comunidades. Uma solução possível para essa problemática seria a criação de programas de capacitação digital e cultural, que visam fornecer acesso à tecnologia e promover a preservação da cultura local. Isso poderia incluir a criação de centros comunitários equipados com computadores e acesso à internet, onde os membros da comunidade podem participar de workshops e cursos sobre habilidades digitais, como navegação na internet, uso de aplicativos e programas de computador, além de aprender sobre a história e tradições culturais locais. Além disso, parcerias com escolas locais, organizações sem fins lucrativos e empresas de tecnologia podem ser estabelecidas para fornecer recursos adicionais, como a doação de dispositivos eletrônicos, acesso gratuito à internet e programas de mentoria para os participantes dos programas de capacitação. Isso ajudaria a criar oportunidades de aprendizado e desenvolvimento para as comunidades desfavorecidas, ao mesmo tempo em que promove a preservação e valorização da sua identidade cultural.",
    },
    {
      id: 2,
      title: "Projeto B",
      description: "Descrição do projeto B",
      image: "https://via.placeholder.com/300",
      technologies: ["React"],
      socialImpact:
        "Empoderamento de pequenos agricultores através de tecnologia.",
      additionalAttribute:
        "Esta é uma informação adicional que só será mostrada na página de detalhes do projeto.",
    },
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
