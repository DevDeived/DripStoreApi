import * as pedidosRepository from "../repositories/pedidosRepository.js"


export const index = async() => {
    return await pedidosRepository.index()
}

export const find = async(id) => {
    return await pedidosRepository.find(id)
}

export const destroy = async(id) => {
    return await pedidosRepository.destroy(id)
}

export const create = async(nome, cod_rastreio, data_compra, data_entrega, forma_de_pagamento_id, status_id, transportadora_id) => {
    return await pedidosRepository.create(nome, cod_rastreio, data_compra, data_entrega, forma_de_pagamento_id, status_id, transportadora_id)
}

export const update = async(id, nome, cod_rastreio, data_compra, data_entrega, forma_de_pagamento_id, status_id, transportadora_id) => {
    return await pedidosRepository.update(id, nome, cod_rastreio, data_compra, data_entrega, forma_de_pagamento_id, status_id, transportadora_id)
}


