import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

const FornecedorEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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

  // Recebe dados
  useEffect(() => {
    const fetchFornecedores = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/fornecedores/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Erro ao buscar fornecedores:", error);
      }
    };

    fetchFornecedores();
  }, []);

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:4000/fornecedores/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Mostra a mensagem de alerta
      window.alert("Atualização realizada com sucesso!");
      navigate(-1);
    } catch (error) {
      console.error("Erro ao salvar fornecedor:", error);
    }
  };

  return (
    <div className="container-fornecedor-edit">
      <h2>Editar Fornecedor</h2>
      <div className="form-group">
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Endereço</label>
        <input
          type="text"
          name="endereco"
          value={formData.endereco}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Telefone</label>
        <input
          type="text"
          name="telefone"
          value={formData.telefone}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <button className="button-save" onClick={handleSaveClick}>
        Salvar
      </button>
    </div>
  );
};

export default FornecedorEdit;
