const loginError = document.querySelector<HTMLElement>("#loginError");
const button = document.querySelector<HTMLElement>("button");

if (button) {
  button.addEventListener("click", () => {
    const user = document.querySelector<HTMLInputElement>("#user");
    const password = document.querySelector<HTMLInputElement>("#password");

    if (!user?.value || !password?.value) {
      return;
    }

    let myHeaders = new Headers();
    myHeaders.set("Content-Type", "application/json");

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        username: user?.value,
        password: password?.value,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        sessionStorage.setItem("authToken", json.token);
        window.location.href = "../index.html";
      })
      .catch((error) => {
        console.log(error);
        if (loginError) {
          loginError.textContent =
            "Por favor, insira o nome de usuário e a senha.";
        }
      });
  });
}
