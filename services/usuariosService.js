import * as usuariosRepository from "../repositories/usuariosRepository.js";
import bcrypt from "bcrypt";

export const index = async () => {
  return await usuariosRepository.index();
};

export const find = async (id) => {
  return await usuariosRepository.find(id);
};

export const destroy = async (id) => {
  return await usuariosRepository.destroy(id);
};

export const create = async (nome, cpf, genero, email, celular, senha) => {
  const senhaHash = await bcrypt.hash(senha, 10);
  return await usuariosRepository.create(
    nome,
    cpf,
    genero,
    email,
    celular,
    senhaHash
  );
};

export const update = async (nome, cpf, genero, email, celular, senha) => {
  return await usuariosRepository.update(
    nome,
    cpf,
    genero,
    email,
    celular,
    senha
  );
};

export const login = async (email, senha) => {

  const user = await usuariosRepository.findByEmail(email);

 
  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  const senhaValida = await bcrypt.compare(senha,user.senha)

  if(!senhaValida) {
    throw new Error("Senha Inválida!")
  }

  return user;
};
