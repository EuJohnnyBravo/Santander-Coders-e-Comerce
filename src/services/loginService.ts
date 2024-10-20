import { ILogin, ILoginData } from "../interfaces/ILogin";
import axios from "axios";
import { getUserCart } from "./cartService";
import { decodeJWT } from "../utils/decodeJWT";
import { IJwt } from "../interfaces/IJwt";

export async function loginService(
  loginData: ILoginData,
  loginError: HTMLElement
) {
  if (!loginData.username || !loginData.password) {
    loginError!.innerHTML = `<p class="text-white text-center text-lg font-livvic p-2git">Campo de usuario/senha incorreto</p>`;
    return;
  }
  try {
    const response = await axios.post<ILogin>(
      "https://fakestoreapi.com/auth/login",
      loginData
    );
    const { token } = response.data;
    sessionStorage.setItem("@AUTH_TOKEN", token);
    const decodeToken: IJwt = decodeJWT(token);
    await getUserCart(decodeToken.sub);
    window.location.href = "../index.html";
  } catch (error) {
    console.log(error);
    if (loginError) {
      loginError.textContent = "Por favor, insira o nome de usuário e a senha.";
    }
    throw error;
  }
}

export function isLogged() {
  return sessionStorage.getItem("@AUTH_TOKEN") ? true : false;
}
