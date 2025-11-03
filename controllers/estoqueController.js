import * as estoqueService from "../services/estoqueService.js"


export const index = async(req,res) => {
    try {
        const estoque = await estoqueService.index()
        res.status(200).send(estoque)
    } catch (error) {
            res.status(500).send(error)
    }
}

export const find = async(req,res) => {
    try {
        let {id} = req.params
        const estoque = await estoqueService.find(id)
        
        res.status(200).send(estoque)
    } catch (error) {
            res.status(500).send(error)
    }
}

export const destroy = async(req,res) => {
    try {
        let {id} = req.params
        const estoque = await estoqueService.destroy(id)
        
        res.status(200).send(estoque)
    } catch (error) {
            res.status(500).send(error)
    }
}
export const create = async(req,res) => {
    try {
        let {produto_id, quantidade} = req.body
        const estoque = await estoqueService.create(produto_id, quantidade)
        
        res.status(200).send("Estoque cadastrado com sucesso")
    } catch (error) {
            res.status(500).send(error)
    }
}

export const update = async(req,res) => {
    try {
        let {id} = req.params
        let {produto_id, quantidade} = req.body
        const estoque = await estoqueService.update(id,produto_id, quantidade)
        
        res.status(200).send("Estoque atualizado com sucesso")
    } catch (error) {
            res.status(500).send(error)
    }
}