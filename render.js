export function renderLicense(license, parent) {
  const card = document.createElement("article");
  card.className = "product-card";

  const badge = license.featured
    ? '<span class="badge featured">Destacado</span>'
    : '<span class="badge">En stock</span>';
  const oldPrice = license.discount > 0
    ? `<span class="old-price">${license.price.toFixed(2)} €</span>`
    : "";

  card.innerHTML = `
    <div class="product-top">
      <div class="product-icon">${license.software.charAt(0)}</div>
    </div>
    <div class="badge-row">${badge}</div>
    <h3>${license.software}</h3>
    <p class="version">Versión ${license.version}</p>
    <div class="price-row">
      <div>
        ${oldPrice}
        <div class="price">${license.getFinalPrice()} €</div>
      </div>
      ${license.discount > 0 ? `<span class="badge">-${license.discount}%</span>` : ""}
    </div>
    <button class="buy-button" type="button">Comprar licencia</button>
  `;

  card.querySelector(".buy-button").addEventListener("click", () => {
    license.buy();
  });

  parent.appendChild(card);
}
