import { License } from "../../types/license/license.js";
import { renderFeatured } from "../../parent/destacados3/destacados3.js";
import { renderOffers } from "../../parent/efectos3/efectos3.js";
import { renderLatest } from "../../parent/ultimas3/ultimas3.js";
import { renderAll } from "../../parent/todos3/todos3.js";

export class LicenseController {
  constructor(data) {
    this.licenses = data.map((item) => new License(item));
  }

  renderFeatured() {
    const parent = document.querySelector("#featured-products");
    const featured = this.licenses.filter((license) => license.featured);
    renderFeatured(featured, parent);
  }

  renderOffers() {
    const parent = document.querySelector("#offer-products");
    const offers = this.licenses
      .filter((license) => license.discount > 0)
      .sort((a, b) => b.discount - a.discount);
    renderOffers(offers, parent);
  }

  renderLatest() {
    const parent = document.querySelector("#latest-products");
    const latest = [...this.licenses].sort((a, b) => b.id - a.id);
    renderLatest(latest, parent);
  }

  renderAll() {
    const parent = document.querySelector("#all-products");
    renderAll(this.licenses, parent);
  }

  setupModal() {
    const modal = document.querySelector("#buy-modal");
    document.querySelector("#close-modal").addEventListener("click", () => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    });
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("open");
      }
    });
    document.querySelector("#copy-key").addEventListener("click", () => {
      const key = document.querySelector("#license-key").textContent;
      navigator.clipboard.writeText(key);
    });
  }
}
