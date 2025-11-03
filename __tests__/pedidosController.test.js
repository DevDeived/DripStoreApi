import * as pedidosController from "../controllers/pedidosController.js"
import * as pedidosService from "../services/pedidosService.js"

jest.mock("../services/pedidosService.js")

describe("Testes unitários de pedidos", () => {
  let req, res

  beforeEach(() => {
    req = { params: {}, body: {} }
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    }
    jest.clearAllMocks()
  })

  it("deve retornar a listagem de pedidos", async () => {
    const pedidos = [{
      id: 1,
      nome: "Tennis Nike",
      cod_rastreio: "",
      data_compra: "",
      data_entrega: "",
      forma_de_pagamento_id: "",
      status_id: "",
      transportadora_id: ""
    }]
    pedidosService.index.mockResolvedValue(pedidos)

    await pedidosController.index(req, res)

    expect(pedidosService.index).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.send).toHaveBeenCalledWith(pedidos)
  })

  it("deve retornar um pedido em específico", async () => {
    req.params.id = 1
    const pedido = {
      id: 1,
      nome: "Tennis Nike",
      cod_rastreio: "",
      data_compra: "",
      data_entrega: "",
      forma_de_pagamento_id: "",
      status_id: "",
      transportadora_id: ""
    }

    pedidosService.find.mockResolvedValue(pedido)

    await pedidosController.find(req, res)

    expect(pedidosService.find).toHaveBeenCalledWith(1)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.send).toHaveBeenCalledWith(pedido)
  })

  it("deve deletar um pedido", async () => {
    req.params.id = 1
    const pedido = {
      id: 1,
      nome: "Tennis Nike",
      cod_rastreio: "",
      data_compra: "",
      data_entrega: "",
      forma_de_pagamento_id: "",
      status_id: "",
      transportadora_id: ""
    }

    pedidosService.destroy.mockResolvedValue(pedido)

    await pedidosController.destroy(req, res)

    expect(pedidosService.destroy).toHaveBeenCalledWith(1)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.send).toHaveBeenCalledWith(pedido)
  })

  it("deve criar um pedido", async () => {
    req.body = {
      nome: "Tennis Nike",
      cod_rastreio: "",
      data_compra: "",
      data_entrega: "",
      forma_de_pagamento_id: "",
      status_id: "",
      transportadora_id: ""
    }

    pedidosService.create.mockResolvedValue()

    await pedidosController.create(req, res)

    expect(pedidosService.create).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.send).toHaveBeenCalledWith("Pedido cadastrado com sucesso")
  })

  it("deve atualizar um pedido", async () => {
    req.params.id = 1
    req.body = {
      nome: "Tennis Nike",
      cod_rastreio: "",
      data_compra: "",
      data_entrega: "",
      forma_de_pagamento_id: "",
      status_id: "",
      transportadora_id: ""
    }

    pedidosService.update.mockResolvedValue()

    await pedidosController.update(req, res)

    expect(pedidosService.update).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.send).toHaveBeenCalledWith("Pedido atualizado com sucesso")
  })
})
