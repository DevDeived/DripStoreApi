import * as formadePagamentoController from "../controllers/formadePagamentoController.js"
import * as formadePagamentoService from "../services/formadePagamentoService.js"


jest.mock("../services/formadePagamentoService.js")

describe("Testes unitários de forma de Pagamento", () => {
    let req, res;

    beforeAll(() => {
        req = { params: {}, body: {} }
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        }
        jest.clearAllMocks()
    })

    it("deve retornar a listagem de forma de Pagamento", async () => {
        let formadePagamento = [{ id: 1, nome: "esportes" }]
        formadePagamentoService.index.mockResolvedValue(formadePagamento)

        await formadePagamentoController.index(req, res)

        expect(formadePagamentoService.index).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(formadePagamento)

    })

    it("deve retornar uma forma de Pagamento em específico", async () => {
        req.params.id = 1
        let formadePagamento = [{ id: 1, nome: "esportes" }]

        formadePagamentoService.find.mockResolvedValue(formadePagamento)

        await formadePagamentoController.find(req, res)

        expect(formadePagamentoService.find).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(formadePagamento)

    })

    it("deve deletar uma forma de Pagamento ", async () => {
        req.params.id = 1
        let formadePagamento = [{ id: 1, nome: "esportes" }]

        formadePagamentoService.destroy.mockResolvedValue(formadePagamento)

        await formadePagamentoController.destroy(req, res)

        expect(formadePagamentoService.destroy).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(formadePagamento)

    })

    it("deve criar uma formadePagamento ", async () => {
        req.params.body = "Corrida"

        formadePagamentoService.create.mockResolvedValue(req.params.body)

        await formadePagamentoController.create(req, res)

        expect(formadePagamentoService.create).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith("Forma de pagamento cadastrada com sucesso")

    })

        it("deve atualizar uma formadePagamento ", async () => {
        req.params.body = "Corrida"
        req.params.id = 1

        formadePagamentoService.update.mockResolvedValue(req.params.id,req.params.body)

        await formadePagamentoController.update(req, res)

        expect(formadePagamentoService.update).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith("Forma de pagamento atualizado com sucesso")
    })
})