// import { Product } from "../model/Product";
// import { ProductRepository } from "../repository/ProductRepository";
// import { colors } from "../util/Colors";

// export class ProductController implements ProductRepository {

//     // Array Collection to store Product objects
//     private products: Array<Product> = new Array<Product>();

//     // Product ID - Auto Incremental primary key
//     productId: number = 0;

//     registerProduct(product: Product): void {
//         this.products.push(product);
//         console.log(colors.fg.green, `\n-> Product number '${product.getId()}' has been successfully registered!\n`, colors.reset);
//     }

//     listAllProducts(): void {
//         // for(let product of this.products) {
//         //     product.display();
//         // }

//         this.products.forEach(product => product.display());
//     }

//     searchById(id: number): void {

//         let searchedProduct = this.searchInArray(id);

//         if (searchedProduct != null) {
//             searchedProduct.display();
//         } else {
//             console.log(colors.fg.red, `\n-> The Product number ${id} was not found!\n`, colors.reset);
//         }

//     }

//     updateProduct(product: Product): void {

//         let searchedProduct = this.searchInArray(product.getId());

//         if (searchedProduct != null) {
//             this.products[this.products.indexOf(searchedProduct)] = product;
//             console.log(colors.fg.green, `\n-> Product number '${product.getId()}' has been updated successfully!\n`, colors.reset);
//         } else {
//             console.log(colors.fg.red, `\n-> Product number '${product.getId()}' was not found!\n`, colors.reset);
//         }
        
//     }

//     deleteProduct(id: number): void {
        
//         let searchedProduct = this.searchInArray(id);

//         if (searchedProduct != null) {
//             this.products.splice(this.products.indexOf(searchedProduct), 1);
//             console.log(colors.fg.green, `\n\n-> Product number '${id}' has been deleted successfully!\n`, colors.reset);
//         } else {
//             console.log(colors.fg.red, `\n\n-> Product number '${id}' was not found!\n`, colors.reset);
//         }

//     }

//     searchByName(prodName: string): boolean {

//         // Data filtering
//         let searchByProdName = this.products.filter(product => product.getProdName().toUpperCase().includes(prodName.toUpperCase()));
    
//         if (searchByProdName.length > 0) {
//             // Data Listing
//             console.log();
//             searchByProdName.forEach(product => product.display());
//             return true;
//         } else {
//             return false;
//         }

//     }

//     // Complementary Methods
//     public toTitleCase(originalName: string) {
//         return originalName
//             .toLowerCase()
//             .split(" ")
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(" ");
//     }

//     // Generate Product ID Automatically
//     public generateId(): number {
//         return ++this.productId;
//     }

//     // Check if a product exists
//     public searchInArray(productId: number): Product | null {
//         for(let product of this.products) {
//             if(product.getId() === productId)
//                 return product;
//         }
//         return null;
//     }

//     public isEmpty(): boolean {
//         let result = this.products.length <= 0;
//         return result;
//     }

//     public updateQuantity(productId: number, quantity: number): void {
//         let searchedProduct = this.searchInArray(productId);
    
//         if (searchedProduct) {
//             // Validate stock availability
//             if (searchedProduct.getQuantity() < quantity) {
//                 console.log(colors.fg.red, `\n\n-> Impossible to remove! Insufficient stock for product number '${productId}'.\n`, colors.reset);
//                 return;
//             }
    
//             // Update the quantity
//             searchedProduct.setQuantity(searchedProduct.getQuantity() - quantity);
//             console.log(colors.fg.green, `\n\n-> The total number in stock of product number '${productId}' has been updated successfully!\n`, colors.reset);
//         } else {
//             console.log(colors.fg.red, `\n\n-> Product number '${productId}' was not found!\n`, colors.reset);
//         }
//     }
    
// }