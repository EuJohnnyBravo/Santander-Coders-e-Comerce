import { menuBars } from "../assets/svg/menuBars-svg";

export function productFilter(): string {
  return `
    <div class="flex flex-row rounded-lg p-4 my-2 mx-4 bg-ada_navyblue-50">
      <div class="flex flex-row items-center justify-center mr-2">
        <span class="m-2">${menuBars(32, 32)}</span>
        <p class="font-livvic text-ada_green text-lg">Filtros</p>
      </div>
      <div class="mx-3">
        <h2 class="font-livvic text-white text-xl mx-3 cursor-pointer">Categorias</h2>
        <div class="flex flex-row">
          <div class="flex flex-col mx-3 cursor-pointer">
            <a id="eletronics" class="font-livvic text-white text-l cursor-pointer">Eletrônicos</a>
            <a id="jewelry" class="font-livvic text-white text-l cursor-pointer">Jóias</a>
          </div>
          <div class="flex flex-col mx-3">
            <a id="male" class="font-livvic text-white text-l cursor-pointer">Roupas Masculinas</a>
            <a id="female" class="font-livvic text-white text-l cursor-pointer">Roupas Femininas</a>
          </div>
          <a id="noneC" class="font-livvic text-ada_green text-l cursor-pointer">Nenhuma</a>
        </div>
      </div>
      <div class="mx-3">
        <h2 class="font-livvic text-white text-xl mx-3 cursor-pointer">Ordem</h2>
        <div class="flex flex-row">
          <div class="flex flex-col mx-3 cursor-pointer">
            <a id="up" class="font-livvic text-white text-l cursor-pointer">Crescente</a>
            <a id="down" class="font-livvic text-white text-l cursor-pointer">Decrescente</a>
          </div>
          <a id="noneO" class="font-livvic text-ada_green text-l cursor-pointer">Nenhuma</a>
        </div>
      </div>
    </div>
  `;
}

// window.addEventListener("DOMContentLoaded", async () => {
//   productFilter();
// });
