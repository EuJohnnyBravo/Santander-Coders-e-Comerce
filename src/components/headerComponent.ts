import { ada_logo } from "../assets/svg/ada-logo";
import { carrinho } from "../assets/svg/carrinho";
import { entrar } from "../assets/svg/entrar";

export function showHeader(): string {
  const headerLogin = `
    <nav class="bg-ada_navyblue-50">
      <div class="container-header">
        <div class="flex flex-row justify-between">
          <a id="ada-logo" href="./index.html">${ada_logo(193, 65)}</a>
          <div class="flex flex-row gap-4">
            <a id="carrinho" href="/cart.html">
              <span>${carrinho(48, 48)}</span>
              <p>carrinho</p>
            </a>
            <a id="entrar" href="/login.html">
              <span>${entrar(48, 48)}</span>
              <p>Entrar</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;

  const headerLoged = `
    <nav>
      <ul class="nav-menu">
        <li><a id="home-menu" href="./index.html">Menu Principal</a></li>
        <li><a id="home-logout" href="#">Sair</a></li>
        <li><a id="home-login" href="/cart.html">Carrinho</a></li>
      </ul>
    </nav>
  `;

  if (sessionStorage.getItem("@AUTH_TOKEN")) {
    return headerLoged;
  }
  return headerLogin;
}
