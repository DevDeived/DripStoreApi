import prisma from "../config/prisma.js";

/**
 * Buscar produtos com filtros e paginação
 */
export const getFiltered = async ({
  filtros = {},
  sort = "lancamento",
  page = 1,
  limit = 12,
}) => {
  const where = {};

  // FILTROS
  if (filtros.marca && filtros.marca.length > 0) {
    where.marca_id = { in: filtros.marca.map(Number) };
  }

  if (filtros.categoria && filtros.categoria.length > 0) {
    where.categoria_id = { in: filtros.categoria.map(Number) };
  }

  if (filtros.genero && filtros.genero.length > 0) {
    where.genero = { in: filtros.genero };
  }

  // ORDENAÇÃO
  let orderBy = { createdAt: "desc" };
  if (sort === "preco_asc") orderBy = { preco: "asc" };
  if (sort === "preco_desc") orderBy = { preco: "desc" };

  const skip = (page - 1) * limit;

  try {
    const [data, total] = await Promise.all([
      prisma.produto.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: {
          marca: true,
          categoria: true,
          promocao: true,
        },
      }),
      prisma.produto.count({ where }),
    ]);

    return {
      data,
      total,
      totalPages: Math.ceil(total / limit),
      page: Number(page),
      limit,
    };
  } catch (error) {
    console.error("Erro no Prisma (getFiltered):", error);
    throw new Error("Erro ao buscar produtos");
  }
};

export const find = async (id) => {
  try {
    const produto = await prisma.produto.findUnique({
      where: { id: Number(id) },
      include: {
        marca: true,
        categoria: true,
        promocao: true,
        estado: true,
        estoque: true,
        forma_de_pagamento: true,
        end_de_entrega: true,
      },
    });

    return produto;
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    throw new Error("Erro ao buscar produto");
  }
};

/**
 * CRIAR PRODUTO – ACEITA promocao_id = null
 */
export const create = async (data, file) => {
  try {
    if (file) {
      data.imagem = `uploads/${file.filename}`;
    }

    const novoProduto = await prisma.produto.create({
      data: {
        nome: data.nome,
        descricao: data.descricao,
        avaliacao: Number(data.avaliacao) || 0,
        tamanho: data.tamanho,
        cor: data.cor,
        preco: Number(data.preco),
        genero: data.genero,
        imagem: data.imagem,
        categoria_id: Number(data.categoria_id),
        estado_id: Number(data.estado_id),
        marca_id: Number(data.marca_id),
        // ACEITA NULL
        promocao_id: data.promocao_id === null || data.promocao_id === undefined ? null : Number(data.promocao_id),
        estoque_id: Number(data.estoque_id),
        forma_de_pagamento_id: Number(data.forma_de_pagamento_id),
        end_de_entrega_id: Number(data.end_de_entrega_id),
      },
    });

    return novoProduto;
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    throw new Error("Erro ao criar produto");
  }
};

/**
 * ATUALIZAR PRODUTO – ACEITA promocao_id = null
 */
export const update = async (id, data, file) => {
  try {
    if (file) {
      data.imagem = `uploads/${file.filename}`;
    }

    const produtoAtualizado = await prisma.produto.update({
      where: { id: Number(id) },
      data: {
        nome: data.nome,
        descricao: data.descricao,
        avaliacao: data.avaliacao ? Number(data.avaliacao) : undefined,
        tamanho: data.tamanho,
        cor: data.cor,
        preco: data.preco ? Number(data.preco) : undefined,
        genero: data.genero,
        imagem: data.imagem,
        categoria_id: data.categoria_id ? Number(data.categoria_id) : undefined,
        estado_id: data.estado_id ? Number(data.estado_id) : undefined,
        marca_id: data.marca_id ? Number(data.marca_id) : undefined,
        // ACEITA NULL
        promocao_id: data.promocao_id === undefined ? undefined : (data.promocao_id === null ? null : Number(data.promocao_id)),
        estoque_id: data.estoque_id ? Number(data.estoque_id) : undefined,
        forma_de_pagamento_id: data.forma_de_pagamento_id ? Number(data.forma_de_pagamento_id) : undefined,
        end_de_entrega_id: data.end_de_entrega_id ? Number(data.end_de_entrega_id) : undefined,
      },
    });

    return produtoAtualizado;
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    throw new Error("Erro ao atualizar produto");
  }
};

export const destroy = async (id) => {
  try {
    await prisma.produto.delete({
      where: { id: Number(id) },
    });
    return { message: "Produto deletado com sucesso" };
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    throw new Error("Erro ao deletar produto");
  }
};