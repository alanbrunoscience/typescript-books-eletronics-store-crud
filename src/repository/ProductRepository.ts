import { Product } from "../model/Product";

export interface ProductRepository {

    // CRUD Methods (Create, Read, Update, and Delete)
    registerProduct(product: Product): void;
    listAllProducts(): void;
    searchById(id: number): void;
    updateProduct(product: Product): void;
    deleteProduct(id: number): void;
    searchByName(prodName: string): boolean;
    
}