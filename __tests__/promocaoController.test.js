import * as promocaoController from "../controllers/promocaoController.js"
import * as promocaoService from "../services/promocaoService.js"

jest.mock("../services/promocaoService.js")

describe("Testes unitários de promoção", () => {
    let req, res;

    beforeAll(() => {
        req = { params: {}, body: {} }
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        }
        jest.clearAllMocks()
    })

    it("deve retornar a listagem de promoção", async () => {
        let promocoes = [{ id: 1, nome: "Black Friday" }]
        promocaoService.index.mockResolvedValue(promocoes)

        await promocaoController.index(req, res)

        expect(promocaoService.index).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(promocoes)
    })

    it("deve retornar uma promoção específica", async () => {
        req.params.id = 1
        let promocao = [{ id: 1, nome: "Black Friday" }]

        promocaoService.find.mockResolvedValue(promocao)

        await promocaoController.find(req, res)

        expect(promocaoService.find).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(promocao)
    })

    it("deve deletar uma promoção", async () => {
        req.params.id = 1
        let promocao = [{ id: 1, nome: "Black Friday" }]

        promocaoService.destroy.mockResolvedValue(promocao)

        await promocaoController.destroy(req, res)

        expect(promocaoService.destroy).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(promocao)
    })

    it("deve criar uma promoção", async () => {
        req.body = { nome: "Black Friday" }
        

        promocaoService.create.mockResolvedValue(req.body)

        await promocaoController.create(req, res)

        expect(promocaoService.create).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith("Promoção criada com sucesso")
    })

    it("deve atualizar uma promoção", async () => {
        req.body = { nome: "Dev Friday" }
        req.params.id = 1


        promocaoService.update.mockResolvedValue(req.params.id, req.body)

        await promocaoController.update(req, res)

        expect(promocaoService.update).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith("Promoção atualizada com sucesso")
    })
})
