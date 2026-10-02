export interface IProduct {
    id: number;
    name: string;
    category: string;
    brand: string;
    price: number;
    currency: "HUF" | "EUR";
    stock: number;
    rating: number;
    active: boolean;
    description: string;
    image: string;
}

export class Product implements IProduct {
    private _id: number;
    private _name: string;
    private _category: string;
    private _brand: string;
    private _price: number;
    private _currency: "HUF" | "EUR";
    private _stock: number;
    private _rating: number;
    private _active: boolean;
    private _description: string;
    private _image: string;

    constructor(
        id: number,
        name: string,
        category: string,
        brand: string,
        price: number,
        currency: "HUF" | "EUR",
        stock: number,
        rating: number,
        active: boolean,
        description: string,
        image: string
    ) {
        this._id = id;
        this._name = name;
        this._category = category;
        this._brand = brand;
        this._price = price;
        this._currency = currency;
        this._stock = stock;
        this._rating = rating;
        this._active = active;
        this._description = description;
        this._image = image;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get category(): string {
        return this._category;
    }

    set category(value: string) {
        this._category = value;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get currency(): "HUF" | "EUR" {
        return this._currency;
    }

    set currency(value: "HUF" | "EUR") {
        this._currency = value;
    }

    get stock(): number {
        return this._stock;
    }

    set stock(value: number) {
        this._stock = value;
    }

    get rating(): number {
        return this._rating;
    }

    set rating(value: number) {
        this._rating = value;
    }

    get active(): boolean {
        return this._active;
    }

    set active(value: boolean) {
        this._active = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }
}

