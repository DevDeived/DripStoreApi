// routes/produtoRoute.js
import express from "express";
import {
  index,
  find,
  create,
  update,
  destroy,
} from "../controllers/produtoController.js";

const router = express.Router();

// TODAS AS FUNÇÕES DEVEM SER IMPORTADAS COM { }
router.get("/produto", index);
router.get("/produto/:id", find);
router.post("/produto", create);
router.put("/produto/:id", update);
router.delete("/produto/:id", destroy);

export default router;