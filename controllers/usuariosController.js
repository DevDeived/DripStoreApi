import * as usuariosService from "../services/usuariosService.js";

export const create = async (req, res) => {
  try {
    const {
      nome,
      cpf,
      email,
      celular,
      genero,
      senha,
      estado,
      cidade,
      rua,
      cep,
      numero,
      complemento,
    } = req.body;

    // Valores padrão caso não sejam fornecidos
    const usuario = await usuariosService.create(
      { nome, cpf, email, celular, genero: genero || "N/A" },
      {
        estado: estado || "",
        cidade: cidade || "",
        rua: rua || "",
        cep: cep || "",
        numero: numero || "",
        complemento: complemento || "",
      },
      senha || "123456"
    );

    res.status(201).json({ message: "Usuário criado com sucesso", usuario });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nome,
      cpf,
      email,
      celular,
      genero,
      senha,
      estado,
      cidade,
      rua,
      cep,
      numero,
      complemento,
    } = req.body;

    const usuario = await usuariosService.update(
      id,
      { nome, cpf, email, celular, genero: genero || "N/A" },
      {
        estado: estado || "",
        cidade: cidade || "",
        rua: rua || "",
        cep: cep || "",
        numero: numero || "",
        complemento: complemento || "",
      },
      senha // se undefined, não altera a senha
    );

    res.status(200).json({ message: "Usuário atualizado com sucesso", usuario });
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ error: error.message });
  }
};

export const index = async (req, res) => {
  try {
    const usuarios = await usuariosService.index();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    res.status(500).json({ error: error.message });
  }
};

export const find = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await usuariosService.find(id);
    res.status(200).json(usuario);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    res.status(500).json({ error: error.message });
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await usuariosService.destroy(id);
    res.status(200).json({ message: "Usuário removido com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await usuariosService.login(email, senha);
    res.status(200).json(usuario);
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    res.status(400).json({ error: error.message });
  }
};
