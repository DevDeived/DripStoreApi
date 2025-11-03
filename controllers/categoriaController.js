import * as categoriaService from "../services/categoriaService.js"

export const index = async(req,res) => {
    try {
        const categoria = await categoriaService.index()
        res.status(200).send(categoria)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const find = async(req,res) => {
    try {
        let {id} = req.params
        const categoria = await categoriaService.find(id)
        
        res.status(200).send(categoria)
    } catch (error) {
            res.status(500).send(error)
    }
}

export const destroy = async(req,res) => {
    try {
        let {id} = req.params
        const categoria = await categoriaService.destroy(id)
        
        res.status(200).send(categoria)
    } catch (error) {
            res.status(500).send(error)
    }
}
export const create = async(req,res) => {
    try {
        let {nome} = req.body
        const categoria = await categoriaService.create(nome)
        
        res.status(200).send("Categoria cadastrada com sucesso")

    } catch (error) {
            res.status(500).send(error)
    }
}

export const update = async(req,res) => {
    try {
        let {nome} = req.body
        let {id} = req.params

        const categoria = await categoriaService.update(id, nome)
        
        res.status(200).send("Categoria atualizada com sucesso")

    } catch (error) {
            res.status(500).send(error)
    }
}