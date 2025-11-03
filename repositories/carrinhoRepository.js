import prisma from "../config/prisma.js";

// Buscar todos os itens do carrinho de um usuário
export const listarCarrinho = async (usuario_id) => {
  return await prisma.carrinho.findMany({
    where: { usuario_id: Number(usuario_id) },
    include: {
      produto: true, // traz informações do produto junto
    },
  });
};

// Adicionar um produto ao carrinho
export const adicionarCarrinho = async (usuario_id, produto_id, tamanho, cor, quantidade) => {
  return await prisma.carrinho.create({
    data: {
      usuario_id: Number(usuario_id),
      produto_id: Number(produto_id),
      tamanho,
      cor,
      quantidade,
    },
  });
};

// Remover item do carrinho
export const removerCarrinho = async (id) => {
  return await prisma.carrinho.delete({
    where: { id: Number(id) },
  });
};

// Atualizar quantidade
export const atualizarCarrinho = async (id, quantidade) => {
  return await prisma.carrinho.update({
    where: { id: Number(id) },
    data: { quantidade },
  });
};