import * as categoriaRepository from "../repositories/categoriaRepository.js"


export const index = async() => {
    return await categoriaRepository.index()
}

export const find = async(id) => {
    return await categoriaRepository.find(id)
}

export const destroy = async(id) => {
    return await categoriaRepository.destroy(id)
}

export const create = async(nome) => {
    return await categoriaRepository.create(nome)
}

export const update = async(id, nome) => {
    return await categoriaRepository.update(id, nome)

}