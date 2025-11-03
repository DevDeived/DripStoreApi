import prisma from "../config/prisma.js"

export const index = async() => {
   let results = await prisma.marca.findMany()
   return results
}

export const find = async(id) => {
   let results = await prisma.marca.findUnique()
   return results
}

export const create = async(nome) => {
   let results = await prisma.marca.create(
       {
    data:{nome}
   }
   )

   return results
}

export const destroy = async(id) => {
   let results = await prisma.marca.delete(
    {
      where: {id:Number(id)}  
   }
   )

   return results
}

export const update = async(id) => {
   let results = await prisma.marca.update(
    {
      where: {id:Number(id)},
      data:(nome) 
   }
   )

   return results
}