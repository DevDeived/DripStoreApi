import express from "express"
import * as forma_de_pagamentoController from "../controllers/formadePagamentoController.js"

const router = express.Router()

router.get("/forma_de_pagamento",forma_de_pagamentoController.index)
router.get("/forma_de_pagamento/:id",forma_de_pagamentoController.find)
router.delete("/forma_de_pagamento/:id",forma_de_pagamentoController.destroy)
router.post("/forma_de_pagamento",forma_de_pagamentoController.create)
router.put("/forma_de_pagamento/:id",forma_de_pagamentoController.update)
export default router