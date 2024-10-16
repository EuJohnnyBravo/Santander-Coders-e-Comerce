import { fetchProducts } from "./services/productService";
import { showProducts } from "./components/productComponent";
import { showHeader } from "./components/headerComponent";

const productsList = document.querySelector<HTMLElement>("#home");
const header = document.querySelector<HTMLElement>("#header");

window.addEventListener("DOMContentLoaded", async () => {
  if (header) {
    header.innerHTML = showHeader();
  }
  try {
    const products = await fetchProducts();
    if (productsList) productsList.innerHTML = showProducts(products);
  } catch {
    if (productsList)
      productsList.innerHTML = "<p>Erro ao carregar lista de produtos</p>";
  }
});
