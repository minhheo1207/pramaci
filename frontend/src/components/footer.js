export function mountFooter(root) {
  root.innerHTML = `
    <div class="container section">
      <div class="grid foot">
        <div>
          <div class="logo light"><span class="dot"></span> PharmaX</div>
          <p>Đồng hành chăm sóc sức khoẻ gia đình bạn.</p>
          <p>Hotline: <strong>1800 0000</strong></p>
        </div>
        <div>
          <h4>Dịch vụ</h4>
          <div class="links">
            <a href="#">Giao hàng nhanh</a>
            <a href="#">Đặt thuốc Online</a>
            <a href="#">Tư vấn dược sĩ</a>
          </div>
        </div>
        <div>
          <h4>Chính sách</h4>
          <div class="links">
            <a href="#">Bảo mật</a>
            <a href="#">Đổi trả</a>
            <a href="#">Kiểm tra đơn</a>
          </div>
        </div>
        <div>
          <h4>Kết nối</h4>
          <div class="links">
            <a href="#">Facebook</a>
            <a href="#">Zalo</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
      <p class="copy">© 2025 PharmaX. Demo UI.</p>
    </div>
  `;
}
