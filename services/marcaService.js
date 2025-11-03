import * as marcaRepository from "../repositories/marcaRepository.js"


export const index = async() => {
    return await marcaRepository.index()
}

export const find = async(id) => {
    return await marcaRepository.find(id)
}

export const destroy = async(id) => {
    return await marcaRepository.destroy(id)
}

export const create = async(nome) => {
    return await marcaRepository.create(nome)
}

export const update = async(id,nome) => {
    return await marcaRepository.update(nome,id)
}