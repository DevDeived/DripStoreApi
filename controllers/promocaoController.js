import * as promocaoService from "../services/promocaoService.js"


export const index = async(req,res) => {
    try {
        const promocao = await promocaoService.index()
        res.status(200).send(promocao)
    } catch (error) {
            res.status(500).send({error: "Erro interno ao listar promoções"})
    }
}

export const find = async(req,res) => {
    try {
        const {id} = req.params
        const promocao = await promocaoService.find(id)
        
        if (!promocao) {
            return res.status(404).send({error: "Promoção não encontrada."})
        }
        res.status(200).send(promocao)
    } catch (error) {
            res.status(500).send({error: "Erro interno ao buscar promoções"})
    }
}

export const destroy = async(req,res) => {
    try {
        let {id} = req.params
        const promocao = await promocaoService.destroy(id)
        
        res.status(200).send(promocao)
    } catch (error) {
            res.status(500).send(error)
    }
}
export const create = async(req,res) => {
    try {
        const {nome,inicio,termino} = req.body

        const promocao = await promocaoService.create(nome, inicio, termino)
        
        res.status(201).send("Promoção criada com sucesso")
    } catch (error) {
            console.error("Erro ao criar promoção", error)
            res.status(500).send({error: "Erro interno ao criar promoção"})
    }
}

export const update = async(req,res) => {
    try {
        let {nome,inicio,termino} = req.body
        let {id} = req.params
        const promocao = await promocaoService.update(id,nome,inicio,termino)
        
        res.status(200).send("Promoção atualizada com sucesso")
    } catch (error) {
            res.status(500).send(error)
    }
}