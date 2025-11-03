import prisma from "../config/prisma.js"

export const index = async() => {
    let results = await prisma.categoria.findMany()
    return results
}

export const find = async(id) => {
    let results = await prisma.categoria.findUnique(
        {
            where: {id:Number(id)}
        }
    )
    return results
}

export const create = async(nome) => {
    let results = await prisma.categoria.create(
        {
            data: {nome}
        }
    )
    return results
}

export const destroy = async(id) => {
    let results = await prisma.categoria.delete(
        {
            where: {id:Number(id)}
        }
    )
    return results
}

export const update = async(id,nome) => {
    let results = await prisma.categoria.update(
        {
            where: {id:Number(id)},
            data: {nome}
        }
    )
    return results
}