export function renderCategoryList(root, categories, activeId) {
  root.innerHTML = categories
    .map(
      (c) =>
        `<li data-id="${c.id}" class="${c.id === activeId ? "active" : ""}">
       <span>${c.name}</span><span>›</span>
     </li>`
    )
    .join("");
}
