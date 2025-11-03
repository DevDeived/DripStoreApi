
import * as usuarioController from "../controllers/usuariosController.js"
import * as usuarioService from "../services/usuariosService.js"

jest.mock("../services/usuariosService.js")

describe("Testes unitários de usuario", () => {
    let req, res;

    beforeAll(() => {
        req = { params: {}, body: {} }
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        }
        jest.clearAllMocks()
    })

    it("deve retornar a listagem de usuario", async () => {
        let usuario = [{ id: 1, nome: "esportes" }]
        usuarioService.index.mockResolvedValue(usuario)

        await usuarioController.index(req, res)

        expect(usuarioService.index).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(usuario)

    })

    it("deve retornar uma usuario em específico", async () => {
        req.params.id = 1
        let usuario = [{ id: 1, nome: "esportes" }]

        usuarioService.find.mockResolvedValue(usuario)

        await usuarioController.find(req, res)

        expect(usuarioService.find).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(usuario)

    })

    it("deve deletar uma usuario ", async () => {
        req.params.id = 1
        let usuario = [{ id: 1, nome: "esportes" }]

        usuarioService.destroy.mockResolvedValue(usuario)

        await usuarioController.destroy(req, res)

        expect(usuarioService.destroy).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(usuario)

    })

    it("deve criar uma usuario ", async () => {
        req.params.body = "Corrida"
        let usuario = [{ id: 1, nome: "esportes" }]

        usuarioService.create.mockResolvedValue(usuario)

        await usuarioController.create(req, res)

        expect(usuarioService.create).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(usuario)

    })

        it("deve atualizar uma usuario ", async () => {
        req.params.body = "Corrida"
        req.params.id = 1
        let usuario = [{ id: 1, nome: "esportes" }]

        usuarioService.update.mockResolvedValue(usuario)

        await usuarioController.update(req, res)

        expect(usuarioService.update).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(usuario)

    })
})