import prisma from "../config/prisma.js"

export const index = async() => {
    let results = await prisma.promocao.findMany()
    return results
    
}

export const find = async(id) => {
    let results = await prisma.promocao.findUnique(
        {
            where: {id:Number(id)}
        }
    )
    return results;
}

export const create = async(nome,inicio,termino) => {
    let results = await prisma.promocao.create(
        {
            data: {nome,inicio,termino}
        }
    )
    return results
}

export const destroy = async(id) => {
    let results = await prisma.promocao.delete(
        {
            where: {id:Number(id)}
        }
    )
    return results
}

export const update = async(id,nome,inicio,termino) => {
    let results = await prisma.promocao.update(
        {
            where: {id:Number(id)},
            data: {nome,inicio,termino}
        }
    )
    return results
}