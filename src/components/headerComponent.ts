export function showHeader(): string {
  if (sessionStorage.getItem("@AUTH_TOKEN")) {
    return `
    <nav>
      <ul class="nav-menu">
        <li><a id="home-menu" href="./index.html">Menu Principal</a></li>
        <li><a id="home-login" href="/checkout.html">checkout</a></li>
      </ul>
    </nav>
  `;
  }
  return `
    <nav>
      <ul class="nav-menu">
        <li><a id="home-menu" href="./index.html">Menu Principal</a></li>
        <li><a id="home-login" href="/login.html">Login</a></li>
      </ul>
    </nav>
  `;
}

// <></>
