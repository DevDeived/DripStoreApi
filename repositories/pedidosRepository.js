import prisma from "../config/prisma.js";

export const index = async () => {
  const pedido = await prisma.pedido.findMany({
    include: {
      forma_de_pagamento: true,
      status: true,
      transportadora: true,
      itens: {
        include: { produto: true },
      },
    },
  });
  return pedido;
};

export const find = async (id) => {
  const pedido = await prisma.pedido.findUnique({
    where: { id: Number(id) },
    include: {
      forma_de_pagamento: true,
      status: true,
      transportadora: true,
      itens: {
        include: { produto: true },
      },
    },
  });
  return pedido;
};

export const create = async (data) => {
  const { total, formaDePagamentoId, statusId, transportadoraId, dados_cliente } = data;
  
  const novoPedido = await prisma.pedido.create({
    data: {
      total: parseFloat(total) || 0,
      formaDePagamentoId: parseInt(formaDePagamentoId),
      statusId: parseInt(statusId),
      transportadoraId: parseInt(transportadoraId),
      dados_cliente: dados_cliente || null,
    },
    include: {
      formaDePagamento: {
        select: { id: true, tipo: true }
      },
      status: {
        select: { id: true, nome: true }
      },
      transportadora: {
        select: { id: true, nome: true }
      }
    }
  });

  return novoPedido;
};

export const update = async (
  id,
  nome,
  cod_rastreio,
  data_compra,
  data_entrega,
  forma_de_pagamento_id,
  status_id,
  transportadora_id
) => {
  const pedidoAtualizado = await prisma.pedido.update({
    where: { id: Number(id) },
    data: {
      nome,
      cod_rastreio,
      data_compra,
      data_entrega,
      forma_de_pagamento_id,
      status_id,
      transportadora_id,
    },
  });
  return pedidoAtualizado;
};

export const destroy = async (id) => {
  const pedidoExcluido = await prisma.pedido.delete({
    where: { id: Number(id) },
  });
  return pedidoExcluido;
};