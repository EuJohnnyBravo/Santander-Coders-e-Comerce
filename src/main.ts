import { fetchProducts } from "./services/productService";
import { productFilterComponent } from "./components/productFilterComponent";
import { filters, showFiltredProducts } from "./utils/itensFilter";

const productsList = document.querySelector<HTMLElement>("#home");
const selectedFilter = document.querySelector<HTMLDivElement>("#filter");

window.addEventListener("DOMContentLoaded", async () => {
  selectedFilter!.innerHTML = productFilterComponent();
  const checkboxes = document.querySelectorAll<HTMLInputElement>(
    "#filter input[type='checkbox']"
  );
  const priceOrderRadios = document.querySelectorAll(
    "#price input[name='price']"
  );
  let priceOrder: "asc" | "desc" = "asc";

  fetchProducts()
    .then((productList) => {
      const activeFilters: filters = filters.none;
      showFiltredProducts(
        activeFilters,
        checkboxes,
        productList,
        productsList!,
        priceOrderRadios,
        priceOrder
      );
    })
    .catch((err) => {
      if (productsList)
        productsList.innerHTML = `<p>Erro ao carregar lista de produtos: ${err}</p>`;
    });
});
