
import * as categoriaController from "../controllers/categoriaController.js"
import * as categoriaService from "../services/categoriaService.js"

jest.mock("../services/categoriaService.js")

describe("Testes unitários de endereços", () => {
    let req, res;

    beforeAll(() => {
        req = { params: {}, body: {} }
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        }
        jest.clearAllMocks()
    })

    it("deve retornar a listagem de categoria", async () => {
        let categoria = [{ id: 1, nome: "esportes" }]
        categoriaService.index.mockResolvedValue(categoria)

        await categoriaController.index(req, res)

        expect(categoriaService.index).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(categoria)

    })

    it("deve retornar uma categoria em específico", async () => {
        req.params.id = 1
        let categoria = [{ id: 1, nome: "esportes" }]

        categoriaService.find.mockResolvedValue(categoria)

        await categoriaController.find(req, res)

        expect(categoriaService.find).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(categoria)

    })

    it("deve deletar uma categoria ", async () => {
        req.params.id = 1
        let categoria = [{ id: 1, nome: "esportes" }]

        categoriaService.destroy.mockResolvedValue(categoria)

        await categoriaController.destroy(req, res)

        expect(categoriaService.destroy).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(categoria)

    })

    it("deve criar uma categoria ", async () => {
        req.params.body = "Corrida"

        categoriaService.create.mockResolvedValue(req.params.body)

        await categoriaController.create(req, res)

        expect(categoriaService.create).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith("Categoria cadastrada com sucesso")

    })

        it("deve atualizar uma categoria ", async () => {
        req.params.body = "Corrida"
        req.params.id = 1

        categoriaService.update.mockResolvedValue(req.params.id,req.params.body)

        await categoriaController.update(req, res)

        expect(categoriaService.update).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith("Categoria atualizada com sucesso")

    })
})