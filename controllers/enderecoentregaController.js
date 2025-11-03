import * as enderecoentregaService from "../services/enderecoentregaService.js"

export const index = async(req,res) => {
    try {
        const enderecoentrega = await enderecoentregaService.index()
        res.status(200).send(enderecoentrega)
    } catch (error) {
            res.status(500).send(error)
    }
}

export const find = async(req,res) => {
    try {
        let {id} = req.params
        const enderecoentrega = await enderecoentregaService.find(id)

        
        res.status(200).send(enderecoentrega)
    } catch (error) {
            res.status(500).send(error)
    }
}

export const destroy = async(req,res) => {
    try {
        let {id} = req.params
        const enderecoentrega = await enderecoentregaService.destroy(id)
        
        res.status(200).send(enderecoentrega)
    } catch (error) {
            res.status(500).send(error)
    }
}
export const create = async (req, res) => {
  try {
    // Desestruturação dos campos enviados no body
    const { estado, cidade, rua, bairro, cep, numero, complemento, usuariosId } = req.body;
    console.log("Dados recebidos:", req.body);

    // Validação dos campos obrigatórios
    if (!estado || !cidade || !rua || !bairro || !cep || !numero || !usuariosId) {
      return res.status(400).send({
        error: "Todos os campos obrigatórios devem ser preenchidos"
      });
    }

    // Chamada ao service para criar o endereço com relação ao usuário
    const enderecoentrega = await enderecoentregaService.create({
      estado,
      cidade,
      rua,
      bairro,
      cep,
      numero,
      complemento: complemento || null,
      usuariosId: Number(usuariosId)
    });

    // Retorno de sucesso
    res.status(201).send({
      message: "Endereço cadastrado com sucesso",
      data: enderecoentrega
    });
  } catch (error) {
    console.error("Erro ao criar endereço:", error);
    res.status(500).send({
      error: "Erro ao criar endereço",
      details: error.message
    });
  }
};

export const update = async(req,res) => {
    try {
        let {estado,cidade,rua,bairro,cep,numero,complemento} = req.body
        let {id} = req.params
        const enderecoentrega = await enderecoentregaService.update(id,estado,cidade,rua,bairro,cep,numero,complemento)
        
        res.status(200).send("Endereço atualizado com sucesso")
    } catch (error) {
            res.status(500).send(error)
    }
}