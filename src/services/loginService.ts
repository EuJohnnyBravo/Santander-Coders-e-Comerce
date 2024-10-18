import { ILogin, ILoginData } from "../interfaces/ILogin";
import axios from "axios";

export async function loginService(
  loginData: ILoginData,
  loginError: HTMLElement
) {
  if (!loginData.username || !loginData.password) {
    loginError!.innerHTML = `<p>Campo de usuario/senha incorreto</p>`;
    return;
  }
  try {
    const response = await axios.post<ILogin>(
      "https://fakestoreapi.com/auth/login",
      loginData
    );
    const { token } = response.data;
    sessionStorage.setItem("@AUTH_TOKEN", token);
    window.location.href = "../index.html";
  } catch (error) {
    console.log(error);
    if (loginError) {
      loginError.textContent = "Por favor, insira o nome de usuário e a senha.";
    }
    throw error;
  }
}
