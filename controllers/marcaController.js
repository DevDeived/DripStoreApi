import * as marcaService from "../services/marcaService.js"


export const index = async(req,res) => {
    try {
        const marca = await marcaService.index()
        console.log();
        
        res.status(200).send(marca)
    } catch (error) {
            res.status(500).send(error)
    }
}

export const find = async(req,res) => {
    try {
        let {id} = req.params
        const marca = await marcaService.find(id)
        
        res.status(200).send(marca)
    } catch (error) {
            res.status(500).send(error)
    }
}

export const destroy = async(req,res) => {
    try {
        let {id} = req.params
        const marca = await marcaService.destroy(id)
        
        res.status(200).send(marca)
    } catch (error) {
            res.status(500).send(error)
    }
}
export const create = async(req,res) => {
    try {
        let {id,nome} = req.body
        const marca = await marcaService.create(id,nome)
        
        res.status(200).send("Usuário cadastrado com sucesso")
    } catch (error) {
            res.status(500).send(error)
    }
}

export const update = async(req,res) => {
    try {
        let {nome} = req.body
        let {id} = req.params
        const marca = await marcaService.update(id,nome)
        
        res.status(200).send("Usuário atualizado com sucesso")
    } catch (error) {
            res.status(500).send(error)
    }
}