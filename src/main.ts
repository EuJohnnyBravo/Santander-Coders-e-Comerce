import { fetchProducts } from "./services/productService";
import { showProducts } from "./components/productComponent";
import { addButtonEnventAddCard } from "./components/CartComponent";

const productsList = document.querySelector<HTMLElement>("#home");

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const products = await fetchProducts();
    if (productsList) productsList.innerHTML = showProducts(products);
    products.map((product) => {
      addButtonEnventAddCard(product);
    })
  } catch(error) {
    console.error(error);
    if (productsList)
      productsList.innerHTML = "<p>Erro ao carregar lista de produtos</p>";
  }
});
