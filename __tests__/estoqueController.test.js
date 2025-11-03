
import * as estoqueController from "../controllers/estoqueController.js"
import * as estoqueService from "../services/estoqueService.js"

jest.mock("../services/estoqueService.js")

describe("Testes unitários de estoque", () => {
    let req, res;

    beforeAll(() => {
        req = { params: {}, body: {} }
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        }
        jest.clearAllMocks()
    })

    it("deve retornar a listagem de estoque", async () => {
        let estoque = [{ id: 1, nome: "esportes" }]
        estoqueService.index.mockResolvedValue(estoque)

        await estoqueController.index(req, res)

        expect(estoqueService.index).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(estoque)

    })

    it("deve retornar uma estoque em específico", async () => {
        req.params.id = 1
        let estoque = [{ id: 1, nome: "esportes" }]

        estoqueService.find.mockResolvedValue(estoque)

        await estoqueController.find(req, res)

        expect(estoqueService.find).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(estoque)

    })

    it("deve deletar uma estoque ", async () => {
        req.params.id = 1
        let estoque = [{ id: 1, nome: "esportes" }]

        estoqueService.destroy.mockResolvedValue(estoque)

        await estoqueController.destroy(req, res)

        expect(estoqueService.destroy).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(estoque)

    })

    it("deve criar uma estoque ", async () => {
        req.params.body = "Corrida"

        estoqueService.create.mockResolvedValue(req.params.body)

        await estoqueController.create(req, res)

        expect(estoqueService.create).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith("Estoque cadastrado com sucesso")

    })

        it("deve atualizar um estoque ", async () => {
        req.params.body = "Corrida"
        req.params.id = 1

        estoqueService.update.mockResolvedValue(req.params.id,req.params.body)

        await estoqueController.update(req, res)

        expect(estoqueService.update).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith("Estoque atualizado com sucesso")
        console.log(req.params.id,req.params.body);
        

    })
})