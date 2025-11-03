import express from "express";
import * as pedidosController from "../controllers/pedidosController.js";

const router = express.Router();

router.get("/pedidos", pedidosController.index);
router.get("/pedidos/:id", pedidosController.find);
router.delete("/pedidos/:id", pedidosController.destroy);
router.post("/pedidos", pedidosController.create);
router.put("/pedidos/:id", pedidosController.update);
export default router;
