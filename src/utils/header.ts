const header = document.querySelector<HTMLElement>("#header");
import { showHeader } from "../components/headerComponent";

window.addEventListener("DOMContentLoaded", async () => {
  if (header) {
    header.innerHTML = showHeader();
  }
});
