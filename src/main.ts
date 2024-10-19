import { fetchProducts } from "./services/productService";
import { showProducts } from "./components/productComponent";
import { productFilterComponent } from "./components/productFilterComponent";
import { applyFilters, filters } from "./utils/itensFilter";

const productsList = document.querySelector<HTMLElement>("#home");
const selectedFilter = document.querySelector<HTMLDivElement>("#filter");

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

          if (checkbox.checked) {
            activeFilters |= filters[filterType];
          } else {
            activeFilters &= ~filters[filterType];
          }
          applyFilters(activeFilters, productList, productsList!);
        });
      });
      applyFilters(activeFilters, productList, productsList!);
      if (productsList) productsList.innerHTML = showProducts(productList);
    })
    .catch((err) => {
      if (productsList)
        productsList.innerHTML = `<p>Erro ao carregar lista de produtos: ${err}</p>`;
    });
});
