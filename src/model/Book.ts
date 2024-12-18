import { Product } from "./Product";

export class Book extends Product {

    private _author: string;
    private _genre: string;

    // Personalized Methods
    public display(): void {
        super.display();
        console.log(`7) Book's author: ${this.getAuthor()};`);
        console.log(`8) Book's genre: ${this.getGenre()}.\n`);
    }

    // Special Methods
    constructor(id: number, prodName: string, prodType: number, quantity: number, price: number, authorName: string, bookGenre: string, discountedPrice?: number) {
        super(id, prodName, prodType, quantity, price, discountedPrice);
        this._author = authorName;
        this._genre = bookGenre;
    }

    public getAuthor(): string {
        return this._author;
    }

    public setAuthor(author: string): void {
        this._author = author;
    }

    public getGenre(): string {
        return this._genre;
    }

    public setGenre(genre: string): void {
        this._genre = genre;
    }

}