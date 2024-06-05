// src/controllers/fornecedorController.js
const Fornecedor = require("../models/Fornecedor");

// Cria um novo fornecedor
exports.createFornecedor = async (req, res) => {
  try {
    const fornecedor = new Fornecedor(req.body);
    await fornecedor.save();
    res.status(201).send(fornecedor);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Lista todos os fornecedores
exports.getFornecedores = async (req, res) => {
  try {
    const fornecedores = await Fornecedor.find({});
    res.send(fornecedores);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Obtém um fornecedor por ID
exports.getFornecedorById = async (req, res) => {
  try {
    const fornecedor = await Fornecedor.findById(req.params.id);
    if (!fornecedor) {
      return res.status(404).send();
    }
    res.send(fornecedor);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualiza um fornecedor por ID
exports.updateFornecedor = async (req, res) => {
  try {
    const fornecedor = await Fornecedor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!fornecedor) {
      return res.status(404).send();
    }
    res.send(fornecedor);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Exclui um fornecedor por ID
exports.deleteFornecedor = async (req, res) => {
  try {
    const fornecedor = await Fornecedor.findByIdAndDelete(req.params.id);
    if (!fornecedor) {
      return res.status(404).send();
    }
    res.send(fornecedor);
  } catch (error) {
    res.status(500).send(error);
  }
};
