import { LicenseController } from "./controllers/license.controller/license.controller.js";

async function startApp() {
  const response = await fetch("./data/licenses.json");
  const data = await response.json();

  const controller = new LicenseController(data);
  controller.renderFeatured();
  controller.renderOffers();
  controller.renderLatest();
  controller.renderAll();
  controller.setupModal();
}

startApp();
