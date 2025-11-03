import * as CarrinhoRepository from "../repositories/carrinhoRepository.js";

export const listar = async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const carrinho = await CarrinhoRepository.listarCarrinho(usuario_id);
    res.status(200).json(carrinho);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar carrinho", details: error.message });
  }
};

export const adicionar = async (req, res) => {
  try {
    const { usuario_id, produto_id, tamanho, cor, quantidade } = req.body;
    const novoItem = await CarrinhoRepository.adicionarCarrinho(usuario_id, produto_id, tamanho, cor, quantidade);
    res.status(201).json(novoItem);
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar item ao carrinho", details: error.message });
  }
};

export const remover = async (req, res) => {
  try {
    const { id } = req.params;
    await CarrinhoRepository.removerCarrinho(id);
    res.status(200).json({ message: "Item removido com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover item", details: error.message });
  }
};

export const atualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantidade } = req.body;
    const atualizado = await CarrinhoRepository.atualizarCarrinho(id, quantidade);
    res.status(200).json(atualizado);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar item", details: error.message });
  }
};