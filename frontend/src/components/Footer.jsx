import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="col">
          <h4>PharmaCity</h4>
          <p>
            Chuỗi nhà thuốc tiện lợi hàng đầu Việt Nam. Cam kết cung cấp sản
            phẩm chính hãng, tư vấn tận tâm và giao hàng nhanh chóng.
          </p>
        </div>

        <div className="col">
          <h4>Liên kết nhanh</h4>
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/khuyen-mai">Khuyến mãi</Link>
            </li>
            <li>
              <Link to="/hang-moi">Hàng mới</Link>
            </li>
            <li>
              <Link to="/ban-chay">Bán chạy</Link>
            </li>
            <li>
              <Link to="/bai-viet">Bài viết</Link>
            </li>
            <li>
              <Link to="/dich-vu">Dịch vụ</Link>
            </li>
          </ul>
        </div>

        <div className="col">
          <h4>Liên hệ</h4>
          <p>Hotline: 1800 6821</p>
          <p>Email: hotro@pharmacity.vn</p>
          <p>Địa chỉ: 123 Nguyễn Văn Cừ, TP.HCM</p>
        </div>
      </div>

      <div className="f-bottom">
        <div className="container">
          <p>© 2025 PharmaCity (Demo) — Made with ❤️ by Minh</p>
        </div>
      </div>
    </footer>
  );
}
