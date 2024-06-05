const express = require("express");
const mongoose = require("mongoose");
const fornecedorRoutes = require("./routes/fornecedorRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://andersonlinx:STpNM8qV4oWwryHz@cluster0.5toot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

// Usar as rotas do fornecedor
app.use("/", fornecedorRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
