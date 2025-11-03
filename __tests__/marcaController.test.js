
import * as marcaController from "../controllers/marcaController.js"
import * as marcaService from "../services/marcaService.js"

jest.mock("../services/marcaService.js")

describe("Testes unitários de marca", () => {
    let req, res;

    beforeAll(() => {
        req = { params: {}, body: {} }
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        }
        jest.clearAllMocks()
    })

    it("deve retornar a listagem de marca", async () => {
        let marca = [{ id: 1, nome: "esportes" }]
        marcaService.index.mockResolvedValue(marca)

        await marcaController.index(req, res)

        expect(marcaService.index).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(marca)

    })

    it("deve retornar uma marca em específico", async () => {
        req.params.id = 1
        let marca = [{ id: 1, nome: "esportes" }]

        marcaService.find.mockResolvedValue(marca)

        await marcaController.find(req, res)

        expect(marcaService.find).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(marca)

    })

    it("deve deletar uma marca ", async () => {
        req.params.id = 1
        let marca = [{ id: 1, nome: "esportes" }]

        marcaService.destroy.mockResolvedValue(marca)

        await marcaController.destroy(req, res)

        expect(marcaService.destroy).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(marca)

    })

    it("deve criar uma marca ", async () => {
        req.params.body = "Corrida"
        let marca = [{ id: 1, nome: "esportes" }]

        marcaService.create.mockResolvedValue(marca)

        await marcaController.create(req, res)

        expect(marcaService.create).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(marca)

    })

        it("deve atualizar uma marca ", async () => {
        req.params.body = "Corrida"
        req.params.id = 1
        let marca = [{ id: 1, nome: "esportes" }]

        marcaService.update.mockResolvedValue(marca)

        await marcaController.update(req, res)

        expect(marcaService.update).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(marca)

    })
})          