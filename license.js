import { renderLicense } from "./render.js";

export class License {
  constructor(license) {
    this.id = license.id;
    this.software = license.software;
    this.version = license.version;
    this.price = license.price;
    this.key = license.key;
    this.featured = license.featured;
    this.discount = license.discount;
  }

  getFinalPrice() {
    return (this.price - (this.price * this.discount / 100)).toFixed(2);
  }

  render(parent) {
    renderLicense(this, parent);
  }

  buy() {
    document.querySelector("#modal-title").textContent =
      `${this.software} ${this.version}`;
    document.querySelector("#license-key").textContent = this.key;
    document.querySelector("#buy-modal").classList.add("open");
    document.querySelector("#buy-modal").setAttribute("aria-hidden", "false");
  }
}
