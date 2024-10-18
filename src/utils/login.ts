import { loginService } from "../services/loginService";
import { ILoginData } from "../interfaces/ILogin";

const seePassword = document.querySelector<HTMLInputElement>("#visible");
const password = document.querySelector<HTMLInputElement>("#password");
const loginError = document.querySelector<HTMLElement>("#loginError");
const button = document.querySelector<HTMLElement>("button");

function getUserInput(): ILoginData {
  const username = document.querySelector<HTMLInputElement>("#user")!.value;
  const password = document.querySelector<HTMLInputElement>("#password")!.value;

  return { username, password };
}

if (seePassword) {
  seePassword.addEventListener("change", (event) => {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      password!.type = "text";
    } else {
      password!.type = "password";
    }
  });
}

if (button) {
  button.addEventListener("click", () => {
    const loginData = getUserInput();
    loginService(loginData, loginError!);
  });
}
