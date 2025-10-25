export function productCard(p) {
  const fmt = (v) => v.toLocaleString("vi-VN") + "₫";
  return `
    <div class="card">
      <div class="thumb"><img alt="${p.name}" src="${p.thumb}"/></div>
      <div class="body">
        <div class="title">${p.name}</div>
        <div class="rating">⭐ ${
          p.rating
        } • <span class="chip">Freeship 300k</span></div>
        <div><span class="price">${fmt(p.price)}</span><span class="old">${fmt(
    p.oldPrice
  )}</span></div>
        <div class="actions">
          <button class="btn add" data-id="${p.id}">Thêm vào giỏ</button>
          <button class="btn ghost">Chi tiết</button>
        </div>
      </div>
    </div>
  `;
}
