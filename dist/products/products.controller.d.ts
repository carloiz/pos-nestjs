import { ProductModel } from '../common/model/product.model';
import { CreateProductDto } from './dto/create-products.dto';
export declare class ProductsController {
    private readonly productModel;
    constructor(productModel: ProductModel);
    create(createProductDto: CreateProductDto): Promise<import("src/products/entity/products.entity").Product>;
    findAll(): Promise<import("src/products/entity/products.entity").Product[]>;
    findOne(id: string): Promise<import("src/products/entity/products.entity").Product>;
    update(id: string, updateProductDto: CreateProductDto): Promise<import("src/products/entity/products.entity").Product>;
    delete(id: string): Promise<import("src/products/entity/products.entity").Product>;
}
