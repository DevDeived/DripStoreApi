import express from "express"
import * as marcaController from "../controllers/marcaController.js"

const router = express.Router()

router.get("/marca",marcaController.index)
router.get("/marca/:id",marcaController.find)
router.delete("/marca/:id",marcaController.destroy)
router.post("/marca",marcaController.create)
router.put("/marca/:id",marcaController.update)
export default router