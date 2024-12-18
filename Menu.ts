// import readlineSync = require("readline-sync");
// import { colors } from './src/util/Colors';
// import { Book } from "./src/model/Book";
// import { Eletronic } from "./src/model/Eletronic";
// import { ProductController } from "./src/controller/ProductController";

// export function main() {

//     // The instance of the Product Controller class
//     let product: ProductController = new ProductController();

//     // Auxiliary Variables
//     let option, productType, quantity, price, productId: number;
//     let prodName, authorName: string;
//     const productTypes = ['Book', 'Eletronic'];

//     // New Instances of the "Medicine" Class (Objects)
//     product.registerProduct(new Medicine(product.generateId(), "Tylenol", 1, 100, 25.50, "Analgesic", "Paracetamol"));
//     product.registerProduct(new Medicine(product.generateId(), "Advil", 1, 50, 19.90, "Analgesic", "Ibuprofen"));

//     // New Instances of the "Cosmetic" Class (Objects)
//     product.registerProduct(new Cosmetic(product.generateId(), "Nivea Soft", 2, 50, 29.90, "Skin Care", "Citrus"));
//     product.registerProduct(new Cosmetic(product.generateId(), "Pantene Pro-V", 2, 200, 18.50, "Hair Care", "Floral"));

//     do {

//         option = menu();

//         switch(option) {

//             case 1:
                
//                 console.log(colors.fg.whitestrong, "\nRegister product:\n", colors.reset);

//                 prodName = readlineSync.question("\n1) Enter the product name: ");
//                 let formattedProdName = product.toTitleCase(prodName);

//                 console.log("\n2) Select the product type:");
//                 productType = readlineSync.keyInSelect(productTypes, "> ", {cancel: false}) + 1;

//                 quantity = readlineSync.questionInt("\n3) Enter the total quantity of products: ", {limitMessage: "\n-> Invalid data type entered!"});
//                 while(quantity < 1) {
//                     quantity = readlineSync.questionInt("\n-> Invalid data! Enter a quantity greater than 0: ");
//                 }

//                 price = readlineSync.questionFloat("\n4) Enter the individual product price: R$ ");
//                 while(price < 0.01) {
//                     price = readlineSync.questionFloat("\n-> Invalid data! Enter a price greater than R$ 0.00: R$ ");
//                 }

//                 switch(productType) {
                    
//                     case 1:

//                         authorName = readlineSync.question("\n5) Enter the author's name: ");
//                         let formattedAuthorName = product.toTitleCase(authorName);

//                         authorName = readlineSync.question("\n5) Enter the author's name: ");
//                         let formattedAuthorName = product.toTitleCase(authorName);

//                         prodCategory = getMedCategories();
//                         if(prodCategory === "Other") {
//                             prodCategory = readlineSync.question("\n-> Specify the category of the medicine: ");
//                             let formattedMedCat = product.toTitleCase(prodCategory);
//                             prodCategory = formattedMedCat;
//                         }

//                         genericName = readlineSync.question("\n- Enter the generic name of the medicine: ");
//                         let formattedGenName = product.toTitleCase(genericName);

//                         console.log();
//                         product.registerProduct(new Medicine(product.generateId(), formattedProdName, productType, quantity, price, prodCategory, formattedGenName));

//                         break;

//                     case 2:

//                         prodCategory = getCosmCategories();
//                         if(prodCategory === "Other") {
//                             prodCategory = readlineSync.question("\n-> Specify the category of the cosmetic: ");
//                             let formattedCosmCat = product.toTitleCase(prodCategory);
//                             prodCategory = formattedCosmCat;
//                         }

//                         let checkFrag = readlineSync.keyInYNStrict("\n- Does the product have a fragrance? ");

//                         if(checkFrag) {
//                             fragranceName = readlineSync.question("\n-> Enter the fragrance of the cosmetic: ");
//                             let formattedFragName = product.toTitleCase(fragranceName);
//                             fragranceName = formattedFragName;
//                         } else {
//                             fragranceName = "N/A";
//                         }   
                        
//                         console.log();
//                         product.registerProduct(new Cosmetic(product.generateId(), formattedProdName, productType, quantity, price, prodCategory, fragranceName));

//                         break;

//                 }

//                 keyPress();
//                 break;

//             case 2:

//                 if(!product.isEmpty()) {
//                     console.log(colors.fg.whitestrong, "\nList all products:\n", colors.reset);
                    
//                     product.listAllProducts();

//                 } else {
//                     console.log(colors.fg.red, "\nThere is no data registered yet! \n", colors.reset);
//                 }

//                 keyPress();
//                 break;

//             case 3:

//                 if(!product.isEmpty()) {
//                     console.log(colors.fg.whitestrong, "\nSearch product by ID:\n", colors.reset);

//                     productId = readlineSync.questionInt("\nEnter the product number: ", {limitMessage: "\n-> Invalid data type entered!"});
//                     while(productId < 1) {
//                         productId = readlineSync.questionInt("\n-> Invalid number! Enter a value greater than 0: ");
//                     }
                    
//                     console.log();
//                     product.searchById(productId);

//                 } else {
//                     console.log(colors.fg.red, "\nThere is no data registered yet! \n", colors.reset);
//                 }

//                 keyPress();
//                 break;
                
//             case 4:

//                 if(!product.isEmpty()) {
//                     console.log(colors.fg.whitestrong, "\nUpdate a product:\n", colors.reset);

//                     productId = readlineSync.questionInt("\n- Enter the product ID: ", {limitMessage: "\n-> Invalid data type entered!"});
//                     while(productId < 1) {
//                         productId = readlineSync.questionInt("\n-> Invalid ID! Enter a value greater than 0: ");
//                     }

//                     let searchedProduct = product.searchInArray(productId);

//                     if(searchedProduct != null) {
//                         prodName = readlineSync.question("\n- Enter the new product comercial name: ");
//                         let formattedProdName = product.toTitleCase(prodName);

//                         productType = searchedProduct.getProdType();

//                         quantity = readlineSync.questionInt("\n- Enter the new total quantity of products: ", {limitMessage: "\n-> Invalid data type entered!"});
//                         while(quantity < 1) {
//                             quantity = readlineSync.questionInt("\n-> Invalid data! Enter a quantity greater than 0: ");
//                         }

//                         price = readlineSync.questionFloat("\n- Enter the new individual product price: R$ ");
//                         while(price < 0.01) {
//                             price = readlineSync.questionFloat("\n-> Invalid data! Enter a price greater than R$ 0.00: R$ ");
//                         }

//                         switch(productType) {
                            
//                             case 1:

//                                 prodCategory = getMedCategories();
//                                 if(prodCategory === "Other") {
//                                     prodCategory = readlineSync.question("\n-> Specify the new category of the medicine: ");
//                                     let formattedMedCat = product.toTitleCase(prodCategory);
//                                     prodCategory = formattedMedCat;
//                                 }

//                                 genericName = readlineSync.question("\n- Enter the new generic name of the medicine: ");
//                                 let formattedGenName = product.toTitleCase(genericName);

//                                 console.log();
//                                 product.updateProduct(new Medicine(productId, formattedProdName, productType, quantity, price, prodCategory, formattedGenName));

//                                 break;

//                             case 2:

//                                 prodCategory = getCosmCategories();
//                                 if(prodCategory === "Other") {
//                                     prodCategory = readlineSync.question("\n-> Specify the new category of the cosmetic: ");
//                                     let formattedCosmCat = product.toTitleCase(prodCategory);
//                                     prodCategory = formattedCosmCat;
//                                 }

//                                 let checkFrag = readlineSync.keyInYNStrict("\n- Does the product have a fragrance? ");

//                                 if(checkFrag) {
//                                     fragranceName = readlineSync.question("\n-> Enter the new fragrance of the cosmetic: ");
//                                     let formattedFragName = product.toTitleCase(fragranceName);
//                                     fragranceName = formattedFragName;
//                                 } else {
//                                     fragranceName = "N/A";
//                                 }   
                                
//                                 console.log();
//                                 product.updateProduct(new Cosmetic(productId, formattedProdName, productType, quantity, price, prodCategory, fragranceName));

//                                 break;
                            
//                         }
//                     } else {
//                         console.log(colors.fg.red, `\n\n-> Product number '${productId}' was not found!\n`, colors.reset);
//                     }

//                 } else {
//                     console.log(colors.fg.red, "\nThere is no data registered yet! \n", colors.reset);
//                 }

//                 keyPress();
//                 break;

//             case 5:

//                 if(!product.isEmpty()) {
//                     console.log(colors.fg.whitestrong, "\nDelete a product:\n", colors.reset);

//                     productId = readlineSync.questionInt("\n- Enter the product ID: ", {limitMessage: "\n-> Invalid data type entered!"});
//                     while(productId < 1) {
//                         productId = readlineSync.questionInt("\n-> Invalid ID! Enter a value greater than 0: ");
//                     }

//                     let searchedProduct = product.searchInArray(productId);

//                     if(searchedProduct != null) {

//                         let confirmation: boolean;

//                         product.searchById(productId);

//                         console.log(colors.fg.red, `\n-> This product has ${searchedProduct.getQuantity()} unit(s) in stock. Do you want to remove all or just some units (y - all / n - some)?\n`, colors.reset);
//                         confirmation = readlineSync.keyInYNStrict('-> ');

//                         if(confirmation) {
//                             product.deleteProduct(productId);
//                         } else {
//                             let quantityForRemoval = readlineSync.questionInt("\n- Enter the quantity you want to remove: ", {limitMessage: "\n-> Invalid data type entered!"});
//                             while(quantityForRemoval < 1) {
//                                 quantityForRemoval = readlineSync.questionInt("\n-> Invalid data! Enter a quantity greater than 0: ");
//                             }

//                             if(quantityForRemoval === searchedProduct.getQuantity()) {
//                                 product.deleteProduct(productId);
//                             } else {
//                                 product.updateQuantity(productId, quantityForRemoval);
//                             }
//                         }
//                     } else {
//                         console.log(colors.fg.red, `\n\n-> Product number '${productId}' was not found!\n`, colors.reset);
//                     }

//                 } else {
//                     console.log(colors.fg.red, "\nThere is no data registered yet! \n", colors.reset);
//                 }

//                 keyPress();
//                 break;

//             case 6:

//                 if(!product.isEmpty()) {
//                     console.log(colors.fg.whitestrong, "\nSearch product by name:\n", colors.reset);

//                     prodName = readlineSync.question("\nEnter the product comercial name: ");
//                     let formattedProdName = product.toTitleCase(prodName);

//                     if(!product.searchByName(formattedProdName)) {
//                         console.log(colors.fg.red, `\n\n-> There is no product whose name is '${formattedProdName}'.\n`, colors.reset);
//                     }

//                 } else {
//                     console.log(colors.fg.red, "\nThere is no data registered yet! \n", colors.reset);
//                 }

//                 keyPress();
//                 break;

//             case 7:

//                 console.log(colors.fg.greenstrong);
//                 console.log("\nLit & Tech Store - Where Knowledge Meets Innovation!");
//                 about();
//                 console.log(colors.reset, "");
//                 break;

//             default:

//                 console.log(colors.fg.whitestrong, "\n-> Invalid option! Choose an option between 0 and 9.", colors.reset);

//         }

//     } while(option !== 7);

// }

// export function menu(): number {

//     console.log(colors.bg.black, colors.fg.yellow);
//     console.log("\n**********************************************************");
//     console.log("\n                     Lit & Tech Store                     \n");
//     console.log("**********************************************************");
//     console.log("\n 1 - Register product;" +
//         "\n 2 - List all products;" +
//         "\n 3 - Search product by ID;" +
//         "\n 4 - Update a product;" +
//         "\n 5 - Delete a product;" +
//         "\n 6 - Search product by name;" +
//         "\n 7 - Exit."
//     );
//     let option: number = readlineSync.questionInt("\n-> Choose an option above: ", {limitMessage: "\n-> Invalid data type entered!"});
//     console.log("\n**********************************************************");
//     console.log(colors.reset);

//     return option;

// }

// export function getGenresBooks(): string {

//     let bookGenre: string = "";

//     const booksCategories = [
//         'Fiction Genres',
//         'Non-Fiction Genres',
//         'Hybrid/Other Genres'
//     ];

//     console.log("\n- Select the book category:");
//     let bookCategory = readlineSync.keyInSelect(booksCategories, "> ", {cancel: false}) + 1;

//     switch(bookCategory) {
        
//         case 1:

//             const fictionGenres = [
//                 'Literary Fiction',
//                 'Science Fiction (Sci-Fi)',
//                 'Fantasy',
//                 'Mystery/Crime',
//                 'Thriller/Suspense',
//                 'Romance',
//                 'Horror',
//                 'Historical Fiction',
//                 'Adventure',
//                 'Dystopian',
//                 'Young Adult (YA)',
//                 'New Adult'
//             ];

//             console.log("\n- Select one of the fiction genres below:");
//             let fictionGenre = readlineSync.keyInSelect(fictionGenres, "> ", {cancel: false}) + 1;

//             bookGenre = fictionGenres[fictionGenre - 1];

//             break;

//         case 2:

//             const nonfictionGenres = [
//                 'Biography/Autobiography',
//                 'Memoir',
//                 'Self-Help',
//                 'History',
//                 'Travel',
//                 'Science',
//                 'Philosophy',
//                 'True Crime',
//                 'Business/Economics',
//                 'Politics'
//             ];

//             console.log("\n- Select one of the non-fiction genres below:");
//             let nonfictionGenre = readlineSync.keyInSelect(nonfictionGenres, "> ", {cancel: false}) + 1;

//             bookGenre = nonfictionGenres[nonfictionGenre - 1];

//             break;

//         case 3:

//             const otherGenres = [
//                 'Graphic Novels/Comics',
//                 'Poetry',
//                 'Drama',
//                 'Anthology',
//                 'Humor',
//                 'Cookbooks',
//                 'Spiritual/Religious',
//                 'Educational/Academic',
//                 'Essays'
//             ];

//             console.log("\n- Select one of the hybrid/other genres below:");
//             let otherGenre = readlineSync.keyInSelect(otherGenres, "> ", {cancel: false}) + 1;

//             bookGenre = otherGenres[otherGenre - 1];

//             break;
//     }

//     return bookGenre;

// }

// export function about(): void {
//     console.log("\nProject Developed by:\n");
//     console.log("-> Alan Bruno - alanengem@gmail.com");
//     console.log("-> https://github.com/alanbrunoscience/typescript-bank-account");
// }

// export function keyPress(): void {
//     console.log(colors.reset, "");
//     process.stdout.write(colors.reset + "-> Press 'Enter' to continue... "); // Display everything on the same line
//     readlineSync.question("");
// }

// main();