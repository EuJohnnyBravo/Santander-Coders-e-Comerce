import IProductCart from "./IProductCart";

export default interface ICart {
    id: number;
    userId: number;
    date: string;
    products: Array<IProductCart>;
    __v: number;
}