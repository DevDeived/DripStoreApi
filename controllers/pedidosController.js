// controllers/pedidosController.js
import * as pedidoService from "../services/pedidosService.js";


export const index = async (req, res) => {
  try {
    const pedidos = await pedidoService.index();  // ← AGORA FUNCIONA
    res.status(200).json(pedidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const find = async (req, res) => {
  try {
    const pedido = await pedidoService.find(req.params.id);
    if (!pedido) return res.status(404).json({ erro: "Não encontrado" });
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const { total, formaDePagamentoId, statusId, transportadoraId, dados_cliente } = req.body;
    const data = {
      total: parseFloat(total) || 0,
      formaDePagamentoId: parseInt(formaDePagamentoId),
      statusId: parseInt(statusId),
      transportadoraId: parseInt(transportadoraId),
      dados_cliente
    };
    const novo = await pedidoService.create(data);
    res.status(201).json({ success: true, data: novo });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const atualizado = await pedidoService.update(req.params.id, req.body);
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const destroy = async (req, res) => {
  try {
    await pedidoService.destroy(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};