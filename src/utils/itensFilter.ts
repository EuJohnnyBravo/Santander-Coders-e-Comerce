import { showProducts } from "../components/productComponent";
import { IProduct } from "../interfaces/IProduct";

export enum filters {
  none = 0,
  electronics = 1 << 0,
  jewelery = 1 << 1,
  man = 1 << 2,
  woman = 1 << 3,
}

export function itensFilter(products: IProduct[], flags: filters): IProduct[] {
  if (flags === filters.none) {
    return products;
  }

  return products.filter((product) => {
    if (flags & filters.electronics && product.category === "electronics")
      return true;
    if (flags & filters.jewelery && product.category === "jewelery")
      return true;
    if (flags & filters.man && product.category === "men's clothing")
      return true;
    if (flags & filters.woman && product.category === "women's clothing")
      return true;
  });
}

export function applyFilters(
  activeFilters: filters,
  products: IProduct[],
  productsList: HTMLElement
) {
  const filteredProducts = itensFilter(products, activeFilters);
  if (productsList) productsList.innerHTML = showProducts(filteredProducts);
}
