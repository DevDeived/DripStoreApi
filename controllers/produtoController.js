import * as produtoService from "../services/produtoService.js";

export const index = async (req, res) => {
  try {
    const { marca, categoria, genero, sort, page, limit } = req.query;

    const filtros = {
      marca: marca
        ? Array.isArray(marca)
          ? marca.map(Number)
          : [Number(marca)]
        : [],
      categoria: categoria
        ? Array.isArray(categoria)
          ? categoria.map(Number)
          : [Number(categoria)]
        : [],
      genero: genero
        ? Array.isArray(genero)
          ? genero
          : [genero]
        : [],
    };

    const result = await produtoService.getFiltered({
      filtros,
      sort: sort || "lancamento",
      page: Number(page) || 1,
      limit: Number(limit) || 12,
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("❌ Erro no index:", error);
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
};

export const find = async (req, res) => {
  try {
    const produto = await produtoService.find(req.params.id);

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.status(200).json(produto);
  } catch (error) {
    console.error("❌ Erro no find:", error);
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
  
    const produto = await produtoService.create(req.body, req.file);
    res.status(201).json(produto);
  } catch (error) {
    console.error("❌ Erro no create:", error);
    res.status(500).json({ error: error.message });
  }
};


export const update = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID do produto não informado" });
    }

    const produtoAtualizado = await produtoService.update(id, req.body, req.file);

    res.status(200).json(produtoAtualizado);
  } catch (error) {
    console.error("❌ Erro no update:", error);
    res.status(500).json({ error: error.message });
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID do produto não informado" });
    }

    await produtoService.destroy(id);
    res.status(204).send();
  } catch (error) {
    console.error("❌ Erro no destroy:", error);
    res.status(500).json({ error: error.message });
  }
};
