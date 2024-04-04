"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("../common/model/product.model");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async createProduct(createProductDto) {
        return this.productModel.create(createProductDto);
    }
    async getAllProducts() {
        return this.productModel.findAll();
    }
    async getProductById(id) {
        return this.productModel.findOne(id);
    }
    async updateProduct(id, updateProductDto) {
        return this.productModel.update(id, updateProductDto);
    }
    async deleteProduct(id) {
        return this.productModel.delete(id);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_model_1.ProductModel])
], ProductsService);
//# sourceMappingURL=products.service.js.map