import { ada_logo } from "../assets/svg/ada-icon-svg";
import { carrinho } from "../assets/svg/cart-svg";
import { entrar } from "../assets/svg/login-svg";
import { sair } from "../assets/svg/logout-svg";
import { logout } from "../utils/logout";

function showHeader(): void {
  const headerLogin = `
    <nav class="bg-ada_navyblue-50">
      <div class="max-w-[1440px] m-auto py-4 px-6">
        <div class="flex flex-row justify-between">
          <a id="ada-logo" href="./index.html">${ada_logo(193, 65)}</a>
          <div class="flex flex-row gap-[30%]">
            <a id="carrinho" href="/cart.html" class="flex flex-col justify-center items-center">
              <span>${carrinho(36, 36)}</span>
              <p class="font-livvic font-medium text-ada_green">Carrinho</p>
            </a>
            <a id="login" href="/login.html" class="flex flex-col justify-center items-center">
              <span>${entrar(36, 36)}</span>
              <p class="font-livvic font-medium text-ada_green">Entrar</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;

  const headerLogged = `
    <nav class="bg-ada_navyblue-50">
      <div class="max-w-[1440px] m-auto py-4 px-6">
        <div class="flex flex-row justify-between">
          <a id="ada-logo" href="./index.html">${ada_logo(193, 65)}</a>
          <div class="flex flex-row gap-[30%]">
            <a id="carrinho" href="/cart.html" class="flex flex-col justify-center items-center">
              <span>${carrinho(36, 36)}</span>
              <p class="font-livvic font-medium text-ada_green">Carrinho</p>
            </a>
            <span id="logout" class="flex flex-col justify-center items-center hover:cursor-pointer">
              <span>${sair(36, 36)}</span>
              <p class="font-livvic font-medium text-ada_green">Sair</p>
            </span>
          </div>
        </div>
      </div>
    </nav>
  `;

  const headerElement = document.querySelector<HTMLElement>("#header");

  if (sessionStorage.getItem("@AUTH_TOKEN")) {
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
