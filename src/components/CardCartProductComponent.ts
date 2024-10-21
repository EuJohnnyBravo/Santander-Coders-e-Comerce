import { IProduct } from "../interfaces/IProduct";
import IProductCart from "../interfaces/IProductCart";

function convertPrice(price: number): number {
  return price * 5.7;
}

export function cardCartProductComponent(
  product: IProduct,
  productCart: IProductCart
): string {
  return `
    <div class="flex flex-col p-5 rounded-lg bg-ada_navyblue-50 max-w-[320px] w-80 h-[436px] sm:max-w-[350px] lg:max-w-[400px] m-auto">
      <div class="flex justify-center bg-white items-center rounded-lg py-2">
        <img src="${product.image}" alt="imagem ${product.title}" class="w-32 h-32 object-contain rounded-md">
      </div>
      <h2 class="font-livvic text-white text-lg my-2">${product.title}</h2>
      <p class="font-livvic text-white text-base my-2">R$${convertPrice(product.price).toFixed(2)}</p>
      <p class="font-livvic text-white text-base my-2">Quantidade: ${productCart.quantity}</p>
      <button id="remove-from-cart-${product.id}" class="mt-auto flex justify-center py-2 px-4 items-center bg-ada_green font-livvic rounded-lg text-ada_navyblue-100">Remover do Carrinho</button>
    </div>
    `;
}
