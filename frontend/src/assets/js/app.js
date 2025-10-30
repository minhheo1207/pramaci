// Dữ liệu demo sản phẩm
const PRODUCTS = [
  {
    id: 1,
    name: "Paracetamol 500mg (vỉ 10 viên)",
    price: 16000,
    oldPrice: 22000,
    rating: 4.6,
    tag: "deals",
  },
  {
    id: 2,
    name: "Vitamin C 1000mg – bổ sung đề kháng",
    price: 69000,
    oldPrice: 99000,
    rating: 4.8,
    tag: "deals",
  },
  {
    id: 3,
    name: "Nhiệt kế điện tử đo trán",
    price: 259000,
    oldPrice: 329000,
    rating: 4.5,
    tag: "bestseller",
  },
  {
    id: 4,
    name: "Khẩu trang y tế 4 lớp (50 cái)",
    price: 39000,
    oldPrice: 55000,
    rating: 4.7,
    tag: "bestseller",
  },
  {
    id: 5,
    name: "Omega-3 Fish Oil 1000mg",
    price: 149000,
    oldPrice: 199000,
    rating: 4.4,
    tag: "deals",
  },
  {
    id: 6,
    name: "Men vi sinh hỗ trợ tiêu hóa",
    price: 119000,
    oldPrice: 149000,
    rating: 4.9,
    tag: "new",
  },
  {
    id: 7,
    name: "Máy đo huyết áp bắp tay",
    price: 649000,
    oldPrice: 799000,
    rating: 4.6,
    tag: "bestseller",
  },
  {
    id: 8,
    name: "Kem chống nắng SPF50+",
    price: 169000,
    oldPrice: 219000,
    rating: 4.3,
    tag: "new",
  },
  {
    id: 9,
    name: "Kẽm Gluconate 15mg",
    price: 89000,
    oldPrice: 119000,
    rating: 4.5,
    tag: "deals",
  },
  {
    id: 10,
    name: "Siro ho thảo dược",
    price: 59000,
    oldPrice: 79000,
    rating: 4.2,
    tag: "deals",
  },
];
const COMBOS = [
  {
    id: 101,
    name: "Combo Vitamin C + Kẽm (30 ngày)",
    price: 219000,
    oldPrice: 318000,
    rating: 4.8,
  },
  {
    id: 102,
    name: "Combo Chăm sóc da cơ bản",
    price: 329000,
    oldPrice: 499000,
    rating: 4.6,
  },
  {
    id: 103,
    name: "Combo Thiết bị Y tế gia đình",
    price: 899000,
    oldPrice: 1099000,
    rating: 4.7,
  },
  {
    id: 104,
    name: "Combo Sạch khuẩn – Khẩu trang + Gel",
    price: 129000,
    oldPrice: 179000,
    rating: 4.5,
  },
  {
    id: 105,
    name: "Combo Xương khớp – Canxi + D3",
    price: 279000,
    oldPrice: 359000,
    rating: 4.5,
  },
];

const state = { tab: "deals", cart: [] };
const fmt = (n) => n.toLocaleString("vi-VN") + "₫";

function star(r) {
  const s = Math.round(r);
  return (
    "★".repeat(Math.min(s, 5)) +
    '<span style="color:#cbd5e1">' +
    "★".repeat(5 - s) +
    "</span>"
  );
}
function productCard(p) {
  return `
  <div class="p-card">
    <div class="p-thumb"></div>
    <div class="p-body">
      <div class="p-title">${p.name}</div>
      <div class="rating" aria-label="Đánh giá">${star(
        p.rating
      )} <span style="color:#64748b">(${p.rating})</span></div>
      <div class="price"><div class="now">${fmt(
        p.price
      )}</div> <div class="old">${fmt(p.oldPrice)}</div></div>
      <div class="p-actions">
        <div class="qty"><button onclick="decQty(${
          p.id
        })">−</button><input id="qty-${
    p.id
  }" value="1" /><button onclick="incQty(${p.id})">+</button></div>
        <button class="btn primary" onclick="addToCart(${p.id})">Thêm</button>
      </div>
    </div>
  </div>`;
}
function renderProducts() {
  const holder = document.getElementById("productGrid");
  if (!holder) return;
  holder.innerHTML = PRODUCTS.filter((x) => x.tag === state.tab)
    .map(productCard)
    .join("");
}
function renderCombos() {
  const holder = document.getElementById("comboGrid");
  if (!holder) return;
  holder.innerHTML = COMBOS.map(productCard).join("");
}
function switchTab(key) {
  state.tab = key;
  document
    .querySelectorAll(".tabs button")
    .forEach((b) => b.classList.remove("active"));
  const map = { deals: 0, bestseller: 1, new: 2 };
  const btns = document.querySelectorAll(".tabs button");
  if (btns[map[key]]) btns[map[key]].classList.add("active");
  renderProducts();
}
// Qty helpers
function incQty(id) {
  const el = document.getElementById("qty-" + id);
  if (el) el.value = (+el.value || 1) + 1;
}
function decQty(id) {
  const el = document.getElementById("qty-" + id);
  if (el) el.value = Math.max(1, (+el.value || 1) - 1);
}

// Cart
function addToCart(id) {
  const p = [...PRODUCTS, ...COMBOS].find((x) => x.id === id);
  const qtyEl = document.getElementById("qty-" + id);
  const qty = qtyEl ? +qtyEl.value || 1 : 1;
  const existed = state.cart.find((i) => i.id === id);
  if (existed) existed.qty += qty;
  else state.cart.push({ id: p.id, name: p.name, price: p.price, qty });
  updateCartUI();
  toggleCart(true);
}
function clearCart() {
  state.cart.length = 0;
  updateCartUI();
}
function removeItem(id) {
  const idx = state.cart.findIndex((x) => x.id === id);
  if (idx > -1) state.cart.splice(idx, 1);
  updateCartUI();
}
function updateCartUI() {
  const items = document.getElementById("cartItems");
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  const total = state.cart.reduce((s, i) => s + i.qty * i.price, 0);
  const countEl = document.getElementById("cartCount");
  if (countEl) countEl.textContent = count;
  const totalEl = document.getElementById("cartTotal");
  if (totalEl) totalEl.textContent = fmt(total);
  if (items) {
    items.innerHTML = state.cart
      .map(
        (i) => `
    <div class="cart-item">
      <div class="thumb"></div>
      <div>
        <div style="font-weight:600">${i.name}</div>
        <div style="font-size:12px;color:#64748b">SL: ${i.qty}</div>
        <div style="margin-top:6px"><button class="btn ghost" onclick="removeItem(${
          i.id
        })">Xóa</button></div>
      </div>
      <div style="font-weight:700">${fmt(i.price * i.qty)}</div>
    </div>`
      )
      .join("");
  }
}
// Drawer
function toggleCart(show) {
  const d = document.getElementById("drawer");
  if (d) d.classList.toggle("active", !!show);
}
// Mobile menu
function toggleMobile(show) {
  const el = document.getElementById("mobileNav");
  if (el) el.style.display = show ? "block" : "none";
}
// Search demo
function evtSearch(e) {
  e.preventDefault();
  alert("Demo tìm kiếm. Tích hợp API sau.");
}
// Bindings after DOM ready
window.addEventListener("DOMContentLoaded", () => {
  const c1 = document.getElementById("btnCart");
  if (c1)
    c1.addEventListener("click", (e) => {
      e.preventDefault();
      toggleCart(true);
    });
  const c2 = document.getElementById("btnCart2");
  if (c2)
    c2.addEventListener("click", (e) => {
      e.preventDefault();
      toggleCart(true);
    });
  const hb = document.getElementById("btnHamb");
  if (hb) hb.addEventListener("click", () => toggleMobile(true));
  renderProducts();
  renderCombos();
});
