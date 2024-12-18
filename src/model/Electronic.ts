import { Product } from "./Product";

export class Electronic extends Product {

    private _productBrand: string;
    private _productModel: string;

    // Personalized Methods
    public display(): void {
        super.display();
        console.log(`7) Product Brand: ${this.getProductBrand()};`);
        console.log(`8) Product Model: ${this.getProductModel()}.\n`);
    }

    // Special Methods
    constructor(id: number, prodName: string, prodType: number, quantity: number, price: number, productBrand: string, productModel: string, discountedPrice?: number) {
        super(id, prodName, prodType, quantity, price, discountedPrice);
        this._productBrand = productBrand;
        this._productModel = productModel;
    }

    public getProductBrand(): string {
        return this._productBrand;
    }

    public setProductBrand(productBrand: string): void {
        this._productBrand = productBrand;
    }

    public getProductModel(): string {
        return this._productModel;
    }

    public setProductModel(productModel: string): void {
        this._productModel = productModel;
    }

}