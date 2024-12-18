import { colors } from "../util/Colors";

export abstract class Product {

    // Atributes
    private _id: number;
    private _prodName: string;
    private _prodType: number;
    private _quantity: number;
    private _price: number;
    private _discountedPrice?: number;


    // Personalized Methods
    public display(): void {

        let productType: string = "";

        switch(this.getProdType()) {
            case 1:
                productType = "Book";
                break;
            case 2:
                productType = "Electronic";
                break;
            default:
                productType = "Invalid Product Type";
                
        }

        console.log("\n*****************************************");
        console.log("               Product Data              ");
        console.log("*****************************************");
        console.log(`\n1) Product ID: ${this.getId()};`);
        console.log(`2) Product Name: ${this.getProdName()};`);
        console.log(`3) Product Type: ${productType};`);
        console.log(`4) Quantity in Stock: ${this.getQuantity()};`);
        console.log(`5) Individual Product Price: ${new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL",
        }).format(this.getPrice())};`);
        if(this.getDiscountedPrice() !== undefined) {
            console.log(`6) Discounted Price: ${new Intl.NumberFormat('pt-BR', {
                style: "currency",
                currency: "BRL",
            }).format(this.getDiscountedPrice())};`);
        }
    }

    // Special Methods
    constructor(id: number, prodName: string, prodType: number, quantity: number, price: number, discountedPrice?: number) {
        this._id = id;
        this._prodName = prodName;
        this._prodType = prodType;
        this._quantity = quantity;
        this._price = price;
        if(discountedPrice !== undefined) {
            this._discountedPrice = discountedPrice;
        }
    }

    public getId(): number {
        return this._id;
    }

    public setId(id: number): void {
        this._id = id;
    }

    public getProdName(): string {
        return this._prodName;
    }

    public setProdName(prodName: string): void {
        this._prodName = prodName;
    }

    public getProdType(): number {
        return this._prodType;
    }

    public setProdType(prodType: number): void {
        this._prodType = prodType;
    }

    public getQuantity(): number {
        return this._quantity;
    }

    public setQuantity(quantity: number): void {
        this._quantity = quantity;
    }

    public getPrice(): number {
        return this._price;
    }

    public setPrice(price: number): void {
        this._price = price;
    }

    public getDiscountedPrice(): number {
        return this._discountedPrice ?? this.getPrice();
    }

    public setDiscountedPrice(discountedPrice: number): void {
        this._discountedPrice = discountedPrice;
    }

}