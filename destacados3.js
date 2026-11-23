export function renderFeatured(licenses, parent) {
  parent.innerHTML = "";
  licenses.slice(0, 3).forEach((license) => license.render(parent));
}
