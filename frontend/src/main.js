import { getCategories, getProducts } from "./api/index";
import { mountHeader } from "./components/header";
import { mountFooter } from "./components/footer";
import {
  mountCart,
  openCart,
  addToCart,
  attachCartBadge,
} from "./components/cart";
import { productCard } from "./components/productCard";
import { renderCategoryList } from "./components/categoryList";

const $ = (s, sc = document) => sc.querySelector(s);
const grid = $("#productGrid");
const listTitle = $("#listTitle");
const sortSel = $("#sortSel");
const catList = $("#catList");

// 1) Mount static components
mountHeader($("#app-header"));
mountFooter($("#app-footer"));
mountCart($("#cart-root"));

// references after mount
const openCartBtn = $("#openCart");
const cartBadge = $("#cartCount");
const searchBtn = $("#btnSearch");
const searchInput = $("#q");

openCartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openCart();
});
attachCartBadge(cartBadge);

// 2) State
let categories = [];
let currentCat = 0; // 0 = All
let products = [];
let filtered = [];

// 3) Load data
init();
async function init() {
  try {
    categories = await getCategories();
    renderCategoryList(catList, categories, currentCat);

    products = await getProducts(currentCat);
    filtered = [...products];
    renderProducts();
  } catch (e) {
    console.error(e);
    grid.innerHTML = `<div class="cat">Error: ${e.message}</div>`;
  }
}

// 4) Category click
catList.addEventListener("click", async (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  currentCat = Number(li.dataset.id);
  renderCategoryList(catList, categories, currentCat);
  listTitle.textContent =
    currentCat === 0
      ? "Sản phẩm"
      : `Danh mục: ${categories.find((c) => c.id === currentCat)?.name}`;
  products = await getProducts(currentCat);
  filtered = [...products];
  sortSel.value = "";
  renderProducts();
});

// 5) Sorting
sortSel.addEventListener("change", () => {
  const s = sortSel.value;
  if (s === "priceAsc") filtered.sort((a, b) => a.price - b.price);
  if (s === "priceDesc") filtered.sort((a, b) => b.price - a.price);
  if (s === "ratingDesc") filtered.sort((a, b) => b.rating - a.rating);
  renderProducts();
});

// 6) Search
searchBtn.addEventListener("click", () => {
  const term = (searchInput.value || "").toLowerCase().trim();
  filtered = products.filter((p) => p.name.toLowerCase().includes(term));
  renderProducts(true);
});

$("#focusSearch").addEventListener("click", () => searchInput?.focus());
$("#shopNow").addEventListener("click", () =>
  grid.scrollIntoView({ behavior: "smooth" })
);
$("#openMap").addEventListener("click", () => alert("Demo: mở bản đồ"));

// 7) Render product list
function renderProducts(showEmptyMessage = false) {
  grid.innerHTML = "";
  if (filtered.length === 0) {
    grid.innerHTML = showEmptyMessage
      ? '<div class="cat">Không tìm thấy sản phẩm phù hợp.</div>'
      : "";
    return;
  }
  grid.innerHTML = filtered.map(productCard).join("");
}

// 8) Add-to-cart delegation
document.addEventListener("click", (e) => {
  const btn = e.target.closest("button.add");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const p =
    filtered.find((x) => x.id === id) || products.find((x) => x.id === id);
  if (p) addToCart(p);
});
