export function showHeader(): string {
  const headerLogin = `
    <nav>
      <ul class="nav-menu">
        <li><a id="home-menu" href="./index.html">Menu Principal</a></li>
        <li><a id="home-login" href="/login.html">Entrar</a></li>
        <li><a id="home-login" href="/login.html">Carrinho</a></li>
      </ul>
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
