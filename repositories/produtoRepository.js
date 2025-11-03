import prisma from "../config/prisma.js"

export const index = async () => {
  const results = await prisma.produto.findMany({
    include: {
      marca: true,
      categoria: true,   
      promocao:true
    },
  });
  return results;
};


export const find = async(id) => {
    let results = await prisma.produto.findUnique(
        {
            where: {id:Number(id)}
        }
    )

    return results
}

export const create = async(nome,descricao,avaliacao,tamanho,cor,preco,genero,categoria_id,estado_id,marca_id,promocao_id) => {
    let results = await prisma.produto.create(
        {
            data: {
                nome,
                descricao,
                avaliacao,
                tamanho,
                cor,
                preco,
                genero, 
                categoria_id,
                estado_id,
                marca_id,
                promocao_id            }
        }
    )

    return results
}

export const destroy = async(id) => {
    let results = await prisma.produto.delete(
        {
            where: {id: Number(id)}
        }
    )

    return results
}

export const update = async(id, nome,descricao,avaliacao,tamanho,cor,preco,genero,categoria_id,estado_id,marca_id,promocao_id) => {
    let results = await prisma.produto.update(
        {
            where: {id: Number(id)},
            data: { 
                nome,
                descricao,
                avaliacao,
                tamanho,
                cor,
                preco,
                genero,
                categoria_id,
                estado_id,
                marca_id,
                promocao_id
            }
        }
    )

    return results
}