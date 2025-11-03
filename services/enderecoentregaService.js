import * as enderecoentregaRepository from "../repositories/enderecoentrega.js"


export const index = async() => {
    return await enderecoentregaRepository.index()
}

export const find = async(id) => {
    return await enderecoentregaRepository.find(id)
}

export const destroy = async(id) => {
    return await enderecoentregaRepository.destroy(id)
}

export const create = async(estado,cidade,rua,cep,numero,complemento) => {
    return await enderecoentregaRepository.create(estado,cidade,rua,cep,numero,complemento)
}

export const update = async(id,estado,cidade,rua,cep,numero,complemento) => {
    return await enderecoentregaRepository.update(id,estado,cidade,rua,cep,numero,complemento)
}