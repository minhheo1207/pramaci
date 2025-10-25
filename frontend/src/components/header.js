export function mountHeader(root) {
  root.innerHTML = `
    <div class="container nav">
      <a class="logo" href="#"><span class="dot"></span> PharmaX</a>
      <div class="search">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M21 21l-4.35-4.35" stroke="#334155" stroke-width="2" stroke-linecap="round"/>
          <circle cx="11" cy="11" r="7" stroke="#334155" stroke-width="2"/>
        </svg>
        <input id="q" placeholder="Tìm thuốc, vitamin, thiết bị y tế..." />
        <button class="btn ghost" id="btnSearch">Tìm kiếm</button>
      </div>
      <a class="pill" href="#stores">📍 Cửa hàng</a>
      <a class="pill cart" href="#" id="openCart">🛒 Giỏ hàng <span class="badge" id="cartCount">0</span></a>
    </div>
  `;
}
