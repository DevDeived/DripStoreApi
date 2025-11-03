import * as formadePagamentoRepository from "../repositories/formadePagamentoRepository.js"


export const index = async() => {
    return await formadePagamentoRepository.index()
}

export const find = async(id) => {
    return await formadePagamentoRepository.find(id)
}

export const destroy = async(id) => {
    return await formadePagamentoRepository.destroy(id)
}

export const create = async (nome) => {
    return await formadePagamentoRepository.create(nome);
}

export const update = async(id, nome) => {
    return await formadePagamentoRepository.update(id, nome)
}
