import prisma from "../config/prisma.js";

export const create = async (usuarioData, enderecoData, senha) => {
  return await prisma.usuarios.create({
    data: {
      ...usuarioData,
      senha,
      endereco_de_entrega: {
        create: {
          ...enderecoData,
        },
      },
    },
    include: {
      endereco_de_entrega: true,
    },
  });
};

export const update = async (id, usuarioData, enderecoData, senha) => {
  return await prisma.usuarios.update({
    where: { id: Number(id) },
    data: {
      ...usuarioData,
      ...(senha && { senha }),
      endereco_de_entrega: {
        updateMany: {
          data: { ...enderecoData },
        },
      },
    },
    include: { endereco_de_entrega: true },
  });
};

export const index = async () => await prisma.usuarios.findMany({ include: { endereco_de_entrega: true } });

export const find = async (id) =>
  await prisma.usuarios.findUnique({ where: { id: Number(id) }, include: { endereco_de_entrega: true } });

export const destroy = async (id) =>
  await prisma.usuarios.delete({ where: { id: Number(id) } });

export const findByEmail = async (email) =>
  await prisma.usuarios.findUnique({ where: { email }, include: { endereco_de_entrega: true } });
