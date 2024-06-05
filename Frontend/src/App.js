import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectDetailsPage from "./pages/ProjectDeatailsPage";
import ProjectsPage from "./pages/ProjectPage";
import FornecedorList from "./pages/FornecedorList";
import FornecedorEdit from "./pages/FornecedorEdit";
import FornecedorForm from "./pages/FornecedorForm";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              path="/projects/:projectId"
              element={<ProjectDetailsPage />}
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/fornecedores" exact element={<FornecedorList />} />
            <Route
              path="/fornecedores/:id/editar"
              element={<FornecedorEdit />}
            />
            <Route path="/cadastrar-fornecedor" element={<FornecedorForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
