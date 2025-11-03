import express from "express"
import * as enderecoentregaController from "../controllers/enderecoentregaController.js"

const router = express.Router()

router.get("/enderecoentrega",enderecoentregaController.index)
router.get("/enderecoentrega/:id",enderecoentregaController.find)
router.delete("/enderecoentrega/:id",enderecoentregaController.destroy)
router.post("/enderecoentrega",enderecoentregaController.create)
router.put("/enderecoentrega/:id",enderecoentregaController.update)
export default router