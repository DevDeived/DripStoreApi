// prisma/seed.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpar dados (opcional, mas recomendado em dev)
  await prisma.produto.deleteMany();
  await prisma.estoque.deleteMany();
  await prisma.categoria.deleteMany();
  await prisma.promocao.deleteMany();
  await prisma.marca.deleteMany();
  await prisma.estado.deleteMany();
  await prisma.end_de_entrega.deleteMany();
  await prisma.usuarios.deleteMany();
  await prisma.status.deleteMany();
  await prisma.transportadora.deleteMany();
  await prisma.forma_de_pagamento.deleteMany();

  // 1. Formas de Pagamento
  const formasPag = await prisma.forma_de_pagamento.createMany({
    data: [
      { nome: 'Cartão de Crédito' },
      { nome: 'Pix' },
      { nome: 'Boleto' },
    ],
  });

  // 2. Transportadoras
  await prisma.transportadora.createMany({
    data: [
      { nome: 'Correios', cnpj: '12345678000195' },
      { nome: 'Jadlog', cnpj: '98765432000111' },
      { nome: 'DHL', cnpj: '55555555000199' },
    ],
  });

  // 3. Status
  await prisma.status.createMany({
    data: [
      { nome: 'Pendente' },
      { nome: 'Pago' },
      { nome: 'Enviado' },
      { nome: 'Entregue' },
      { nome: 'Cancelado' },
    ],
  });

  // 4. Usuário
  const usuario = await prisma.usuarios.create({
    data: {
      nome: 'João Silva',
      cpf: '12345678900',
      genero: 'M',
      email: 'joao@email.com',
      celular: '11999999999',
      senha: 'senha123',
    },
  });

  // 5. Endereço
  const endereco = await prisma.end_de_entrega.create({
    data: {
      estado: 'São Paulo',
      cidade: 'São Paulo',
      rua: 'Av. Paulista',
      cep: '01310000',
      numero: '1000',
      complemento: 'Apto 101',
      usuarios_id: usuario.id,
    },
  });

  // 6. Estados
  await prisma.estado.createMany({
    data: [
      { nome: 'São Paulo' },
      { nome: 'Rio de Janeiro' },
      { nome: 'Minas Gerais' },
    ],
  });

  // 7. Marcas
  const marcas = await prisma.marca.createMany({
    data: [
      { nome: 'Nike' },
      { nome: 'Adidas' },
      { nome: 'Puma' },
      { nome: 'Under Armour' },
      { nome: 'Asics' },
    ],
    skipDuplicates: true,
  });

  // 8. Promoções
  await prisma.promocao.createMany({
    data: [
      { nome: 'Black Friday 2025', inicio: new Date('2025-11-20'), termino: new Date('2025-11-30') },
      { nome: 'Verão 2026', inicio: new Date('2025-12-01'), termino: new Date('2026-02-28') },
      { nome: 'Sem Promoção', inicio: new Date('2025-01-01'), termino: new Date('2030-12-31') },
    ],
  });

  // 9. Categorias
  await prisma.categoria.createMany({
    data: [
      { nome: 'Tênis' },
      { nome: 'Camisetas' },
      { nome: 'Bolas' },
      { nome: 'Acessórios' },
      { nome: 'Shorts' },
    ],
  });

  // 10. Estoques
  const estoques = await prisma.estoque.createMany({
    data: [
      { quantidade: 50 },
      { quantidade: 30 },
      { quantidade: 100 },
      { quantidade: 75 },
      { quantidade: 40 },
    ],
  });

  // Pegar IDs (para produtos)
  const [formaPag1, formaPag2, formaPag3] = await prisma.forma_de_pagamento.findMany({ take: 3 });
  const [estado1, estado2, estado3] = await prisma.estado.findMany({ take: 3 });
  const [marca1, marca2, marca3, marca4] = await prisma.marca.findMany({ take: 4 });
  const [promocao1, promocao2, promocao3] = await prisma.promocao.findMany({ take: 3 });
  const [categoria1, categoria2, categoria3, categoria5] = await prisma.categoria.findMany({ where: { nome: { in: ['Tênis', 'Camisetas', 'Bolas', 'Shorts'] } } });
  const [estoque1, estoque2, estoque3, estoque4, estoque5] = await prisma.estoque.findMany({ take: 5 });

  // 11. Produtos Esportivos
  await prisma.produto.createMany({
    data: [
      {
        nome: 'Tênis Nike Air Max 270',
        descricao: 'Conforto máximo com unidade Air',
        avaliacao: 4.8,
        tamanho: '42',
        cor: 'Preto/Branco',
        preco: 799.90,
        genero: 'M',
        imagem: 'uploads/tenis-nike-airmax.jpg',
        categoria_id: categoria1.id,
        estado_id: estado1.id,
        marca_id: marca1.id,
        promocao_id: promocao1.id,
        estoque_id: estoque1.id,
        forma_de_pagamento_id: formaPag1.id,
        end_de_entrega_id: endereco.id,
      },
      {
        nome: 'Tênis Adidas Ultraboost 22',
        descricao: 'Boost para corrida e caminhada',
        avaliacao: 4.9,
        tamanho: '40',
        cor: 'Branco',
        preco: 899.90,
        genero: 'F',
        imagem: 'uploads/tenis-adidas-ultraboost.jpg',
        categoria_id: categoria1.id,
        estado_id: estado2.id,
        marca_id: marca2.id,
        promocao_id: promocao2.id,
        estoque_id: estoque2.id,
        forma_de_pagamento_id: formaPag2.id,
        end_de_entrega_id: endereco.id,
      },
      {
        nome: 'Bola Nike Strike',
        descricao: 'Oficial para campeonatos',
        avaliacao: 4.7,
        tamanho: '5',
        cor: 'Branco/Azul',
        preco: 149.90,
        genero: 'U',
        imagem: 'uploads/bola-nike-strike.jpg',
        categoria_id: categoria3.id,
        estado_id: estado1.id,
        marca_id: marca1.id,
        promocao_id: promocao3.id,
        estoque_id: estoque3.id,
        forma_de_pagamento_id: formaPag3.id,
        end_de_entrega_id: endereco.id,
      },
      {
        nome: 'Camiseta Under Armour Tech',
        descricao: 'Dry-fit, secagem rápida',
        avaliacao: 4.6,
        tamanho: 'G',
        cor: 'Preto',
        preco: 129.90,
        genero: 'M',
        imagem: 'uploads/camiseta-underarmour.jpg',
        categoria_id: categoria2.id,
        estado_id: estado3.id,
        marca_id: marca4.id,
        promocao_id: promocao3.id,
        estoque_id: estoque4.id,
        forma_de_pagamento_id: formaPag1.id,
        end_de_entrega_id: endereco.id,
      },
      {
        nome: 'Shorts Puma Active',
        descricao: 'Leve, elástico, ideal para treino',
        avaliacao: 4.5,
        tamanho: 'M',
        cor: 'Azul',
        preco: 89.90,
        genero: 'M',
        imagem: 'uploads/shorts-puma.jpg',
        categoria_id: categoria5.id,
        estado_id: estado1.id,
        marca_id: marca3.id,
        promocao_id: promocao2.id,
        estoque_id: estoque5.id,
        forma_de_pagamento_id: formaPag2.id,
        end_de_entrega_id: endereco.id,
      },
    ],
  });

  console.log('🌱 Seed concluído! 5 produtos esportivos inseridos.');
}

main()
  .catch((e) => {
    console.error('Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });