import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const FornecedorList = ({ onEdit }) => {
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    const fetchFornecedores = async () => {
      try {
        const response = await fetch("http://localhost:4000/fornecedores");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFornecedores(data);
      } catch (error) {
        console.error("Erro ao buscar fornecedores:", error);
      }
    };

    fetchFornecedores();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/fornecedores/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Atualizar a lista de fornecedores após a exclusão
      const updatedFornecedores = fornecedores.filter(
        (fornecedor) => fornecedor._id !== id
      );
      setFornecedores(updatedFornecedores);
    } catch (error) {
      console.error("Erro ao deletar fornecedor:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Lista de Fornecedores</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {fornecedores.map((fornecedor) => (
            <tr key={fornecedor._id}>
              <td className="info">{fornecedor.nome}</td>
              <td className="info">{fornecedor.endereco}</td>
              <td className="info">{fornecedor.telefone}</td>
              <td className="info">{fornecedor.email}</td>
              <td>
                <Link
                  to={{
                    pathname: `/fornecedores/${fornecedor._id}/editar`,
                    state: { fornecedor: fornecedor },
                  }}
                >
                  <button className="edit-button">Editar</button>
                </Link>
              </td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(fornecedor._id)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FornecedorList;
