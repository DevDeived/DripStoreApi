import express from "express"
import * as categoriaController from "../controllers/categoriaController.js"

const router = express.Router()

router.get("/categoria",categoriaController.index)
router.get("/categoria/:id",categoriaController.find)
router.delete("/categoria/:id",categoriaController.destroy)
router.post("/categoria",categoriaController.create)
router.put("/categoria/:id",categoriaController.update)
export default router