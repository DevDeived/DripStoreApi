
import * as produtoController from "../controllers/produtoController.js"
import * as produtoService from "../services/produtoService.js"

jest.mock("../services/produtoService.js")

describe("Testes unitários de produto", () => {
    let req, res;

    beforeAll(() => {
        req = { params: {}, body: {} }
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        }
        jest.clearAllMocks()
    })

    it("deve retornar a listagem de produto", async () => {
        let produto = [{ id: 1, nome: "esportes" }]
        produtoService.index.mockResolvedValue(produto)

        await produtoController.index(req, res)

        expect(produtoService.index).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(produto)

    })

    it("deve retornar uma produto em específico", async () => {
        req.params.id = 1
        let produto = [{ id: 1, nome: "esportes" }]

        produtoService.find.mockResolvedValue(produto)

        await produtoController.find(req, res)

        expect(produtoService.find).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(produto)

    })

    it("deve deletar uma produto ", async () => {
        req.params.id = 1
        let produto = [{ id: 1, nome: "esportes" }]

        produtoService.destroy.mockResolvedValue(produto)

        await produtoController.destroy(req, res)

        expect(produtoService.destroy).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(produto)

    })

    it("deve criar uma produto ", async () => {
        req.params.body = "Corrida"

        produtoService.create.mockResolvedValue(req.params.body)

        await produtoController.create(req, res)

        expect(produtoService.create).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith("Produto cadastrado com sucesso")

    })

        it("deve atualizar uma produto ", async () => {
        req.params.body = "Corrida"
        req.params.id = 1

        produtoService.update.mockResolvedValue(req.params.id,req.params.body)

        await produtoController.update(req, res)

        expect(produtoService.update).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith("Produto atualizado com sucesso")

    })
})