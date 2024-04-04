import { Injectable } from '@nestjs/common';
import { ProductModel } from '../common/model/product.model';
import { Product } from './entity/products.entity';
import { CreateProductDto } from './dto/create-products.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productModel: ProductModel) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.productModel.create(createProductDto);
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  async getProductById(id: string): Promise<Product> {
    return this.productModel.findOne(id);
  }

  async updateProduct(id: string, updateProductDto: CreateProductDto): Promise<Product> {
    return this.productModel.update(id, updateProductDto);
  }

  async deleteProduct(id: string): Promise<Product> {
    return this.productModel.delete(id);
  }
}
