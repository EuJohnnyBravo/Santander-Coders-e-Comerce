export function logout() {
  console.log("oi");
  if (!confirm("Deseja encerrar a sessão")) {
    return;
  }
  alert("Sessão encerrada!");
  sessionStorage.removeItem("@AUTH_TOKEN");
  window.location.href = "/index.html";
}
