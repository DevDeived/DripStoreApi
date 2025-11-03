import * as transportadoraRepository from "../repositories/transportadoraRepository.js"


export const index = async() => {
    return await transportadoraRepository.index()
}

export const find = async(id) => {
    return await transportadoraRepository.find(id)
}

export const destroy = async(id) => {
    return await transportadoraRepository.destroy(id)
}

export const create = async(nome,cnpj) => {
    return await transportadoraRepository.create(nome,cnpj)
}

export const update = async(id,nome,cnpj) => {
    return await transportadoraRepository.update(id,nome,cnpj)
}

