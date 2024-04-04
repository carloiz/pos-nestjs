import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductModel } from '../common/model/product.model';
import { Product, ProductSchema } from './entity/products.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  controllers: [ProductsController],
  providers: [ProductModel],
})
export class ProductsModule {}
