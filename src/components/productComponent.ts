import { IProduct } from "../interfaces/IProduct";
import { cardProductComponent } from "./cardProductComponent";

export function showProducts(products: IProduct[]): string {
  return products
    .map(
      (product) => `
        ${cardProductComponent(product)}
      `
    )
    .join("");
}
