import express from "express"
import * as promocaoController from "../controllers/promocaoController.js"

const router = express.Router()

router.get("/promocao",promocaoController.index)
router.get("/promocao/:id",promocaoController.find)
router.delete("/promocao/:id",promocaoController.destroy)
router.post("/promocao",promocaoController.create)
router.put("/promocao/:id",promocaoController.update)
export default router