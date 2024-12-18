import readlineSync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Book } from "./src/model/Book";
import { Eletronic } from "./src/model/Eletronic";
import { ProductController } from "./src/controller/ProductController";

export function main() {

    // The instance of the Product Controller class
    let product: ProductController = new ProductController();

    // Auxiliary Variables
    let option, productType, quantity, price, productId, discountOption, discountPerc: number;
    let prodName, authorName, bookGenre, productBrand, productModel: string;
    const productTypes = ['Book', 'Eletronic'];

    // New Instances of the "Book" Class (Objects)
    product.registerProduct(new Book(product.generateId(), "Lord of The Rings", "Book", 10, 200.00, "J.R.R. Tolkien", "Fantasy", 150.99));
    product.registerProduct(new Book(product.generateId(), "The Chronicles of Narnia", "Book", 15, 149.78, "C. S. Lewis", "Fantasy"));

    // New Instances of the "Eletronic" Class (Objects)
    product.registerProduct(new Eletronic(product.generateId(), "Laptop", "Eletronic", 5, 7000.00, "Dell", "G15", 6800.00));
    product.registerProduct(new Eletronic(product.generateId(), "Laptop", "Eletronic", 5, 15000.00, "Dell", "Alienware"));

    do {

        option = menu();

        switch(option) {

            case 1:
                
                console.log(colors.fg.whitestrong, "\nRegister product:\n", colors.reset);

                prodName = readlineSync.question("\n- Enter the product name: ");
                let formattedProdName = product.toTitleCase(prodName);

                console.log("\n- Select the product type:");
                productType = readlineSync.keyInSelect(productTypes, "> ", {cancel: false}) + 1;

                quantity = readlineSync.questionInt("\n- Enter the total quantity of products: ", {limitMessage: "\n-> Invalid data type entered!"});
                while(quantity < 1) {
                    quantity = readlineSync.questionInt("\n-> Invalid data! Enter a quantity greater than 0: ");
                }

                price = readlineSync.questionFloat("\n- Enter the individual product price: R$ ");
                while(price < 0.01) {
                    price = readlineSync.questionFloat("\n-> Invalid data! Enter a price greater than R$ 0.00: R$ ");
                }

                switch(productType) {
                    
                    case 1:

                        authorName = readlineSync.question("\n- Enter the author's name: ");
                        let formattedAuthorName = product.toTitleCase(authorName);

                        bookGenre = getGenresBooks();

                        discountOption = readlineSync.keyInYNStrict("\n- Is there a discount on this product? ");

                        if(discountOption) {
                            discountPerc = readlineSync.questionFloat("\n-> Enter the discount percentage (%): ");
                            while(discountPerc < 0.00 || discountPerc < 100.00) {
                                price = readlineSync.questionFloat("\n-> Invalid percentage! Enter a value between 0.00 and 100.00: ");
                            }

                            console.log();
                            product.registerProduct(new Book(product.generateId(), formattedProdName, productType, quantity, price, formattedAuthorName, bookGenre, (price - ((discountPerc / 100) * price))));

                        } else {
                            console.log();
                            product.registerProduct(new Book(product.generateId(), formattedProdName, productType, quantity, price, formattedAuthorName, bookGenre));
                        }

                        break;

                    case 2:

                        productBrand = readlineSync.question("\n- Enter the product brand: ");
                        let formattedProdBrand = product.toTitleCase(productBrand);

                        productModel = readlineSync.question("\n- Enter the product model: ");
                        let formattedProdModel = product.toTitleCase(productModel);

                        discountOption = readlineSync.keyInYNStrict("\n- Is there a discount on this product? ");

                        if(discountOption) {
                            discountPerc = readlineSync.questionFloat("\n-> Enter the discount percentage (%): ");
                            while(discountPerc < 0.00 || discountPerc < 100.00) {
                                price = readlineSync.questionFloat("\n-> Invalid percentage! Enter a value between 0.00 and 100.00: ");
                            }

                            console.log();
                            product.registerProduct(new Eletronic(product.generateId(), formattedProdName, productType, quantity, price, formattedProdBrand, formattedProdModel, (price - ((discountPerc / 100) * price))));

                        } else {
                            console.log();
                            product.registerProduct(new Eletronic(product.generateId(), formattedProdName, productType, quantity, price, formattedProdBrand, formattedProdModel));
                        }

                        break;

                }

                keyPress();
                break;

            case 2:

                if(!product.isEmpty()) {
                    console.log(colors.fg.whitestrong, "\nList all products:\n", colors.reset);
                    
                    product.listAllProducts();

                } else {
                    console.log(colors.fg.red, "\nThere is no data registered yet! \n", colors.reset);
                }

                keyPress();
                break;

            case 3:

                if(!product.isEmpty()) {
                    console.log(colors.fg.whitestrong, "\nSearch product by ID:\n", colors.reset);

                    productId = readlineSync.questionInt("\n- Enter the product number: ", {limitMessage: "\n-> Invalid data type entered!"});
                    while(productId < 1) {
                        productId = readlineSync.questionInt("\n-> Invalid number! Enter a value greater than 0: ");
                    }
                    
                    console.log();
                    product.searchById(productId);

                } else {
                    console.log(colors.fg.red, "\nThere is no data registered yet! \n", colors.reset);
                }

                keyPress();
                break;
                
            case 4:

                if(!product.isEmpty()) {
                    console.log(colors.fg.whitestrong, "\nUpdate a product:\n", colors.reset);

                    productId = readlineSync.questionInt("\n- Enter the product ID: ", {limitMessage: "\n-> Invalid data type entered!"});
                    while(productId < 1) {
                        productId = readlineSync.questionInt("\n-> Invalid ID! Enter a value greater than 0: ");
                    }

                    let searchedProduct = product.searchInArray(productId);

                    if(searchedProduct != null) {
                        prodName = readlineSync.question("\n- Enter the new product name: ");
                        let formattedProdName = product.toTitleCase(prodName);

                        productType = searchedProduct.getProdType();

                        quantity = readlineSync.questionInt("\n- Enter the new total quantity of products: ", {limitMessage: "\n-> Invalid data type entered!"});
                        while(quantity < 1) {
                            quantity = readlineSync.questionInt("\n-> Invalid data! Enter a quantity greater than 0: ");
                        }

                        price = readlineSync.questionFloat("\n- Enter the new individual product price: R$ ");
                        while(price < 0.01) {
                            price = readlineSync.questionFloat("\n-> Invalid data! Enter a price greater than R$ 0.00: R$ ");
                        }

                        switch(productType) {
                            
                            case 1:

                                authorName = readlineSync.question("\n- Enter the new author's name: ");
                                let formattedAuthorName = product.toTitleCase(authorName);
        
                                bookGenre = getGenresBooks();
        
                                discountOption = readlineSync.keyInYNStrict("\n- Is there a discount on this product? ");
        
                                if(discountOption) {
                                    discountPerc = readlineSync.questionFloat("\n-> Enter the new discount percentage (%): ");
                                    while(discountPerc < 0.00 || discountPerc < 100.00) {
                                        price = readlineSync.questionFloat("\n-> Invalid percentage! Enter a value between 0.00 and 100.00: ");
                                    }
        
                                    console.log();
                                    product.updateProduct(new Book(productId, formattedProdName, productType, quantity, price, formattedAuthorName, bookGenre, (price - ((discountPerc / 100) * price))));
        
                                } else {
                                    console.log();
                                    product.updateProduct(new Book(productId, formattedProdName, productType, quantity, price, formattedAuthorName, bookGenre));
                                }
    
                                break;

                            case 2:

                                productBrand = readlineSync.question("\n- Enter the new product brand: ");
                                let formattedProdBrand = product.toTitleCase(productBrand);
        
                                productModel = readlineSync.question("\n- Enter the new product model: ");
                                let formattedProdModel = product.toTitleCase(productModel);
        
                                discountOption = readlineSync.keyInYNStrict("\n- Is there a discount on this product? ");
        
                                if(discountOption) {
                                    discountPerc = readlineSync.questionFloat("\n-> Enter the new discount percentage (%): ");
                                    while(discountPerc < 0.00 || discountPerc < 100.00) {
                                        price = readlineSync.questionFloat("\n-> Invalid percentage! Enter a value between 0.00 and 100.00: ");
                                    }
        
                                    console.log();
                                    product.updateProduct(new Eletronic(productId, formattedProdName, productType, quantity, price, formattedProdBrand, formattedProdModel, (price - ((discountPerc / 100) * price))));
        
                                } else {
                                    console.log();
                                    product.updateProduct(new Eletronic(productId, formattedProdName, productType, quantity, price, formattedProdBrand, formattedProdModel));
                                }
        
                                break;
                        }
                    } else {
                        console.log(colors.fg.red, `\n\n-> Product number '${productId}' was not found!\n`, colors.reset);
                    }
                } else {
                    console.log(colors.fg.red, "\nThere is no data registered yet! \n", colors.reset);
                }

                keyPress();
                break;

            case 5:

                if(!product.isEmpty()) {
                    console.log(colors.fg.whitestrong, "\nDelete a product:\n", colors.reset);

                    productId = readlineSync.questionInt("\n- Enter the product ID: ", {limitMessage: "\n-> Invalid data type entered!"});
                    while(productId < 1) {
                        productId = readlineSync.questionInt("\n-> Invalid ID! Enter a value greater than 0: ");
                    }

                    let searchedProduct = product.searchInArray(productId);

                    if(searchedProduct != null) {

                        let confirmation: boolean;

                        product.searchById(productId);

                        console.log(colors.fg.red, `\n-> This product has ${searchedProduct.getQuantity()} unit(s) in stock. Do you want to remove all or just some units (y - all / n - some)?\n`, colors.reset);
                        confirmation = readlineSync.keyInYNStrict('-> ');

                        if(confirmation) {
                            product.deleteProduct(productId);
                        } else {
                            let quantityForRemoval = readlineSync.questionInt("\n- Enter the quantity you want to remove: ", {limitMessage: "\n-> Invalid data type entered!"});
                            while(quantityForRemoval < 1) {
                                quantityForRemoval = readlineSync.questionInt("\n-> Invalid data! Enter a quantity greater than 0: ");
                            }

                            if(quantityForRemoval === searchedProduct.getQuantity()) {
                                product.deleteProduct(productId);
                            } else {
                                product.updateQuantity(productId, quantityForRemoval);
                            }
                        }
                    } else {
                        console.log(colors.fg.red, `\n\n-> Product number '${productId}' was not found!\n`, colors.reset);
                    }

                } else {
                    console.log(colors.fg.red, "\nThere is no data registered yet! \n", colors.reset);
                }

                keyPress();
                break;

            case 6:

                if(!product.isEmpty()) {
                    console.log(colors.fg.whitestrong, "\nSearch product by name:\n", colors.reset);

                    prodName = readlineSync.question("\nEnter the product name: ");
                    let formattedProdName = product.toTitleCase(prodName);

                    if(!product.searchByName(formattedProdName)) {
                        console.log(colors.fg.red, `\n\n-> There is no product whose name is '${formattedProdName}'.\n`, colors.reset);
                    }

                } else {
                    console.log(colors.fg.red, "\nThere is no data registered yet! \n", colors.reset);
                }

                keyPress();
                break;

            case 7:

                console.log(colors.fg.greenstrong);
                console.log("\nLit & Tech Store - Where Knowledge Meets Innovation!");
                about();
                console.log(colors.reset, "");
                break;

            default:

                console.log(colors.fg.whitestrong, "\n-> Invalid option! Choose an option between 0 and 9.", colors.reset);

        }

    } while(option !== 7);

}

export function menu(): number {

    console.log(colors.bg.black, colors.fg.yellow);
    console.log("\n**********************************************************");
    console.log("\n                     Lit & Tech Store                     \n");
    console.log("**********************************************************");
    console.log("\n 1 - Register product;" +
        "\n 2 - List all products;" +
        "\n 3 - Search product by ID;" +
        "\n 4 - Update a product;" +
        "\n 5 - Delete a product;" +
        "\n 6 - Search product by name;" +
        "\n 7 - Exit."
    );
    let option: number = readlineSync.questionInt("\n-> Choose an option above: ", {limitMessage: "\n-> Invalid data type entered!"});
    console.log("\n**********************************************************");
    console.log(colors.reset);

    return option;

}

export function getGenresBooks(): string {

    const booksCategories = [
        'Fiction Genres',
        'Non-Fiction Genres',
        'Hybrid/Other Genres'
    ];

    const fictionGenres = [
        'Literary Fiction',
        'Science Fiction (Sci-Fi)',
        'Fantasy',
        'Mystery/Crime',
        'Thriller/Suspense',
        'Romance',
        'Horror',
        'Historical Fiction',
        'Adventure',
        'Dystopian',
        'Young Adult (YA)',
        'New Adult'
    ];

    const nonfictionGenres = [
        'Biography/Autobiography',
        'Memoir',
        'Self-Help',
        'History',
        'Travel',
        'Science',
        'Philosophy',
        'True Crime',
        'Business/Economics',
        'Politics'
    ];

    const otherGenres = [
        'Graphic Novels/Comics',
        'Poetry',
        'Drama',
        'Anthology',
        'Humor',
        'Cookbooks',
        'Spiritual/Religious',
        'Educational/Academic',
        'Essays'
    ];

    const genres = [fictionGenres, nonfictionGenres, otherGenres];

    console.log("\n- Select the book category:");
    const bookCategory = readlineSync.keyInSelect(booksCategories, "> ", { cancel: true });

    if (bookCategory === -1) {
        console.log("No category selected. Exiting...");
        return ""; // Or handle as appropriate.
    }

    console.log(`\n-> Select a genre from ${booksCategories[bookCategory]}:`);
    const selectedGenre = readlineSync.keyInSelect(genres[bookCategory], "> ", { cancel: true });

    if (selectedGenre === -1) {
        console.log("No genre selected. Exiting...");
        return ""; // Or handle as appropriate.
    }

    return genres[bookCategory][selectedGenre];

}

export function about(): void {
    console.log("\nProject Developed by:\n");
    console.log("-> Alan Bruno - alanengem@gmail.com");
    console.log("-> https://github.com/alanbrunoscience/typescript-bank-account");
}

export function keyPress(): void {
    console.log(colors.reset, "");
    process.stdout.write(colors.reset + "-> Press 'Enter' to continue... "); // Display everything on the same line
    readlineSync.question("");
}

main();