import * as transportadoraService from "../services/transportadoraService.js"


export const index = async(req,res) => {
    try {
        const transportadora = await transportadoraService.index()
        res.status(200).send(transportadora)
        
    } catch (error) {
            res.status(500).send(error)
    }
}

export const find = async(req,res) => {
    try {
        let {id} = req.params
        const transportadora = await transportadoraService.find(id)
        
        res.status(200).send(transportadora)
    } catch (error) {
            res.status(500).send(error)
    }
}

export const destroy = async(req,res) => {
    try {
        let {id} = req.params
        const transportadora = await transportadoraService.destroy(id)
        
        res.status(200).send(transportadora)
    } catch (error) {
            res.status(500).send(error)
    }
}
export const create = async(req,res) => {
    try {
        let {id,nome,cnpj} = req.body
        const transportadora = await transportadoraService.create(nome,cnpj)
        
        res.status(200).send("Transportadora cadastrado com sucesso")
    } catch (error) {
            res.status(500).send(error)
    }
}

export const update = async(req,res) => {
    try {
        let {nome,cnpj} = req.body
        let {id} = req.params
        
        const transportadora = await transportadoraService.update(id,nome,cnpj)
        
        res.status(200).send("Transportadora atualizado com sucesso")
    } catch (error) {
            res.status(500).send(error)
    }
}
