const seePassword = document.querySelector<HTMLInputElement>("#visible");
const password = document.querySelector<HTMLInputElement>("#password");

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
