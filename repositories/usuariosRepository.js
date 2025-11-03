import prisma from "../config/prisma.js"

export const index = async() => {
    let results = await prisma.usuarios.findMany()
    return results
}

export const find = async(id) => {
    let results = await prisma.usuarios.findUnique(
        {
            where: {id:Number(id)}
        }
    )
    return results
}

export const findByEmail = async(email) => {
    let results = await prisma.usuarios.findUnique(
        {
            where: {email:email}
        }
    )
    return results
}

export const create = async(nome,cpf,genero,email,celular,senha) => {
    let results = await prisma.usuarios.create(
        {
            data: {nome,cpf,genero,email,celular,senha}
        }
    )
    return results
}

export const destroy = async(id) => {
    let results = await prisma.usuarios.delete(
        {
            where: {id:Number(id)}
        }
    )
    return results
}

export const update = async(id,nome,cpf,genero,email,celular,senha) => {
    let results = await prisma.usuarios.update(
        {
            where: {id:Number(id)},
            data: {nome,cpf,genero,email,celular,senha}
        }
    )
    return results
}