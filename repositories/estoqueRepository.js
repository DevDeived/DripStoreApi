import prisma from "../config/prisma.js"

export const index = async() => {
    let results = await prisma.estoque.findMany()
    return results
}

export const find = async(id) => {
    let results = await prisma.estoque.findUnique(
        {
            where: {id:Number(id)}
        }
    )
    return results
}

export const create = async(produto_id, quantidade) => {
    let results = await prisma.estoque.create(
        {
            data: {produto_id, quantidade}
        }
    )
    return results
}

export const destroy = async(id) => {
    let results = await prisma.estoque.delete(
        {
            where: {id:Number(id)}
        }
    )
    return results
}

export const update = async(id, produto_id, quantidade) => {
    let results = await prisma.estoque.update(
        {
            where: {id:Number(id)},
            data: {produto_id, quantidade}
        }
    )
    return results
}