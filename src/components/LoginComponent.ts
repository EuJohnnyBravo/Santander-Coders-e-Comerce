import { ada_logo } from "../assets/svg/ada-icon-svg";
import { closedEye } from "../assets/svg/closed-eye-svg";
import { eye } from "../assets/svg/opened-eye-svg";
import { ILoginData } from "../interfaces/ILogin";
import { loginService } from "../services/loginService";

function getUserInput(): ILoginData {
  const username = document.querySelector<HTMLInputElement>("#user")!.value;
  const password = document.querySelector<HTMLInputElement>("#password")!.value;

  return { username, password };
}

function showLoginComponent() {
  const htmlLogin = `
        <div class="flex justify-center items-center mb-3">
      <a href="/index.html">${ada_logo(156, 156)}</a>
    </div>
    <h1 class="text-center text-xl font-livvic text-white">Faça Login</h1>
    <div class="flex flex-col justify-center items-center gap-6 mt-10">
      <input id="user" type="text" class="w-full h-9 rounded-md bg-ada_navyblue-100 shadow-md text-white placeholder:text-ada_grey text-md p-2 font-light outline-none" placeholder="Usuário" value="mor_2314">
      <div class="w-full h-9 rounded-md bg-ada_navyblue-100 shadow-md text-white flex">
        <input id="password" type="password" placeholder="Senha" class="w-[88%] bg-transparent rounded-md placeholder:text-ada_grey text-md font-light outline-none p-2" value="83r5^_">
        <button id="visible" class="flex flex-col justify-center items-center" data-visible="0">
          ${closedEye(24, 24)}
        </button>
      </div>
    </div>
    <div class="flex justify-center items-center mt-10">
      <button id="btn-entrar" class="text-xl bg-ada_green w-full max-w-[320px] sm:max-w-[350px] lg:max-w-[384px] rounded-md py-2 px-4 font-livvic font-light">Entrar</button>
    </div>
    <div id="loginError" class="mt-5"></div>
    `;

  const sectionLogin = document.getElementById("section-login");

  if (sectionLogin) {
    sectionLogin.innerHTML = htmlLogin;
  }

  const seePassword = document.getElementById("visible") as HTMLButtonElement;
  const password = document.getElementById("password") as HTMLInputElement;
  const loginError = document.getElementById("loginError") as HTMLElement;
  const button = document.getElementById("btn-entrar") as HTMLElement;

  seePassword.addEventListener("click", () => {
    const isVisible = seePassword.getAttribute("data-visible") === "1";
    seePassword.setAttribute("data-visible", isVisible ? "0" : "1");
    if (isVisible) {
      password.type = "password";
      seePassword.innerHTML = closedEye(24, 24);
    } else {
      password.type = "text";
      seePassword.innerHTML = eye(24, 24);
    }
  });

  if (button) {
    button.addEventListener("click", () => {
      const loginInput = getUserInput();
      loginService(loginInput, loginError!);
    });
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  showLoginComponent();
});
