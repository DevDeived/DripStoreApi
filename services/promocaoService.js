import * as promocaoRepository from "../repositories/promocaoRepository.js"


export const index = async() => {
    return await promocaoRepository.index()
}

export const find = async(id) => {
    return await promocaoRepository.find(id);
}

export const destroy = async(id) => {
    return await promocaoRepository.destroy(id)
}

export const create = async(nome,inicio,termino) => {
    return await promocaoRepository.create(nome,inicio,termino)
}

export const update = async(id,nome,inicio,termino) => {
    return await promocaoRepository.update(id,nome,inicio,termino)
}