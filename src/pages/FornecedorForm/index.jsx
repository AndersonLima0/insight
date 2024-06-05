import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const FornecedorForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    telefone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const cadastrarFornecedor = async () => {
    try {
      const response = await fetch("http://localhost:4000/fornecedores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Erro ao cadastrar fornecedor");
      }
      setFormData({ nome: "", endereco: "", telefone: "", email: "" });
    } catch (error) {
      console.error("Erro ao cadastrar fornecedor:", error);
    }
  };

  return (
    <div className="container1">
      <h2>Cadastrar Fornecedor</h2>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={formData.nome}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="endereco"
        placeholder="Endereço"
        value={formData.endereco}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="telefone"
        placeholder="Telefone"
        value={formData.telefone}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <button onClick={cadastrarFornecedor} className="button1">
        Cadastrar
      </button>
      <Link to="/fornecedores" className="link-button1">
        <button className="button1">Lista</button>
      </Link>
    </div>
  );
};

export default FornecedorForm;
