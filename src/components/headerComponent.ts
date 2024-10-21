import { ada_logo } from "../assets/svg/ada-icon-svg";
import { carrinho } from "../assets/svg/cart-svg";
import { entrar } from "../assets/svg/login-svg";
import { sair } from "../assets/svg/logout-svg";
import { isLogged } from "../services/loginService";
import { logout } from "../utils/logout";

function showHeader(): void {
  const headerLogin = `
    <nav class="bg-ada_navyblue-50">
      <div class="max-w-[1440px] mx-auto py-4 px-6">
        <div class="flex flex-row justify-between items-center">
          <a id="ada-logo" href="./index.html">
            <span class="block md:hidden">${ada_logo(120, 40)}</span>
            <span class="hidden md:block">${ada_logo(193, 65)}</span>
          </a>
          <div class="flex flex-row gap-6 items-center">
            <a id="carrinho" href="#" class="flex flex-col justify-center items-center">
              <span class="block md:hidden">${carrinho(24, 24)}</span>
              <span class="hidden md:block">${carrinho(36, 36)}</span>
              <p class="font-livvic font-medium text-ada_green">Carrinho</p>
            </a>
            <a id="login" href="/login.html" class="flex flex-col justify-center items-center">
              <span class="block md:hidden">${entrar(24, 24)}</span>
              <span class="hidden md:block">${entrar(36, 36)}</span>
              <p class="font-livvic font-medium text-ada_green">Entrar</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;

  const headerLogged = `
    <nav class="bg-ada_navyblue-50">
      <div class="max-w-[1440px] mx-auto py-4 px-6">
        <div class="flex flex-row justify-between items-center">
          <a id="ada-logo" href="./index.html">
            <span class="block md:hidden">${ada_logo(120, 40)}</span>
            <span class="hidden md:block">${ada_logo(193, 65)}</span>
          </a>
          <div class="flex flex-row gap-6 items-center">
            <a id="carrinho" href="/cart.html" class="flex flex-col justify-center items-center">
              <span class="block md:hidden">${carrinho(24, 24)}</span>
              <span class="hidden md:block">${carrinho(36, 36)}</span>
              <p class="font-livvic font-medium text-ada_green">Carrinho</p>
            </a>
            <a id="logout" class="flex flex-col justify-center items-center hover:cursor-pointer">
              <span class="block md:hidden">${sair(24, 24)}</span>
              <span class="hidden md:block">${sair(36, 36)}</span>
              <p class="font-livvic font-medium text-ada_green">Sair</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;

  const headerElement = document.querySelector<HTMLElement>("#header");

  if (isLogged()) {
    headerElement!.innerHTML = headerLogged;

    document
      .querySelector<HTMLElement>("#logout")
      ?.addEventListener("click", () => {
        logout();
        showHeader();
      });
  } else {
    headerElement!.innerHTML = headerLogin;
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  showHeader();
});
