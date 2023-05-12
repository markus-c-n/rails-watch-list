import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
}

document.querySelector(".card-hello img")
    .addEventListener("click", (event) => {
      event.currentTarget.classList.toggle("tapped");
    });
