import * as usuariosRepository from "../repositories/usuariosRepository.js";
import bcrypt from "bcrypt";

export const create = async (usuarioData, enderecoData, senha) => {
  const senhaHash = await bcrypt.hash(senha, 10);
  return await usuariosRepository.create(usuarioData, enderecoData, senhaHash);
};

export const update = async (id, usuarioData, enderecoData, senha) => {
  const senhaHash = senha ? await bcrypt.hash(senha, 10) : undefined;
  return await usuariosRepository.update(id, usuarioData, enderecoData, senhaHash);
};

export const index = async () => await usuariosRepository.index();

export const find = async (id) => await usuariosRepository.find(id);

export const destroy = async (id) => await usuariosRepository.destroy(id);

export const login = async (email, senha) => {
  const user = await usuariosRepository.findByEmail(email);
  if (!user) throw new Error("Usuário não encontrado");
  const senhaValida = await bcrypt.compare(senha, user.senha);
  if (!senhaValida) throw new Error("Senha inválida");
  return user;
};
