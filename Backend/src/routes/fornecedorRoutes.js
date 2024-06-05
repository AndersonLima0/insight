// src/routes/fornecedorRoutes.js
const express = require("express");
const router = express.Router();
const fornecedorController = require("../controllers/fornecedorController");

router.post("/fornecedores", fornecedorController.createFornecedor);
router.get("/fornecedores", fornecedorController.getFornecedores);
router.get("/fornecedores/:id", fornecedorController.getFornecedorById);
router.put("/fornecedores/:id", fornecedorController.updateFornecedor);
router.delete("/fornecedores/:id", fornecedorController.deleteFornecedor);

module.exports = router;
