import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";


import categoriaRoute from "./routes/categoriaRoute.js";
import marcaRoute from "./routes/marcaRoute.js";
import pedidosRoute from "./routes/pedidosRoute.js";
import promocaoRoute from "./routes/promocaoRoute.js";
import enderecoentregaRoute from "./routes/enderecoentregaRoutes.js";
import formadePagamentoRoute from "./routes/formadePagamentoRoute.js";
import produtoRoute from "./routes/produtoRoute.js";
import transportadoraRoute from "./routes/transportadoraRoute.js";
import usuariosRoute from "./routes/usuariosRoutes.js";
import estoqueRoute from "./routes/estoqueRoute.js";

const app = express();
const PORT = 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Rotas
app.use("/api", categoriaRoute);
app.use("/api", marcaRoute);
app.use("/api", pedidosRoute);
app.use("/api", promocaoRoute);
app.use("/api", enderecoentregaRoute);
app.use("/api", formadePagamentoRoute);
app.use("/api", produtoRoute); 
app.use("/api", transportadoraRoute);
app.use("/api", estoqueRoute);
app.use("/api", usuariosRoute);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Parâmetros:`, req.query);
  next();
});


app.listen(PORT, () => {
  console.log(`Aplicação rodando em http://localhost:${PORT}`);
});