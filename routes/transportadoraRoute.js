import express from "express"
import * as transportadoraController from "../controllers/transportadoraController.js"

const router = express.Router()

router.get("/transportadora",transportadoraController.index)
router.get("/transportadora/:id",transportadoraController.find)
router.delete("/transportadora/:id",transportadoraController.destroy)
router.post("/transportadora",transportadoraController.create)
router.put("/transportadora/:id",transportadoraController.update)
export default router
