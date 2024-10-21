import { IProduct } from "../interfaces/IProduct";
import {
  clearCart,
  getSessionUserCart,
  removeProductCart,
} from "../services/cartService";
import { fetchProducts, getProductById } from "../services/productService";
import { cardCartProductComponent } from "./CardCartProductComponent";
import { showProducts } from "./productComponent";

const sectionCartProducts = document.getElementById(
  "section-products-cart"
) as HTMLElement;
const sectionCheckout = document.getElementById(
  "section-checkout"
) as HTMLElement;

function convertPrice(price: number): number {
  return price * 5.7;
}

export function addButtonEnventRemoveFromCart(product: IProduct) {
  const button = document.getElementById(`remove-from-cart-${product.id}`);
  if (button) {
    button.addEventListener("click", () => {
      removeProductCart(product.id);
    });
  }
}

export async function loadCardCartComponents(products: IProduct[]) {
  const productsCart = getSessionUserCart();
  let stringHtml = "";
  if (sectionCartProducts) {
    for (let i = 0; i < productsCart.length; i++) {
      stringHtml += cardCartProductComponent(products[i], productsCart[i]);
    }
    sectionCartProducts.innerHTML = stringHtml;
  }
}

function loadCheckout(products: IProduct[], totalProdutos: number) {
  if (sectionCheckout) {
    sectionCheckout.innerHTML = `
       <div class="bg-ada_navyblue-50 rounded-md w-[332px] h-[424px] p-4">
      <div class="text-white">
        <h3 class="text-center text-2xl font-livvic font-bold">Carrinho de Compras</h3>
        <div class="p-5 flex flex-col gap-3">
          <div class="flex justify-between text-xl font-livvic">
            <p>Produtos:</p>
            <p>R$: ${products.length > 0 ? convertPrice(totalProdutos).toFixed(2) : "0.00"}</p>
          </div>
          <div class="flex justify-between text-xl font-livvic">
            <p>Frete:</p>
            <p>R$: ${products.length > 0 ? "120.00" : "0.00"}</p>
          </div>
          <div class="flex justify-between text-xl font-livvic">
            <p>Descontos:</p>
            <p>R$: 0.00</p>
          </div>
          <div class="flex justify-between text-xl font-livvic font-bold">
            <p>Total:</p>
            <p>R$: ${products.length > 0 ? (convertPrice(totalProdutos) + 120).toFixed(2) : "0.00"}</p>
          </div>
          <div class="mt-5 flex justify-center flex-col">
            <div>
              <Label class="text-xl font-livvic font-bold">Cupom</Label>
            </div>
            <div class="flex gap-2">
              <input type="text" placeholder="Cupom" class="w-72 h-10 rounded-md bg-ada_navyblue-100 shadow-md text-white placeholder:text-ada_grey text-md p-2 font-light outline-none">
              <button class="text-ada_navyblue-100 text-xl bg-ada_green w-24 rounded-md py-1 px-2 font-livvic font-light">Aplicar</button>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center mt-4">
          <button id="btn-checkout" class="text-xl bg-ada_green w-full sm:w-72 rounded-md py-2 px-4 font-livvic font-light text-ada_navyblue-100">Realizar Compra</button>
        </div>
        <div class="notify-checkout mt-2"></div>
      </div>
    </div>
    `;
  }
}

async function checkout() {
  const productsCart = getSessionUserCart();
  const notifyCheckout = document.getElementById(
    "notify-checkout"
  ) as HTMLElement;
  if (productsCart.length > 0) {
    clearCart();
    await updateComponents();
    if (notifyCheckout)
      notifyCheckout.innerHTML = `<p class="text-center text-ada_green text-xl font-livvic">Compra Realizada com Sucesso!</p>`;
    return;
  }
  if (notifyCheckout)
    notifyCheckout.innerHTML = `<p class="text-center text-red-500 text-xl font-livvic">Nenhum Produto no carrinho!</p>`;
  return;
}

async function updateComponents() {
  const productsList = document.querySelector<HTMLElement>("#home");
  const sectionCartProducts = document.getElementById(
    "section-products-cart"
  ) as HTMLElement;
  const sectionCheckout = document.getElementById(
    "section-checkout"
  ) as HTMLElement;

  if (productsList) {
    const products = await fetchProducts();
    productsList.innerHTML = showProducts(products);
  }

  if (sectionCartProducts && sectionCheckout) {
    await showCartComponent();
  }
}

async function showCartComponent() {
  const products: IProduct[] = [];
  let totalProdutos: number = 0;
  try {
    if (sectionCartProducts) {
      const productsCart = getSessionUserCart();
      const promissesProducst = productsCart.map(async (productCart) => {
        const product = await getProductById(productCart.productId);
        if (product) {
          products.push(product);
          totalProdutos += product.price * productCart.quantity;
        }
      });
      await Promise.all(promissesProducst);

      loadCardCartComponents(products);

      products.map((product) => {
        addButtonEnventRemoveFromCart(product);
      });
    }
  } catch (error) {
    console.error(error);
  }

  loadCheckout(products, totalProdutos);
}

document.addEventListener("click", async (event) => {
  const target = event.target as HTMLElement;

  if (target.matches('[id^="remove-from-cart-"]')) {
    await updateComponents();
  }

  if (target.matches('[id^="btn-checkout"]')) {
    checkout();
  }
});

window.addEventListener("DOMContentLoaded", async () => {
  await showCartComponent();
});
