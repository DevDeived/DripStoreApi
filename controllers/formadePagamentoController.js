import * as formadePagamentoService from "../services/formadePagamentoService.js"


export const index = async(req,res) => {
    try {
        const formadePagamento = await formadePagamentoService.index()
        res.status(200).send(formadePagamento)
    } catch (error) {
            res.status(500).send(error)
    }
}

export const find = async(req,res) => {
    try {
        let {id} = req.params
        const formadePagamento = await formadePagamentoService.find(id)
        
        res.status(200).send(formadePagamento)
    } catch (error) {
            res.status(500).send(error)
    }
}

export const destroy = async(req,res) => {
    try {
        let {id} = req.params
        const formadePagamento = await formadePagamentoService.destroy(id)
        
        res.status(200).send(formadePagamento)
    } catch (error) {
            res.status(500).send(error)
    }
}
export const create = async (req, res) => {
    try {
        const { nome } = req.body;
        const formadePagamento = await formadePagamentoService.create(nome);

        res.status(201).send("Forma de pagamento cadastrada com sucesso");
    } catch (error) {
        res.status(500).send({
            mensagem: "Erro ao cadastrar forma de pagamento",
            erro: error.message
        });
    }
};


export const update = async(req,res) => {
    try {
        let {nome} = req.body
        let {id} = req.params
        const formadePagamento = await formadePagamentoService.update(id,nome,)
        
        res.status(200).send("Forma de pagamento atualizado com sucesso")
    } catch (error) {
            res.status(500).send(error)
    }
}