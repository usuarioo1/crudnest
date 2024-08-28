import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class ProductsService {

constructor(private prismaService: PrismaService){

}

  async create(createProductDto: CreateProductDto) {
   try {
    return await this.prismaService.product.create({data: createProductDto})
   } catch (error) {
    if(error instanceof Prisma.PrismaClientUnknownRequestError){
      if(error.stack === "P2002"){
        throw new ConflictException(`producto con nombre ${createProductDto.name} ya existe`)
      }
    }
   }
  }

  findAll() {
   return this.prismaService.product.findMany()
    
  }

  async findOne(id: number) {
    const productFound = await this.prismaService.product.findUnique({where:{
      id:id
    }})

    if(!productFound){
      throw new NotFoundException(`producto ${id} no encontrado`)
    }

    return productFound
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
   const updateProduct = await this.prismaService.product.update({
    where:{
      id
    },
    data: updateProductDto
   })
   if(!updateProduct){
    throw new NotFoundException(`product  ${id} not apdated`)
   }
   return updateProduct;
  }

  async remove(id: number) {
    const deleteProduct = await this.prismaService.product.delete({
      where:{id}
    })

    if(!deleteProduct){
      throw new NotFoundException(`producto con ${id} no encontrado`)
    }
    return deleteProduct;
  }
}
