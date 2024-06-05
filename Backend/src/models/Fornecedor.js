const mongoose = require("mongoose");

const fornecedorSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    endereco: {
      type: String,
      required: true,
    },
    telefone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { collection: "fornecedors" }
); // Definindo o nome da coleção

const Fornecedor = mongoose.model("Fornecedor", fornecedorSchema);

module.exports = Fornecedor;
