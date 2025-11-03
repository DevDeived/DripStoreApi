import * as usuariosService from "../services/usuariosService.js";

export const index = async (req, res) => {
  try {
    const usuarios = await usuariosService.index();
    res.status(200).send(usuarios);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const find = async (req, res) => {
  try {
    let { id } = req.params;
    const usuarios = await usuariosService.find(id);

    res.status(200).send(usuarios);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    let { id } = req.params;
    const usuarios = await usuariosService.destroy(id);

    res.status(200).send(usuarios);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const create = async (req, res) => {
  try {
    let { nome, cpf, genero, email, celular, senha } = req.body;
    const usuarios = await usuariosService.create(
      nome,
      cpf,
      genero,
      email,
      celular,
      senha
    );

    res.status(200).send("Usuário cadastrado com sucesso");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const update = async (req, res) => {
  try {
    let { nome, cpf, genero, email, celular, senha } = req.body;
    let { id } = req.params;
    const usuarios = await usuariosService.update(
      id,
      nome,
      cpf,
      genero,
      email,
      celular,
      senha
    );

    res.status(200).send("Usuário atualizado com sucesso");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const login = async (req, res) => {
  try {
    let { email, senha } = req.body;
    const usuarios = await usuariosService.login(email, senha);

    res.status(200).send(usuarios);
  } catch (error) {
    res.status(500).send(error);
  }
};
