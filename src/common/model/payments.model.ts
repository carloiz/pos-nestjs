import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductSchema } from '../../products/entity/products.entity';
import { BaseModel } from '../model/base.model';
import { CreateProductDto } from '../../products/dto/create-products.dto';

@Injectable()
export class ProductModel extends BaseModel<Product> {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {
    super(productModel);
  }
}
