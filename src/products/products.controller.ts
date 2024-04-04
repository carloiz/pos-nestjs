import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductModel } from '../common/model/product.model';
import { CreateProductDto } from './dto/create-products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productModel: ProductModel) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto);
  }

  @Get()
  async findAll() {
    return this.productModel.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productModel.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: CreateProductDto,
  ) {
    return this.productModel.update(id, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productModel.delete(id);
  }
}
