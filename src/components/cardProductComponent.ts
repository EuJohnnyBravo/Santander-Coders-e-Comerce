import { IProduct } from "../interfaces/IProduct";

export function convertPrice(price: number): number {
  return price * 5.7;
}

export function cardProductComponent(product: IProduct): string {
  return `
    <div class="flex flex-col p-4 rounded-lg m-4 bg-ada_navyblue-50 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto">
      <div class="flex justify-center bg-white items-center rounded-lg py-2">
        <img src="${product.image}" alt="imagem ${
    product.title
  }" class="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain rounded-md">
      </div>
      <h2 class="font-livvic text-white text-lg sm:text-xl md:text-2xl my-2">${
        product.title
      }</h2>
      <p class="font-livvic text-white text-base sm:text-lg md:text-xl my-2">R$${convertPrice(
        product.price
      ).toFixed(2)}</p>
      <a href="./product.html?productId=${
        product.id
      }" class="mt-auto flex justify-center py-2 px-4 items-center bg-ada_green font-livvic rounded-lg text-ada_navyblue-100 hover:bg-ada_green-dark transition-colors">
        Ver Produto
      </a>
    </div>
  `;
}
