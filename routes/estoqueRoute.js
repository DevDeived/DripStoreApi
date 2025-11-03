import express from "express"
import * as estoqueController from "../controllers/estoqueController.js"

const router = express.Router()

router.get("/estoque",estoqueController.index)
router.get("/estoque/:id",estoqueController.find)
router.delete("/estoque/:id",estoqueController.destroy)
router.post("/estoque",estoqueController.create)
router.put("/estoque/:id",estoqueController.update)
export default router