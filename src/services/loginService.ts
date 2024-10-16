import { ILogin } from "../interfaces/ILogin";
import axios from "axios";

const loginError = document.querySelector<HTMLElement>("#loginError");
const button = document.querySelector<HTMLElement>("button");

function getUserInput() {
  const username = document.querySelector<HTMLInputElement>("#user")?.value;
  const password = document.querySelector<HTMLInputElement>("#password")?.value;

  return { username, password };
}

if (button) {
  button.addEventListener("click", async () => {
    const userInput = getUserInput();
    if (!userInput.username || !userInput.password) {
      loginError!.innerHTML = `<p>Campo de usuario/senha incorreto</p>`;
      return;
    }
    await axios
      .post<ILogin>("https://fakestoreapi.com/auth/login", userInput)
      .then((response) => {
        const { token } = response.data;
        sessionStorage.setItem("authToken", token);
        window.location.href = "../index.html";
      })
      .catch((error) => {
        console.log(error);
        if (loginError) {
          loginError.textContent =
            "Por favor, insira o nome de usuário e a senha.";
        }
        throw error;
      });
  });
}
