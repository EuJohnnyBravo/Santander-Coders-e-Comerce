import { menuBars } from "../assets/svg/menu-bars-svg";

export function productFilterComponent(): string {
  return `
    <div class="flex flex-row rounded-lg p-4 my-2 mx-4 bg-ada_navyblue-50">
      <div class="flex flex-row items-center justify-center mr-2">
        <span class="m-2">${menuBars(32, 32)}</span>
        <p class="font-livvic text-ada_green text-lg">Filtros</p>
      </div>
      <div class="mx-3">
        <h2 class="font-livvic text-white text-xl mx-3">Categorias</h2>
        <div class="flex flex-row">
          <div class="flex flex-col mx-3">
            <div>
              <input type="checkbox" id="filter-eletronics" data-filter="electronics">
              <a id="eletronics" class="font-livvic text-white text-l">Eletrônicos</a>
            </div>
            <div>
              <input type="checkbox" id="filter-jewelry" data-filter="jewelery">
              <a id="jewelery" class="font-livvic text-white text-l">Jóias</a>
            </div>
          </div>
          <div class="flex flex-col mx-3">
            <div>
              <input type="checkbox" id="filter-men" data-filter="man">
              <a id="men" class="font-livvic text-white text-l">Roupas Masculinas</a>
            </div>
            <div>
              <input type="checkbox" id="filter-woman" data-filter="woman">
              <a id="woman" class="font-livvic text-white text-l">Roupas Femininas</a>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-3">
        <h2 class="font-livvic text-white text-xl mx-3">Ordem</h2>
        <div class="flex flex-row">
          <div class="flex flex-col mx-3">
            <a id="up" class="font-livvic text-white text-l">Crescente</a>
            <a id="down" class="font-livvic text-white text-l">Decrescente</a>
          </div>
          <a id="noneO" class="font-livvic text-ada_green text-l">Nenhuma</a>
        </div>
      </div>
    </div>
  `;
}
