import { fetchProducts } from "./services/productService";
import { showProducts } from "./components/productComponent";

const productsList = document.querySelector<HTMLElement>("#home");

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const products = await fetchProducts();
    if (productsList) productsList.innerHTML = showProducts(products);
  } catch {
    if (productsList)
      productsList.innerHTML = "<p>Erro ao carregar lista de produtos</p>";
  }
});
