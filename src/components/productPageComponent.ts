import { IProduct } from "../interfaces/IProduct";
import { convertPrice } from "./cardProductComponent";
import { getProductById } from "../services/productService";
import {
  addProductToCart,
  productInCart,
  quantityProductInCart,
  removeProductCart,
} from "../services/cartService";
import { isLogged } from "../services/loginService";

async function getQueryParams(): Promise<IProduct | null> {
  const queryString = window.location.search;
  const url = new URLSearchParams(queryString);
  const productId = url.get("productId");

  if (!productId || isNaN(Number(productId))) {
    console.error("ProductId inválido");
    return null;
  }
  const product = await getProductById(Number(productId));
  return product;
}

function showComponent(
  product: IProduct,
  sectionProduct: HTMLElement,
  isProductInCart: Boolean,
  isQuantityInCart: Number
) {
  const isUserLogged = isLogged();

  sectionProduct.innerHTML = `
    <div class="container mx-auto py-8 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex justify-center items-center">
          <div class="flex justify-center items-center w-96 h-96 bg-white rounded-md">
            <img src="${
              product.image
            }" class="w-28 h-28 sm:w-32 sm:h-32 md:w-64 md:h-64 object-contain rounded-md">
          </div>
        </div>
        <div class="bg-ada_navyblue-50 text-white p-6 rounded-lg flex flex-col justify-between">
          <div>
            <h2 class="text-xl font-bold mb-4">Informações Produto</h2>
            <p class="text-lg mb-2">${product.title}</p>
            <p class="text-lg mb-4">R$${convertPrice(product.price).toFixed(
              2
            )}</p>
          </div>
          <div class="flex items-center space-x-4 mt-4">
            <button id="sub" class="bg-ada_green text-ada_navyblue-100 px-4 py-2 rounded-lg text-lg">-</button>
            <input id="count" type="text" class="w-16 text-center bg-ada_navyblue-100 text-white py-2 rounded-md" value="${isQuantityInCart}" />
            <button id="sum" class="bg-ada_green text-ada_navyblue-100 px-4 py-2 rounded-lg text-lg">+</button>
          </div>
          <div class="mt-4">
            <button id="btn-add-cart" ${isUserLogged ? "" : "disabled"} class="w-full bg-ada_green text-ada_navyblue-100 px-6 py-2 rounded-lg disabled:bg-ada_grey">
              ${
                isProductInCart
                  ? "Remover do Carrinho"
                  : isUserLogged ? "Adicionar ao Carrinho" : "Realize Login"
              }
            </button>
          </div>
        </div>
      </div>
      <div class="bg-ada_navyblue-50 text-white p-6 mt-8 rounded-lg">
        <h3 class="text-xl font-bold mb-4">Descrição do Produto</h3>
        <p>${product.description}</p>
      </div>
    </div>
  `;
}

function updateCartState(productId: number, display: HTMLInputElement) {
  const isProductInCart = productInCart(productId);
  const isQuantityInCart = quantityProductInCart(productId);
  display.value = isQuantityInCart.toString();
  return { isProductInCart, isQuantityInCart };
}

function handleQuantityChange(display: HTMLInputElement, increment: boolean) {
  let currentValue = Number(display.value);
  currentValue = increment ? currentValue + 1 : Math.max(0, currentValue - 1);
  display.value = currentValue.toString();
}

function setEventListeners(
  product: IProduct,
  sectionProduct: HTMLElement,
  isProductInCart: boolean,
  display: HTMLInputElement
) {
  const btnSum = document.querySelector<HTMLButtonElement>("#sum");
  const btnSub = document.querySelector<HTMLButtonElement>("#sub");
  const btnAddCart = document.querySelector<HTMLButtonElement>("#btn-add-cart");

  btnSum?.addEventListener("click", () => {
    if (display) handleQuantityChange(display, true);
  });

  btnSub?.addEventListener("click", () => {
    if (display) handleQuantityChange(display, false);
  });

  btnAddCart?.addEventListener("click", () => {
    if (!display) return;
    const quantity = Number(display.value);

    if (quantity > 0) {
      if (isProductInCart) {
        removeProductCart(product.id);
        showComponent(product, sectionProduct, false, 1);
      } else {
        addProductToCart({ productId: product.id, quantity });
        const { isProductInCart, isQuantityInCart } = updateCartState(
          product.id,
          display
        );
        showComponent(
          product,
          sectionProduct,
          isProductInCart,
          isQuantityInCart
        );
      }
      setEventListeners(product, sectionProduct, !isProductInCart, display);
    }
  });
}

async function productPageComponent() {
  const sectionProduct =
    document.querySelector<HTMLElement>("#section-product");
  const product = await getQueryParams();

  if (!product || !sectionProduct) return;

  const isProductInCart = productInCart(product.id);
  const numberOfProducts = isProductInCart
    ? quantityProductInCart(product.id)
    : 1;

  showComponent(product, sectionProduct, isProductInCart, numberOfProducts);

  const display = document.querySelector<HTMLInputElement>("#count");
  if (display) {
    setEventListeners(product, sectionProduct, isProductInCart, display);
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  await productPageComponent();
});
