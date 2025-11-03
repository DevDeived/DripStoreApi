import prisma from "../config/prisma.js"

export const index = async() => {
    let results = await prisma.transportadora.findMany()
    return results
}

export const find = async(id) => {
    let results = await prisma.transportadora.findUnique(
        {
            where: {id:Number(id)}
        }
    )
    return results
}

export const create = async(nome,cnpj) => {
    let results = await prisma.transportadora.create(
        {
            data: {nome,cnpj}
            
        }
    )
    return results
}

export const destroy = async(id) => {
    let results = await prisma.transportadora.delete(
        {
            where: {id:Number(id)}
        }
    )
    return results
}
export const update = async(id,nome,cnpj) => {
    let results = await prisma.transportadora.update(
        {
            where: {id:Number(id)},
            data: {nome,cnpj}
           
        }
    )
    return results
}
