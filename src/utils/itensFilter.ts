import { addButtonEnventAddCard } from "../components/CartComponent";
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

export function applyFiltersAndSort(
  activeFilters: filters,
  products: IProduct[],
  productsList: HTMLElement,
  priceOrder: "asc" | "desc"
) {
  let filteredProducts = itensFilter(products, activeFilters);
  filteredProducts = sortProducts(filteredProducts, priceOrder);
  if (productsList) productsList.innerHTML = showProducts(filteredProducts);
}

export function sortProducts(
  products: IProduct[],
  order: "asc" | "desc"
): IProduct[] {
  return products.sort((a, b) => {
    if (order === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
}

export function showFiltredProducts(
  activeFilters: filters,
  checkboxes: NodeListOf<HTMLInputElement>,
  productList: IProduct[],
  productsList: HTMLElement,
  orderRadios: NodeListOf<Element>,
  priceOrder: "desc" | "asc"
) {
  console.log(productList);
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const filterType = checkbox.getAttribute(
        "data-filter"
      ) as keyof typeof filters;

      if (checkbox.checked) {
        activeFilters |= filters[filterType];
      } else {
        activeFilters &= ~filters[filterType];
      }
      applyFiltersAndSort(
        activeFilters,
        productList,
        productsList!,
        priceOrder
      );
    });

    orderRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        priceOrder = (radio as HTMLInputElement).value as "asc" | "desc";
        applyFiltersAndSort(
          activeFilters,
          productList,
          productsList!,
          priceOrder
        );
      });
    });
  });

  productList.map((product) => {
    addButtonEnventAddCard(product);
  });

  applyFiltersAndSort(activeFilters, productList, productsList!, priceOrder);
  if (productsList) productsList.innerHTML = showProducts(productList);
}
