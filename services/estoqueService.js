import * as estoqueRepository from "../repositories/estoqueRepository.js"


export const index = async() => {
    return await estoqueRepository.index()
}

export const find = async(id) => {
    return await estoqueRepository.find(id)
}

export const destroy = async(id) => {
    return await estoqueRepository.destroy(id)
}

export const create = async(produto_id, quantidade) => {
    return await estoqueRepository.create(produto_id, quantidade)
}

export const update = async(id, produto_id, quantidade) => {
    return await estoqueRepository.update(id, produto_id, quantidade)
}