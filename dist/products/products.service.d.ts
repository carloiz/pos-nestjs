import { ProductModel } from '../common/model/product.model';
import { Product } from './entity/products.entity';
import { CreateProductDto } from './dto/create-products.dto';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: ProductModel);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    updateProduct(id: string, updateProductDto: CreateProductDto): Promise<Product>;
    deleteProduct(id: string): Promise<Product>;
}
