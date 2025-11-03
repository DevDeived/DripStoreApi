
import * as enderecoentregaController from "../controllers/enderecoentregaController.js"
import * as enderecoentregaService from "../services/enderecoentregaService.js"

jest.mock("../services/enderecoentregaService.js")

describe("Testes unitários de categoria", () => {
    let req, res;

    beforeAll(() => {
        req = { params: {}, body: {} }
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        }
        jest.clearAllMocks()
    })

    it("deve retornar a listagem de endereço", async () => {
        let enderecoentrega = [{ id: 1, nome: "Aqueles bairros lá" }]
        enderecoentregaService.index.mockResolvedValue(enderecoentrega)

        await enderecoentregaController.index(req, res)

        expect(enderecoentregaService.index).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(enderecoentrega)

    })

    it("deve retornar um endereço em específico", async () => {
        req.params.id = 1
        let enderecoentrega = [{ id: 1, nome: "Aqueles bairros lá" }]

        enderecoentregaService.find.mockResolvedValue(enderecoentrega)

        await enderecoentregaController.find(req, res)

        expect(enderecoentregaService.find).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(enderecoentrega)

    })

    it("deve deletar um endereço ", async () => {
        req.params.id = 1
        let enderecoentrega = [{ id: 1, nome: "Aqueles bairros lá" }]

        enderecoentregaService.destroy.mockResolvedValue(enderecoentrega)

        await enderecoentregaController.destroy(req, res)

        expect(enderecoentregaService.destroy).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(enderecoentrega)

    })

    it("deve criar um endereço ", async () => {
        req.params.body = "Aqueles bairros lá"
        let enderecoentrega = [{ id: 1, nome: "Aqueles bairros lá" }]

        enderecoentregaService.create.mockResolvedValue(enderecoentrega)

        await enderecoentregaController.create(req, res)

        expect(enderecoentregaService.create).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(enderecoentrega)

    })

        it("deve atualizar um endereço ", async () => {
        req.params.body = "Aqueles bairros lá"
        req.params.id = 1
        let enderecoentrega = [{ id: 1, nome: "Aqueles bairros lá" }]

        enderecoentregaService.update.mockResolvedValue(enderecoentrega)

        await enderecoentregaController.update(req, res)

        expect(enderecoentregaService.update).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(enderecoentrega)

    })
})