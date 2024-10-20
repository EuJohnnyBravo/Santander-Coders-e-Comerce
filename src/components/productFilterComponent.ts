import { menuBars } from "../assets/svg/menu-bars-svg";

export function productFilterComponent(): string {
  return `
    <div class="flex flex-row rounded-lg p-4 my-2 mx-4 bg-ada_navyblue-50">
      <div class="flex flex-row items-center justify-center mr-2">
        <span class="m-2">${menuBars(32, 32)}</span>
        <p class="font-livvic text-ada_green text-lg">Filtros</p>
      </div>
      <div class="mx-3" id="filers">
        <h2 class="font-livvic text-white text-xl mx-3">Categorias</h2>
        <div class="flex flex-row">
          <div class="flex flex-col mx-3">
            <label class="font-livvic text-white text-l">
              <input type="checkbox" id="filter-eletronics" data-filter="electronics"> Eletrônicos
            </label>
            <label class="font-livvic text-white text-l">
              <input type="checkbox" id="filter-jewelry" data-filter="jewelery"> Jóias
            </label>
          </div>
          <div class="flex flex-col mx-3">
            <label class="font-livvic text-white text-l">
              <input type="checkbox" id="filter-men" data-filter="man"> Roupas Masculinas
            </label>
            <label class="font-livvic text-white text-l">
              <input type="checkbox" id="filter-woman" data-filter="woman"> Roupas Femininas
            </label>
          </div>
        </div>
      </div>
      <div class="mx-3">
        <h2 class="font-livvic text-white text-xl mx-3">Preço</h2>
        <div class="flex flex-row">
          <div class="flex flex-col mx-3" id="price">
            <label class="font-livvic text-white text-l">
              <input type="radio" id="price-order-asc" name="price" value="asc" checked> Crescente
            </label>
            <label class="font-livvic text-white text-l">
              <input type="radio" id="price-order-desc" name="price" value="desc"> Decrescente
            </label>
          </div>
        </div>
      </div>
    </div>
  `;
}
