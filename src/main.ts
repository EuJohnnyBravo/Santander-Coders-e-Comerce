import { fetchProducts } from "./services/productService";
import { showProducts } from "./components/productComponent";
import { productFilterComponent } from "./components/productFilterComponent";
import { filters, itensFilter } from "./utils/itensFilter";
import { IProduct } from "./interfaces/IProduct";

const productsList = document.querySelector<HTMLElement>("#home");
const selectedFilter = document.querySelector<HTMLDivElement>("#filter");

function applyFilters(activeFilters: filters, products: IProduct[]) {
  const filteredProducts = itensFilter(products, activeFilters);
  if (productsList) productsList.innerHTML = showProducts(filteredProducts);
}

window.addEventListener("DOMContentLoaded", async () => {
  selectedFilter!.innerHTML = productFilterComponent();
  const checkboxes = document.querySelectorAll<HTMLInputElement>(
    "input[type='checkbox']"
  );

  fetchProducts()
    .then((productList) => {
      let activeFilters: filters = filters.none;
      console.log(productList);
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          const filterType = checkbox.getAttribute(
            "data-filter"
          ) as keyof typeof filters;

          // Adiciona ou remove o filtro com base na seleção
          if (checkbox.checked) {
            activeFilters |= filters[filterType]; // Adiciona o filtro
          } else {
            activeFilters &= ~filters[filterType]; // Remove o filtro
          }

          // Agora que os filtros foram atualizados, aplique-os aos produtos
          applyFilters(activeFilters, productList);
        });
      });
      applyFilters(activeFilters, productList);
      if (productsList) productsList.innerHTML = showProducts(productList);
    })
    .catch((err) => {
      if (productsList)
        productsList.innerHTML = `<p>Erro ao carregar lista de produtos: ${err}</p>`;
    });
});
