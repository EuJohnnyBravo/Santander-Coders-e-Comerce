import { IProduct } from "../interfaces/IProduct";

export function showProducts(products: IProduct[]): string {
  return products
    .map(
      (product) => `
        <div class="product">
          <img src="${product.image}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>${product.price}</p>
          <button data-id="${product.id}">Add to Cart</button>
        </div>
      `
    )
    .join("");
}
