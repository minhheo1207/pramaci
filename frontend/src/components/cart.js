const state = {
  items: new Map(), // id -> { product, qty }
  open: false,
};

const fmt = (v) => v.toLocaleString("vi-VN") + "₫";

export function mountCart(root) {
  root.innerHTML = `
    <div class="drawer" id="drawer">
      <div class="backdrop" id="closeDrawer"></div>
      <div class="panel">
        <div class="panel-head">
          <strong>Giỏ hàng</strong>
          <button class="pill" id="closeDrawerBtn">Đóng</button>
        </div>
        <div class="panel-body">
          <div id="cartEmpty" class="muted center">Chưa có sản phẩm nào</div>
          <div id="cartItems" class="vstack"></div>
        </div>
        <div class="panel-foot">
          <div class="row"><strong>Tổng:</strong><strong id="cartTotal">0₫</strong></div>
          <button class="btn full" id="checkout">Thanh toán</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById("closeDrawer").addEventListener("click", closeCart);
  document
    .getElementById("closeDrawerBtn")
    .addEventListener("click", closeCart);
  document
    .getElementById("checkout")
    .addEventListener("click", () => alert("Demo: thanh toán"));
}

export function openCart() {
  state.open = true;
  document.getElementById("drawer").classList.add("open");
}

export function closeCart() {
  state.open = false;
  document.getElementById("drawer").classList.remove("open");
}

export function addToCart(product) {
  const c = state.items.get(product.id)?.qty || 0;
  state.items.set(product.id, { product, qty: c + 1 });
  renderCart();
}

export function attachCartBadge(badgeEl) {
  state.badgeEl = badgeEl; // <span id="cartCount">
  renderCart();
}

function renderCart() {
  const entries = [...state.items.values()];
  const count = entries.reduce((s, x) => s + x.qty, 0);
  const total = entries.reduce((s, x) => s + x.qty * x.product.price, 0);

  const cartCount = state.badgeEl;
  if (cartCount) cartCount.textContent = count;

  const cartTotal = document.getElementById("cartTotal");
  const cartItems = document.getElementById("cartItems");
  const cartEmpty = document.getElementById("cartEmpty");
  if (!cartTotal || !cartItems || !cartEmpty) return;

  cartTotal.textContent = fmt(total);
  cartItems.innerHTML = "";

  if (entries.length === 0) {
    cartEmpty.style.display = "block";
    return;
  }
  cartEmpty.style.display = "none";

  entries.forEach(({ product, qty }) => {
    const row = document.createElement("div");
    row.className = "cat";
    row.innerHTML = `
      <img src="${product.thumb}" alt="${
      product.name
    }" style="width:64px;height:64px;object-fit:cover;border-radius:12px"/>
      <div style="flex:1">
        <div class="title">${product.name}</div>
        <div class="muted" style="color:#64748b;font-size:13px">${fmt(
          product.price
        )} × ${qty}</div>
      </div>
      <div style="display:flex;gap:6px">
        <button class="pill" data-step="-1" data-id="${product.id}">-</button>
        <button class="pill" data-step="1" data-id="${product.id}">+</button>
      </div>`;
    cartItems.appendChild(row);
  });

  cartItems.addEventListener(
    "click",
    (e) => {
      const btn = e.target.closest("button.pill");
      if (!btn) return;
      const id = Number(btn.dataset.id);
      const step = Number(btn.dataset.step);
      const item = state.items.get(id);
      if (!item) return;
      item.qty += step;
      if (item.qty <= 0) state.items.delete(id);
      renderCart();
    },
    { once: true }
  );
}
