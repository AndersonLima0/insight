import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Cultura, Inovação e Inclusão no Ceará</h1>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/contact">Contato</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
