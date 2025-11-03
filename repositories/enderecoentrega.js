import prisma from "../config/prisma.js"

export const index = async() => {
    let results = await prisma.end_de_entrega.findMany()
    return results
}

export const find = async(id) => {
    let results = await prisma.end_de_entrega.findUnique(
        {
            where: {id:Number(id)}
        }
    )
    return results
}

export const create = async(estado,cidade,rua,cep,numero,complemento) => {
    let results = await prisma.end_de_entrega.create(
        {
            data: {estado,cidade,rua,cep,numero,complemento}
        }
    )
    return results
}

export const destroy = async(id) => {
    let results = await prisma.end_de_entrega.delete(
        {
            where: {id:Number(id)}
        }
    )
    return results
}

export const update = async(id,estado) => {
    let results = await prisma.end_de_entrega.update(
        {
            where: {id:Number(id)},
            data: {estado,cidade,rua,cep,numero,complemento}
        }
    )
    return results
}