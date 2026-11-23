export function renderAll(licenses, parent) {
  parent.innerHTML = "";
  licenses.forEach((license) => license.render(parent));
}
